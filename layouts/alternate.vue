<template>
  <div class="h-screen bg-primary md:flex md:flex-col md:items-center">
    <nuxt-link class="p-3 md:self-start" to="/"
      ><BackButton title="Home"
    /></nuxt-link>
    <h1 class="p-8 text-center text-3xl text-white md:text-5xl">
      {{ headingText }}
    </h1>
    <div class="h-full rounded-t-3xl bg-white px-5 py-3 md:w-3/4 lg:w-1/3">
      <slot />
    </div>
    <SignIn />
  </div>
</template>

<script setup>
  defineProps({
    headingText: {
      type: String,
      default: 'Create a free account now',
    },
  })
</script>
