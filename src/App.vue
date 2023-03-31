<template>
  <div>
   <RouterView v-slot="{ Component }">
    <template v-if="Component">
      
        <Suspense>
          <component :is="Component"></component>
        </Suspense>
   
    </template>
  </RouterView>
  </div>
</template>

<script setup>




</script>

<style lang="scss" scoped>

</style>
