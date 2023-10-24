<template>
    <div class="flex flex-row border-[2px] border-neutral-grey-dark">
        <div class="w-2/12 border-r-[2px] border-neutral-grey-dark flex items-center justify-center">
            <h1 class="align-middle">0{{ number }}</h1>
        </div>
        <div class="w-8/12 flex flex-auto items-center justify-center">
            <h2 class="center align-middle p-2">{{ name }}</h2>
        </div>
        <div class="w-2/12 flex-auto">
            <div class="flex flex-col justify-around h-full">
                    <div v-for="tag in hashtags" :key="tag" class="">
                        <span class="flex">
                            <p class="p-medium text-primary-red">#</p>
                            <p class="p-medium">{{ tag }}</p>
                        </span>
                    </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        default: '1'
    },
    hashtags: {
        type: Array,
        default: []
    },
})

</script>