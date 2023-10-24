<script setup>
</script>

<template>
  <div>
    
    <h1 class="light mt-12 text-center pb-16">
      <span>Welcome</span>
      <span class="text-[--red]">!</span>
    </h1>
    <!-- Introdcutory row -->
    <div class="flex flex-row">
      <div class="flex-none xl:w-[40rem] w-[20rem] xl:h-[10rem] h-20 ">
        <h1>
          <span>
            My name is Elena
          </span>
          <span class="mr-[-8%]">           
            Clacova
          </span>
          <span class="text-[--red]">.</span>
        </h1>
      </div>
      
      <div class="flex-auto w-1/4"></div>
      <div class="flex-none grid grid-cols-2 gap-[3rem] w-[9rem]  pt-2">
          <LinkedinLogo />
          <InstaIcon />
      </div>
    </div>

    <!-- About me row -->
    <div class="flex flex-row-reverse">
      <div class="flex-none h-6 xl:w-[33.75rem] w-[22rem]">
        <p class="p-large">
          I am a motivated <span class="text-primary-red">19-year-old UX/UI <br> designer</span>
          with a strong passion for
          creating user-friendly and visually 
          pleasing digital interfaces. 
          I pay close attention to the details and 
          prioritize designing with the user's needs in mind. 
          <span class="text-primary-red">My goal...</span>
        </p>
      </div>
    </div>
  </div>

</template>

<script setup>
import LinkedinLogo from '@/components/icons/IconLinkedIn.vue'
import InstaIcon from '@/components/icons/IconInsta.vue'
</script>