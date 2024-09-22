import { type ApiBase } from '@models/index'
// import { type Branch } from '@modules/company/models/branch.model'
import { Role } from './role.model'
import { GENDER } from '@utils/index'

export interface User extends ApiBase {
  name: string
  ci: number
  email: string
  address: string
  phone: string
  gender: GENDER
  isActive: boolean
  role: Role
  // branch?: Branch
  password: string
}
export interface CreateUser extends Partial<Omit<User, 'role' | 'branch' | 'gender'>> {
  gender: string
  role: string
  branch?: string
}

export type UpdateUser = Partial<CreateUser>
