import { Link } from 'react-router-dom'
import { type MenuHeaderRoute, MenuSideBar } from '@utils/sidebar.utils'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from '@components/ui/collapsible'
import { ChevronRightIcon, SettingsIcon } from 'lucide-react'
import { PrivateRoutes } from '@models/routes.model'
import { useSidebar } from '@hooks/index'

function Navigation() {
  const { isContract, menuActive, selectedMenu, toggleContract, handleActivateMenu } = useSidebar()


  return (
    <nav className="flex h-full flex-col w-full justify-between overflow-hidden">
      <section className='flex flex-col w-full gap-1 items-start p-4 overflow-y-auto relative overflow-x-hidden'>
        {MenuSideBar.map((item: MenuHeaderRoute, index) => {
          return (
            <Collapsible key={index} open={menuActive[item.label]} className='w-full'>
              <CollapsibleTrigger
                className='w-full group'
                onClick={() => {
                  handleActivateMenu(item.label)
                  if (isContract) {
                    toggleContract();
                  }
                }}
                title={item.label}
              >
                <div
                  className={`${selectedMenu.includes(item.path!)
                    ? 'text-light-text-primary dark:text-dark-text-primary'
                    : 'text-light-text-secondary dark:text-dark-text-secondary'}
                      ${isContract && selectedMenu.includes(item.path!) ? 'hover:bg-light-border dark:bg-dark-border' : ''}
                      h-10 flex items-center justify-between gap-3 rounded-md pl-4 pr-2 py-2 transition-all w-full hover:bg-light-border hover:dark:bg-dark-border text-base font-normal`}
                >
                  <div className='flex items-center gap-3 w-full overflow-hidden [&>svg]:shrink-0'>
                    {item.icon}
                    <span className={`${isContract ? 'hidden' : ''} overflow-hidden text-ellipsis whitespace-nowrap`}>{item.label}</span>
                  </div>
                  <ChevronRightIcon className={`${isContract ? 'hidden' : ''} group-aria-expanded:rotate-90 transition-transform shrink-0`} />
                </div>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <div className="flex flex-col pl-9 relative w-full">
                  {item.children && item.children.map((child, index) => {
                    return (
                      <Link
                        key={index}
                        to={child.path!}
                        className={`${selectedMenu === child.path ? 'bg-light-bg-secondary dark:bg-dark-border text-light-text-primary dark:text-dark-text-primary font-semibold' : 'text-light-text-secondary dark:text-dark-text-secondary'} h-10 flex items-center gap-3 rounded-lg px-3 py-2 mt-1 transition-all hover:bg-light-border hover:dark:bg-dark-border text-base font-normal w-full`}
                      >
                        {child.icon}
                        <span className={`${isContract ? 'hidden' : ''} overflow-hidden text-ellipsis whitespace-nowrap`}>{child.label}</span>
                      </Link>
                    )
                  })}
                  <hr className='absolute left-6 h-full border-r border-dashed' />
                </div>
              </CollapsibleContent>
            </Collapsible>)
        }
        )}
      </section>
      <section className='border-t p-4'>
        <Link
          to={PrivateRoutes.SETTINGS}
          className={`${selectedMenu === PrivateRoutes.SETTINGS ? 'text-light-text-primary dark:text-dark-text-primary hover:bg-light-border dark:bg-dark-border font-semibold' : 'text-light-text-secondary dark:text-dark-text-secondary'} h-10 flex items-center gap-3 rounded-md px-4 py-2 transition-all w-full hover:bg-light-border hover:dark:bg-dark-border text-base font-normal`}
        >
          <SettingsIcon width={22} height={22} />
          <span className={isContract ? 'hidden' : ''}>Configuración</span>
        </Link>
      </section>
    </nav>
  )
}

export default Navigation
