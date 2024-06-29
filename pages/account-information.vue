<template>
  <div class="flex flex-col items-center justify-center">
    <AccountFilled class="w-14 md:w-40 lg:w-32" />
    <div class="mt-3 flex flex-col gap-3">
      <div class="flex flex-col items-center">
        <h1 class="md:text-2xl">Name</h1>
        <div class="flex gap-1 text-xl font-semibold text-primary md:text-4xl">
          <p>John</p>
          <p>Doe</p>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <h1 class="md:text-2xl">Email</h1>
        <p class="text-xl font-semibold text-primary md:text-4xl">
          fins@fins.com
        </p>
      </div>
      <div class="flex flex-col items-center">
        <h1 class="md:text-2xl">Phone</h1>
        <p class="text-xl font-semibold text-primary md:text-4xl">
          601.548.4589
        </p>
      </div>
    </div>

    <div class="mt-3 flex flex-col gap-6 p-3">
      <button
        class="h-10 w-64 rounded-xl bg-primary text-white transition-all duration-500 ease-in-out hover:rounded-3xl hover:bg-opacity-50 md:w-80 md:font-bold"
      >
        Update Account
      </button>
      <button
        class="h-10 w-64 rounded-xl bg-red-600 text-white transition-all duration-500 ease-in-out hover:rounded-3xl hover:bg-opacity-50 md:w-80 md:font-bold"
      >
        Delete Account
      </button>
    </div>
    <div class="mt-10 hidden md:block lg:mt-5">
      <Logo />
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: 'alternate',
    props: {
      headingText: 'Sign Up for Our Service',
    },
  })
</script>
