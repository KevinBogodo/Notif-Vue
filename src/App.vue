
<template>
    <div v-if="$route.meta.header === 1 || $route.meta.header === 2" class="container">
          <Aside />
          <router-view />
  </div>
  <div v-else> 
    <router-view /> 
  </div>
</template>

<style>

</style>
