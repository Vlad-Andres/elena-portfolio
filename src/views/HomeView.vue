<script setup>
</script>

<template>
  <div>
    <h1 class="light mt-12 text-center pb-16">
      <span>Welcome</span>
      <span class="text-[--red]">!</span>
    </h1>
    <div class="flex">
      <div class="flex-none lg:w-[40rem] w-[20rem] h-24 ">
        <h1>
          <span>
            My name is Elena
          </span>
          <span class="mr-[-4rem]">           
            Clacova
          </span>
          <span class="text-[--red]">.</span>
        </h1>
      </div>
      <div class="flex-auto w-1/4 h-24 "></div>
      <div class="flex-none grid grid-cols-2 gap-[3rem] w-[9rem] pt-2 ">
          <LinkedinLogo />
          <InstaIcon />
      </div>
    </div>
  </div>
</template>

<script setup>
import LinkedinLogo from '@/components/icons/IconLinkedIn.vue'
import InstaIcon from '@/components/icons/IconInsta.vue'
</script>