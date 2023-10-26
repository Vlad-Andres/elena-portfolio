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
        <div class="h1">
          <span>
            My name is Elena
          </span>
          <span class="mr-[-8%]">           
            Clacova
          </span>
          <span class="text-[--red]">.</span>
        </div>
      </div>
      
      <div class="flex-auto w-1/4"></div>
      <div class="flex-none grid grid-cols-2 gap-[3rem] w-[9rem]  pt-2">
          <LinkedinLogo />
          <InstaIcon />
      </div>
    </div>

    <!-- About me row -->
    <div class="flex flex-row-reverse">
      <div class="flex flex-col flex-none">
        <div class="flex-none xl:w-[33.75rem] w-[22rem]">
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
        <div class="flex-none xl:w-[33.75rem] w-[22rem] mt-4">
         <a href="/read-more">
            <h5 class="text-right">Read more<ArrowRight class="inline"/> </h5>
         </a>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <div 
        class="w-full h-[450px] bg-red-lighter block absolute left-0 mb-10 line-after after:top-[542px]"> 
        <img src="@/assets/profile-image.jpeg" alt="illustration" class="object-cover w-full h-full object-top-[100px]"/>
      </div>

      <div class="w-full h-[450px] bg-red-dark"></div>
      <div class="mt-[110px] mb-[20px]">
        <h1 class="text-center">
          <span>
            Have you seen my projects
          </span>
          <span class="text-primary-red">
            ?
          </span>
        </h1>
      </div>

      <div class="w-full line-before">
      <div class="flex flex-col gap-[128px] my-[128px]">
        <ProjectItem :name="'The “Hora” delivery app'" :hashtags="['Web design', 'Mobile design', 'UX/UI desing']"/>
        <ProjectItem :number="'2'" :name="'The “MedTracker” app'" :hashtags="['Mobile design', 'UX/UI desing']"/>
        <ProjectItem :number="'3'" :name="'The Portfolio website'" :hashtags="['Web design', 'UX/UI desing']"/>
      </div>

      </div>

    </div>

    <Footer />
  </div>

</template>

<script setup>
import LinkedinLogo from '@/components/icons/IconLinkedIn.vue'
import InstaIcon from '@/components/icons/IconInsta.vue'
import ArrowRight from '@/components/icons/IconArrowRight.vue'
import ProjectItem from '@/components/ProjectItem.vue'
import Footer from '@/components/Footer.vue'
</script>