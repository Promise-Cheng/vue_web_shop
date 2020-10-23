import Index from '@/views/frontend/Index'
import Detail from '@/views/frontend/Detail'
import Cart from '@/views/frontend/Cart'
import MyOrder from '@/views/frontend/MyOrder'
import Personal from '@/views/frontend/Personal'
import OrderSettle from '@/views/frontend/OrderSettle'
import Alipay from '@/views/frontend/alipay'

export default [
    {
      path: 'index',
      name: 'Index',
      component: Index,
    },
    {
      path: 'detail',
      name: 'Detail',
      component: Detail,
    },
    {
      path: 'orders',
      name: 'MyOrder',
      component: MyOrder,
    },
    {
      path: 'personal',
      name: 'Personal',
      component: Personal,
    },
    {
      path: 'order-settle',
      name: 'OrderSettle',
      component: OrderSettle,
    },
    {
      path: 'cart',
      name: 'Cart',
      component: Cart,
      meta:{
        hiddenHeader:true,
      }
    },
    {
      path: 'alipay',
      name: 'Alipay',
      component: Alipay,
    },
]
