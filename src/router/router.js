import { createRouter, createWebHashHistory } from "vue-router";

import Stadion from '../../src/components/Stadion.vue'
import Home from '../../src/components/Home.vue'
import Pay from '../../src/components/Pay.vue'

const routes  = [  

   {
    path:'/',
    name:'Home',
    component:Home
   },
   {
      path:'/Stadion/:id',
      name:'Stadion',
      component:Stadion,
      props:true
     },
     {
      path:'/Pay',
      name:'Pay',
      component:Pay,
   
     },

]



let router  = createRouter({
   history: createWebHashHistory(),
   routes,
 })
  
  
  export default router ;