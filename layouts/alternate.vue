<template>
  <div class="h-full bg-primary md:flex md:flex-col md:items-center">
    <nuxt-link class="lg:relative xl:right-1/4 xl:top-5 md:self-start xl:self-center md:m-3" to="/"
      ><IconsBackButton title="Home"
    /></nuxt-link>

    <slot />

    <SignIn />
  </div>
</template>

<script setup></script>
