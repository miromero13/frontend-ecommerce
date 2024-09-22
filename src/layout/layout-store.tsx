import { Outlet } from 'react-router-dom'

import Header from './components/header-store'
import MainPage from './components/main-page'
// import { Toaster } from '@components/ui/sonner'

const LayoutStore = () => {
  return (
    <div className={``}>
      <div className='max-h-[100dvh] overflow-hidden'>
        <Header />
        <div className='flex flex-row w-full h-[calc(100dvh-56px)] lg:h-[calc(100dvh-60px)] relative overflow-hidden bg-light-bg-secondary dark:bg-dark-bg-primary'>
          <MainPage>
            <Outlet />
          </MainPage>
          {/* <Toaster richColors /> */}
        </div>
      </div>
    </div>
  )
}

export default LayoutStore
