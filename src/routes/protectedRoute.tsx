import { Navigate, Outlet } from 'react-router-dom'

import { type ChildrenProps } from '@models/index'
import Loading from '@components/loading'
import { useEffect, useRef, useState } from 'react'
import { authStatus } from '@utils/index'
import { useAuth } from '@hooks/useAuth'
import { AppConfig } from '@src/config/app.config'

interface ProtectedRouteProps extends Partial<ChildrenProps> {
  isPrivate?: boolean
  redirectTo?: string
}

const ProtectedRoute = ({ isPrivate = false, redirectTo = '/login', children }: ProtectedRouteProps) => {
  const { status } = useAuth()
  const [render, setRender] = useState(true)

  const subscribe = useRef(false)
  useEffect(() => {
    if (!subscribe.current) {
      setRender(false);
    }
    return () => {
      subscribe.current = true
    }
  }, [])

  if (render) {
    return (
      <div className='flex gap-4 min-h-screen justify-center items-center'>
        <Loading /><span>{AppConfig.APP_NAME}</span>
      </div>
    )
  }

  if ((status === authStatus.unauthenticated && isPrivate) ||
    (status === authStatus.authenticated && !isPrivate)) {
    return <Navigate to={redirectTo} replace />
  }

  return children ?? <Outlet />
}

export default ProtectedRoute
