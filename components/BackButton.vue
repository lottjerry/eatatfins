<template>
  <div class="flex items-center group cursor-pointer py-2 px-3 gap-1">
    <Arrow class="w-7 md:w-8 cursor-pointer group-hover:-translate-x-2 transition-all duration-500 ease-in-out text-white fill-current" />
    <div class="text-xl text-white md:text-2xl">{{ title }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String, 
})
</script>
