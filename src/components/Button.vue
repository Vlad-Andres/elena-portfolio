<template>
    <button :class="`${width} ${height}`" 
    class="outline outline-1 hover:outline-2 hover:outline-[--red] hover:border-[--red] hover:border-solid hover:border-1 ">
        <p class="p-large">
            {{ text }}
        </p>
    </button>
</template>

<script setup>
const props = defineProps({
    text: {
        type: String,
        required: true
    },
    link: {
        type: String,
        default: '#'
    },
    width: {
        type: String,
        default: 'w-full'
    },
    height: {
        type: String,
        default: 'h-full'
    },
})

</script>

<style scoped>
@media screen and (max-width: 1024px) {
    .p-large {
        font-size: 1rem !important;
        line-height: 1.5rem !important;
    }
    
}
</style>
