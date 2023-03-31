<template>
   <h3 class="container m-5 m-auto p-2">Barcha O'yinlar</h3>



    <div class=" container row m-auto p-2 gap-3" >
    <div class="card card1 mt-3 col-4"  v-for="games1 of games" :key="games1">
      <img :src="`https://test.utickets.uz/api/Images/${games1.imageId}`" class="card-img-top  m-auto img_with mt-4"
        alt="Fissure in Sandstone"/>
      <div class="card-body">
        <h6 class="card-title">{{ games1.name }}</h6>
        <h6>{{ games1.startsAt }}</h6>
        <router-link :to="{name:'Stadion', params:{id:games1.id}}"  class="btn btn-primary m-auto d-block mt-5"> By ticket  <i
            class="fas fa-cart-arrow-down ms-2"></i></router-link>
      </div>
    </div>

  </div>

 
</template>

<script setup>
import { useRouter,  } from "vue-router";
import { onMounted,ref } from "vue";
import base from '../../src/axios/axios.js'
import axios from 'axios'
const games = ref([])
console.log(games)

onMounted(() => {
  axios.get(`${base}api/Events`).then(
  el=>el.data.forEach((el1,index) => {
   
   
    games.value.push(el1)
 
  })
 
  
)

})





</script>

<style lang="scss" scoped>
.card1 {
  width: 300px !important;
  height: 300px !important;
}
.img_with{
  width: 170px;
  height: 130px;
}
</style>