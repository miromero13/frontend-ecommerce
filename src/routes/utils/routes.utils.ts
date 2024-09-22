import { createElement, lazy } from 'react'
import { PrivateRoutes, type Route } from '@models/routes.model'
import { type PERMISSION } from '@src/common/models'
import { userRoutes } from './users.utils'
// import { inventoryRoutes } from './inventory.utils'
// import { type PERMISSION } from '@modules/auth/utils/permissions.constants'
// import { buyRoutes } from './buy.utils'
// import { salesRoutes } from './sales'

const DashboardPage = lazy(() => import('@dashboard/index'))
const SettingPage = lazy(() => import('@settings/pages/setting'))
// const NotificationPage = lazy(() => import('@modules/inventory/pages/notification'))
const NotFound = lazy(() => import('@components/not-found'))

export const PrivateAllRoutes: Route[] = [
  {
    path: '/*',
    element: createElement(NotFound),
    permissions: [] as PERMISSION[]
  },
  {
    path: PrivateRoutes.DASHBOARD,
    element: createElement(DashboardPage),
    permissions: [] as PERMISSION[]
  },
  {
    path: PrivateRoutes.SETTINGS,
    element: createElement(SettingPage),
    permissions: [] as PERMISSION[]
  },
  // {
  //   path: PrivateRoutes.NOTIFICATIONS,
  //   element: createElement(NotificationPage),
  //   permissions: [] as PERMISSION[]
  // },
  ...userRoutes,
  // ...companyRoutes,
  // ...inventoryRoutes,
  // ...buyRoutes,
  // ...salesRoutes
]
