<template>
  <Button>
    <div
      class="btn-icon"
    >
      <slot />
    </div>
    <p>{{ text }}</p>
  </Button>
</template>

<script setup>
  const props = defineProps({
    text: String,
  })
</script>
