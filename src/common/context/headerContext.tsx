import { type Breadcrumb, type IHeaderContext } from '@models/index'
import { type ReactNode, createContext, useState, useMemo, useCallback } from 'react'

export const HeaderContext = createContext<IHeaderContext>({} as IHeaderContext)

export const HeaderProvider = ({ children }: { children: ReactNode | JSX.Element | JSX.Element[] }) => {
  const [breadcrumb, setBreadcrumb] = useState<Breadcrumb[]>([{ label: 'Dashboard' }])

  const handleBreadcrumb = useCallback((value: Breadcrumb[]) => {
    setBreadcrumb(value)
  }, [])

  const value = useMemo(() => ({
    breadcrumb,
    handleBreadcrumb
  }), [breadcrumb, handleBreadcrumb])

  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  )
}
