// import { PERMISSION, PrivateRoutes } from '@models/index'
import { DollarSignIcon, FileText, KeyIcon, LogOut, PackageIcon, ShoppingBag, ShoppingCart, Tag, Truck, UserCogIcon, UserIcon, UsersIcon } from 'lucide-react'
// import { KeyIcon, UserCogIcon, UserIcon, UsersIcon } from 'lucide-react'
import { createElement } from 'react'
import { PrivateRoutes } from '../models'

export interface MenuHeaderRoute {
  path?: string
  label: string
  icon?: JSX.Element
  children?: MenuHeaderRoute[]
  // permissions?: PERMISSION[]
}

export const MenuSideBar: MenuHeaderRoute[] = [
  {
    label: 'Gestión de Usuarios',
    icon: createElement(UserCogIcon, { width: 20, height: 20 }),
    path: PrivateRoutes.USER,
    // permissions: [PERMISSION.USER, PERMISSION.USER_SHOW, PERMISSION.ROLE, PERMISSION.ROLE_SHOW, PERMISSION.PERMISSION, PERMISSION.PERMISSION_SHOW],
    children: [
      {
        path: PrivateRoutes.USER,
        label: 'Usuarios',
        icon: createElement(UsersIcon, { width: 20, height: 20 }),
        // permissions: [PERMISSION.USER, PERMISSION.USER_SHOW]
      },
      {
        path: PrivateRoutes.ROLES,
        label: 'Roles',
        icon: createElement(UserIcon, { width: 20, height: 20 }),
        // permissions: [PERMISSION.ROLE, PERMISSION.ROLE_SHOW]
      },
      {
        path: PrivateRoutes.PERMISSIONS,
        label: 'Permisos',
        icon: createElement(KeyIcon, { width: 20, height: 20 }),
        // permissions: [PERMISSION.PERMISSION, PERMISSION.PERMISSION_SHOW]
      }
    ]
  },
  // {
  //   label: 'Administrar Empresa',
  //   icon: createElement(Building2Icon, { width: 20, height: 20 }),
  //   path: '/empresa',
  //   permissions: [PERMISSION.COMPANY, PERMISSION.BRANCH, PERMISSION.BRANCH_SHOW, PERMISSION.BINNACLE],
  //   children: [
  //     {
  //       path: PrivateRoutes.COMPANY,
  //       label: 'Empresa',
  //       icon: createElement(BuildingIcon, { width: 20, height: 20 }),
  //       permissions: [PERMISSION.COMPANY]
  //     },
  //     {
  //       path: PrivateRoutes.BRANCH,
  //       label: 'Sucursales',
  //       icon: createElement(FuelIcon, { width: 20, height: 20 }),
  //       permissions: [PERMISSION.BRANCH, PERMISSION.BRANCH_SHOW]
  //     },
  //     {
  //       path: PrivateRoutes.BINACLE,
  //       label: 'Bitácora',
  //       icon: createElement(ScrollTextIcon, { width: 20, height: 20 }),
  //       permissions: [PERMISSION.BINNACLE]
  //     }
  //   ]
  // },
  {
    label: 'Inventario',
    icon: createElement(PackageIcon, { width: 20, height: 20 }),
    path: PrivateRoutes.PRODUCT,
    // permissions: [PERMISSION.PRODUCT, PERMISSION.PRODUCT_SHOW, PERMISSION.FUEL, PERMISSION.FUEL_SHOW, PERMISSION.CATEGORY, PERMISSION.CATEGORY_SHOW, PERMISSION.GROUP, PERMISSION.GROUP_SHOW, PERMISSION.PRODUCT_OUTPUT, PERMISSION.PRODUCT_OUTPUT_SHOW],
    children: [
      {
        path: PrivateRoutes.PRODUCT,
        label: 'Productos',
        icon: createElement(ShoppingBag, { width: 20, height: 20 }),
        // permissions: [PERMISSION.PRODUCT, PERMISSION.PRODUCT_SHOW]
      },
      {
        path: PrivateRoutes.GROUP,
        label: 'Grupos y categorias',
        icon: createElement(UsersIcon, { width: 20, height: 20 }),
        // permissions: [PERMISSION.GROUP, PERMISSION.GROUP_SHOW]
      },
      {
        path: PrivateRoutes.OUPUT_PRODUCT,
        label: 'Salida de productos',
        icon: createElement(LogOut, { width: 20, height: 20 }),
        // permissions: [PERMISSION.PRODUCT_OUTPUT, PERMISSION.PRODUCT_OUTPUT_SHOW]
      }
    ]
  },
  {
    label: 'Compras',
    icon: createElement(ShoppingCart, { width: 20, height: 20 }),
    path: '/proveedores',
    // permissions: [PERMISSION.PURCHASE_ORDER, PERMISSION.PURCHASE_ORDER_SHOW, PERMISSION.BUY_NOTE, PERMISSION.BUY_NOTE_SHOW],
    children: [
      {
        path: PrivateRoutes.PROVIDER,
        label: 'Proveedores',
        icon: createElement(Truck, { width: 20, height: 20 }),
        // permissions: [PERMISSION.PROVIDER, PERMISSION.PROVIDER_SHOW]
      },
      {
        path: PrivateRoutes.BUY,
        label: 'Compras',
        icon: createElement(FileText, { width: 20, height: 20 }),
        // permissions: [PERMISSION.BUY_NOTE, PERMISSION.BUY_NOTE_SHOW]
      }
    ]
  },
  {
    label: 'Ventas',
    icon: createElement(DollarSignIcon, { width: 20, height: 20 }),
    path: '/ventas',
    // permissions: [PERMISSION.DISCOUNT, PERMISSION.DISCOUNT_SHOW, PERMISSION.SALE_NOTE, PERMISSION.SALE_NOTE_SHOW, PERMISSION.DISPENSER, PERMISSION.DISPENSER_SHOW],
    children: [
      {
        path: PrivateRoutes.DISCOUNT,
        label: 'Descuentos',
        icon: createElement(Tag, { width: 20, height: 20 }),
        // permissions: [PERMISSION.DISCOUNT, PERMISSION.DISCOUNT_SHOW]
      },
      {
        path: PrivateRoutes.SALES,
        label: 'Ventas',
        icon: createElement(ShoppingCart, { width: 20, height: 20 }),
        // permissions: [PERMISSION.SALE_NOTE, PERMISSION.SALE_NOTE_SHOW]
      },
      {
        path: PrivateRoutes.PURCHASE_ORDER,
        label: 'Ordenes',
        icon: createElement(ShoppingCart, { width: 20, height: 20 }),
        // permissions: [PERMISSION.PURCHASE_ORDER, PERMISSION.PURCHASE_ORDER_SHOW]
      },
    ]
  }
]
