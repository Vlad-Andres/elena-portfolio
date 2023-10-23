<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
</script>

<template >
    <div 
      class="lg:mr-32 flex border-solid border-2 border-red-darker h-screen w-1 ml-auto mr-16 absolute right-0">
    </div>
      <Navbar/>

  <RouterView class="px-[--margin-x-content]"/>
</template>

