import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
import { PublicAllRoutes } from '@routes/utils'
import { HeaderProvider, SidebarProvider } from '@src/common/context'
const Layout = lazy(() => import('@layout/layout-store'))

const Public = () => {

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
          PublicAllRoutes.map(({ element, path }, index) => {
            return (
              <Route key={index} path={path} element={element} />
            )
          })
        }
      </Route >
    </Routes >
  )
}

export default Public
