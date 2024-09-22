import { createContext, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'

import { STORAGE_BRANCH, STORAGE_TOKEN, STORAGE_USER, authStatus, getStorage, removeStorage } from '@utils/index'
import { createUser, resetUser } from '@redux/slices/user.slice'
import { AuthContextState, type ChildrenProps } from '@models/index'
import { useAuthLogin, useCheckToken } from '@users/hooks/useAuth'
import { type AuthLogin } from '@users/models/login.model'

export const AuthContext = createContext<AuthContextState>({} as AuthContextState)

export const AuthProvider = ({ children }: ChildrenProps) => {
  const [status, setStatus] = useState<authStatus>(authStatus.loading)
  const [error, setError] = useState<string[]>([])
  // const { authLogin, isLoggingIn } = useAuthLogin() // Uncomment this line
  const { isLoggingIn } = useAuthLogin() // Remove this line
  const { checkToken } = useCheckToken()

  const dispatch = useDispatch()

  useEffect(() => {
    if (error.length > 0) {
      const timer = setTimeout(() => {
        setError([])
      }, 5000)
      return () => { clearTimeout(timer) }
    }
  }, [error])

  const subscribe = useRef(false)
  useEffect(() => {
    const checkAuthStatus = async () => {
      const token = getStorage(STORAGE_TOKEN)
      if (!token) {
        setStatus(authStatus.unauthenticated)
        dispatch(resetUser())
        removeStorage(STORAGE_USER)
        return
      }
      try {
        const responseUser = await checkToken({ token })
        dispatch(createUser(responseUser))
        setStatus(authStatus.authenticated)
      } catch {
        removeStorage(STORAGE_TOKEN)
        removeStorage(STORAGE_USER)
        removeStorage(STORAGE_BRANCH)
        setStatus(authStatus.unauthenticated)
        dispatch(resetUser())
      }
    }
    if (!subscribe.current) {
      void checkAuthStatus()
    }
    return () => {
      subscribe.current = true
    }
  }, [checkToken, dispatch])

  const signOut = useCallback(() => {
    removeStorage(STORAGE_TOKEN)
    removeStorage(STORAGE_USER)
    removeStorage(STORAGE_BRANCH)
    dispatch(resetUser())
    setStatus(authStatus.unauthenticated)
  }, [dispatch])

  const signWithEmailPassword = useCallback(async (formData: AuthLogin) => {
    try {
      console.log(formData)
      // llamada al backend
      // if (formData.password === '') throw new Error('La contraseña es requerida')
      // setStatus(authStatus.loading)
      // const userResponse = await authLogin(formData)
      // dispatch(createUser(userResponse))
      setStatus(authStatus.authenticated)
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError([error.message])
      } else {
        setError(['Servicio no disponible, intente más tarde.'])
      }
      setStatus(authStatus.unauthenticated)
    }
  }, [])

  // const recoverPasswordWithEmail = async (email: string): Promise<boolean | undefined> => {
  //   // Implement the function to recover password with email
  //   console.log(email)
  //   return true // or appropriate boolean value based on your implementation
  // }

  // const resetPasswordWithEmail = async (token: string, newPassword: string): Promise<boolean | undefined> => {
  //   // Implement the function to reset password with email
  //   console.log(token, newPassword)
  //   return true // or appropriate boolean value based on your implementation
  // }

  const value = useMemo(() => {
    return { status, error, signOut, signWithEmailPassword, isMutating: isLoggingIn }
  }, [status, error, signOut, signWithEmailPassword, isLoggingIn])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
