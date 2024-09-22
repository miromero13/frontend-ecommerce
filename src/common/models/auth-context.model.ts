import { AuthLogin } from "@users/models/login.model"
import { authStatus } from "@utils/index"

export interface AuthContextState {
  status: authStatus
  error: string[] | string
  signWithEmailPassword: (loginForm: AuthLogin) => Promise<void>
  // recoverPasswordWithEmail: (email: string) => Promise<boolean | undefined>
  // resetPasswordWithEmail: (loginForm: AuthLoginWithToken) => Promise<boolean | undefined>
  signOut: () => void
  isMutating: boolean
}
