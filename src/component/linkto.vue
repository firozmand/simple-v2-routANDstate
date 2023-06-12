<script setup>

</script>

<template>
  <div class=" flex flex-wrap  mt-10 mb-10  ">

  <router-link to="/" active-class="bg-white" exact class="text-black mr-10 font-semibold  py-2 px-4 border border-white hover:border-transparent rounded">
    <a >home</a>
  </router-link>

  <router-link to="/user" exact active-class="bg-white" class="bg-transparent  text-white  font-semibold py-2 px-4 border  hover:border-transparent rounded">
    <a >user</a>
  </router-link>

  </div>
</template>

<style scoped>

</style>
