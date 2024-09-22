import { PublicRoutes, Route } from '@src/common/models'
import { createElement, lazy } from 'react'

const LoginPage = lazy(() => import('@store/pages/login'))
const StorePage = lazy(() => import('@store/pages'))

export const PublicAllRoutes: Route[] = [
  {
    path: '/*',
    element: createElement(StorePage)
  },
  {
    path: PublicRoutes.STORE,
    element: createElement(StorePage)
  },
  {
    path: PublicRoutes.LOGIN,
    element: createElement(LoginPage)
  }
]
