import { createElement, lazy } from 'react'
import { PrivateRoutes, type Route } from '@models/routes.model'
import { PERMISSION } from '@src/common/models'

// const ProfilePage = lazy(() => import('@users/pages/profile'))
// const ProfileForm = lazy(() => import('@users/pages/profile/components/profile-form'))
const UserPage = lazy(() => import('@users/pages/users'))
// const UserFormPage = lazy(() => import('@users/pages/users/components/user-form'))
const RolesPage = lazy(() => import('@users/pages/roles'))
const RolesFormPage = lazy(() => import('@users/pages/roles/components/role-form'))
const PermissionsPage = lazy(() => import('@users/pages/permissions'))
const PermissionsFormPage = lazy(() => import('@users/pages/permissions/components/permissions-form'))

export const userRoutes: Route[] = [
  // {
  //   path: PrivateRoutes.PROFILE,
  //   element: createElement(ProfilePage),
  //   permissions: [] as PERMISSION[]
  // },
  // {
  //   path: PrivateRoutes.PROFILE_UPDATE,
  //   element: createElement(ProfileForm, { buttonText: 'Actualizar', title: 'Actualizar su Cuenta' }),
  //   permissions: [] as PERMISSION[]
  // },
  {
    path: PrivateRoutes.USER,
    element: createElement(UserPage),
    permissions: [PERMISSION.USER, PERMISSION.USER_SHOW]
  },
  // {
  //   path: PrivateRoutes.USER_CREAR,
  //   element: createElement(UserFormPage, { buttonText: 'Guardar Usuario', title: 'Crear Usuario' }),
  //   permissions: [PERMISSION.USER]
  // },
  // {
  //   path: PrivateRoutes.USER_EDIT,
  //   element: createElement(UserFormPage, { buttonText: 'Editar Usuario', title: 'Actualizar Usuario' }),
  //   permissions: [PERMISSION.USER]
  // },
  {
    path: PrivateRoutes.ROLES,
    element: createElement(RolesPage),
    permissions: [PERMISSION.ROLE, PERMISSION.ROLE_SHOW]
  },
  {
    path: PrivateRoutes.ROLE_FORM,
    element: createElement(RolesFormPage, { title: 'Crear Rol', buttonText: 'Guardar Rol' }),
    permissions: [PERMISSION.ROLE]
  },
  {
    path: PrivateRoutes.ROLE_EDIT,
    element: createElement(RolesFormPage, { title: 'Actualizar Rol', buttonText: 'Guardar Rol' }),
    permissions: [PERMISSION.ROLE]
  },
  {
    path: PrivateRoutes.PERMISSIONS,
    element: createElement(PermissionsPage),
    permissions: [PERMISSION.PERMISSION, PERMISSION.PERMISSION_SHOW]
  },
  {
    path: PrivateRoutes.PERMISSIONS_CREATE,
    element: createElement(PermissionsFormPage, { title: 'Crear Permiso', buttonText: 'Guardar Permiso' }),
    permissions: [PERMISSION.PERMISSION]
  },
  {
    path: PrivateRoutes.PERMISSIONS_EDIT,
    element: createElement(PermissionsFormPage, { title: 'Actualizar Permiso', buttonText: 'Guardar Permiso' }),
    permissions: [PERMISSION.PERMISSION]
  }
]
