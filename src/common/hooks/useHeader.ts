import { HeaderContext } from '@context/headerContext'
import { type Breadcrumb, type IHeaderContext } from '@models/index'
import { useContext, useEffect, useRef } from 'react'

export const useHeader = (value?: Breadcrumb[]): IHeaderContext => {
  const context = useContext(HeaderContext)
  if (!context) {
    throw new Error('useHeader must be used within a HeaderProvider')
  }

  const subscribe = useRef(true)
  useEffect(() => {
    if (subscribe.current) {
      const { handleBreadcrumb } = context
      if (value) {
        handleBreadcrumb(value)
      }
    }
    return () => {
      subscribe.current = false
    }
  }, [context, value])

  return context
}
