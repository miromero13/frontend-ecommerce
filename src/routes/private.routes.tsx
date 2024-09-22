import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import { PrivateAllRoutes } from './utils/routes.utils'
import { HeaderProvider, SidebarProvider } from '@src/common/context'
import { useAuthorization } from '@src/common/hooks'
import { PERMISSION } from '@src/common/models'

const Layout = lazy(() => import('@layout/index'))

const Private = () => {
  const { verifyPermission } = useAuthorization()

  return (
    <Routes>
      <Route element={
        <SidebarProvider>
          <HeaderProvider>
            <Layout />
          </HeaderProvider>
        </SidebarProvider>
      }>
        {
          PrivateAllRoutes.map(({ element, path, permissions }, index) => {
            if (permissions?.length === 0 || verifyPermission(permissions as PERMISSION[])) {
              return (
                <Route key={index} path={path} element={element} />
              )
            } else {
              return undefined
            }
          })
        }
      </Route >
    </Routes >
  )
}

export default Private
