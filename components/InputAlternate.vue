<template>
  <div class="rounded-lg bg-white">
    <div class="relative flex bg-inherit">
      <input
        :type="type"
        :id="id"
        class="peer h-10 w-72 md:w-96 rounded-lg bg-transparent px-2 text-black placeholder-transparent ring-1 ring-black/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
        :placeholder="label"
      /><label
        :for="id"
        class="absolute -top-3 left-0 mx-1 cursor-text bg-inherit px-1 text-sm text-black transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary"
        >{{ label }}</label
      >
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    label: String,
    id: String,
    type: String,
  })
</script>
