import { useContext } from "react"
import { ISidebarContext, SidebarContext } from "../context"

export const useSidebar = (): ISidebarContext => {
  const context = useContext(SidebarContext)
  if (!context) {
    throw new Error('useSidebar must be used within a SidebarProvider')
  }
  return context
}