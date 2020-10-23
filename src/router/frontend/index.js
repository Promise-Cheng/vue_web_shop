import Index from '@/views/frontend/Index'
import Detail from '@/views/frontend/Detail'
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
      path: 'alipay',
      name: 'Alipay',
      component: Alipay,
    },
]
