<template>
  <Button>
    <div>
      <slot />
    </div>
    <p class="w-28">{{ text }}</p>
  </Button>
</template>

<script setup>
  const props = defineProps({
    text: String,
  })
</script>
