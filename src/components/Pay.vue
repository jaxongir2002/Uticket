<template>
    <div>
<NavVue/>
<div class="container mt-5 p-2 ">
<h1 class="h1">Ro'yxatdan o'tish</h1>
<div class=" py-3">
<label for="1" class="m-1">Ism va Familya</label>
<input type="text" class="form-control rounded-3 w-50 m-1" placeholder="Ism va Familya">
<label for="2" class="m-1">Karta raqamingizni kiriting</label>
<input type="text" class="form-control rounded-3 w-50 m-1" placeholder="Karta raqamingizni kiriting">
<label for="3" class="m-1">Amal qilish muddatini kiriting</label>
<input type="text" class="form-control rounded-3 w-50 m-1" placeholder="Amal qilish muddatini kiriting">
</div>
<div>
<img src="../../src/assets/plasticKarta.png" alt="">
</div>

</div>
    </div>
</template>

<script setup> 
import NavVue from './Nav.vue';
</script>

<style  scoped>
.h1{
    font-family: sans-serif;
    font-weight: bolder;
  
}

</style>