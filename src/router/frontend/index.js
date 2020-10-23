import Index from '@/views/frontend/Index'
import Detail from '@/views/frontend/Detail'
import Cart from '@/views/frontend/Cart'
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
