import { Route, Routes as BaseRoutes } from 'react-router-dom'
import ProtectedRoute from './protectedRoute'
import Private from './private.routes'
import Public from './public.routes'
import { lazy } from 'react'
import { PrivateRoutes, PublicRoutes } from '@models/routes.model'

const LoginAdminPage = lazy(() => import('@users/pages/login'))
const LoginPage = lazy(() => import('@store/pages/login'))

const Routes = () => {
  return (
    <BaseRoutes>
      {/* Rutas públicas */}
      <Route path='/*' element={<Public />} />
      <Route path={PublicRoutes.LOGIN} element={<LoginPage />} />
      {/* Rutas públicas, pero si ya está autenticado ocultar dichas rutas */}
      <Route element={<ProtectedRoute redirectTo={PrivateRoutes.DASHBOARD} />}>
        <Route path={PublicRoutes.ADMIN_LOGIN} element={<LoginAdminPage />} />
      </Route>
      {/* Rutas privadas */}
      <Route element={<ProtectedRoute isPrivate redirectTo={PublicRoutes.ADMIN_LOGIN} />}>
        <Route path='/app/*' element={<Private />} />
      </Route>
    </BaseRoutes >
  )
}

export default Routes
