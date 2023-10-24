<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template>
    <div class="w-[82.4%] mx-auto border-solid border-r-[3px] border-red-darker h-screen">
      <div  class="content-container xl:w-[1120px] w-[640px] mx-auto ">
        <Navbar/>
        <RouterView/>
      </div>
    </div>
</template>

<style scoped>
.content-container::after {
  position: absolute;
  width: 100%;
  border-bottom: 3px solid var(--red-darker);  
  display: block;
  content: " ";
  left:0;
  top: 96px;
}
</style>