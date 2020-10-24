import Index from "@/views/background/Index";
import Carousel from "@/views/background/Carousel";
import Category from "@/views/background/Category";

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
]
