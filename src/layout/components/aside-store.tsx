import { PanelLeftCloseIcon, PanelLeftOpenIcon, ShoppingCart } from 'lucide-react'
import { useSidebar } from '@hooks/useSidebar'

import { Button } from '@components/ui/button'
import Navigation from './navigation'
import { AppConfig } from '@src/config/app.config'

const AsideStore = () => {
  const { isContract, toggleContract } = useSidebar()

  return (
    <aside className='hidden md:flex md:flex-col h-[100dvh] relative border-r dark:bg-dark-bg-secondary bg-light-bg-primary'>
      <div
        className={'h-14 border-b lg:h-[60px] flex gap-3 px-4 items-center justify-center relative shrink-0 text-light-text-primary dark:text-dark-text-primary font-medium text-lg'}
      >
        <div className={`${isContract ? 'hidden' : ''} flex items-center gap-3 w-full justify-center px-4`}>
          <ShoppingCart />
          <h1>{AppConfig.APP_NAME}</h1>
        </div>
        <Button
          variant='ghost'
          size='icon'
          onClick={toggleContract}
          className='shrink-0 h-8 w-8'
          title={isContract ? 'Expandir menú' : 'Contraer menú'}
        >
          {isContract ? <PanelLeftOpenIcon strokeWidth={1.5} /> : <PanelLeftCloseIcon strokeWidth={1.5} />}
        </Button>
      </div>
      <Navigation />
    </aside>
  )
}

export default AsideStore
