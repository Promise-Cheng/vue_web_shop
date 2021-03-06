import Index from "@/views/background/Index";
import Carousel from "@/views/background/Carousel";
import Category from "@/views/background/Category";
import Goods from "@/views/background/Goods";
import BestSeller from "@/views/background/BestSeller";
import NewProductLaunched from "@/views/background/NewProductLaunched";
import RecommendedForYou from "@/views/background/RecommendedForYou";
import Orders from "@/views/background/Orders";
import Profile from "@/views/background/Profile";

export default [
  {
    path: 'index',
    name: 'Index',
    component: Index,
  },
  {
    path: 'carousel',
    name: 'Carousel',
    component: Carousel,
  },
  {
    path: 'category',
    name: 'Category',
    component: Category,
  },
  {
    path: 'goods',
    name: 'Goods',
    component: Goods,
  },
  {
    path: 'bestseller',
    name: 'BestSeller',
    component: BestSeller,
  },
  {
    path: 'newProductLaunched',
    name: 'NewProductLaunched',
    component: NewProductLaunched,
  },
  {
    path: 'recommendedForYou',
    name: 'RecommendedForYou',
    component: RecommendedForYou,
  },
  {
    path: 'orders',
    name: 'Orders',
    component: Orders,
  },
  {
    path: 'profile',
    name: 'Profile',
    component: Profile,
  },
]
