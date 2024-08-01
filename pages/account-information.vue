<template>
  <h1 class="p-8 text-center text-3xl text-white md:text-5xl">
    Account Information
  </h1>
  <div
    class="h-fit rounded-t-3xl bg-white p-5 md:h-screen md:w-3/4 lg:h-fit xl:w-1/2"
  >
    <div class="flex flex-col items-center justify-center">
      <IconsAccountFilled class="w-14 md:w-40 lg:w-32" />
      <div class="mt-3 flex flex-col gap-3">
        <div class="flex flex-col items-center">
          <h1 class="md:text-2xl">Name</h1>
          <div
            class="flex gap-1 text-xl font-semibold text-primary md:text-4xl"
          >
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

      <button
        class="h-10 w-64 rounded-xl bg-red-600 text-white transition-all duration-500 ease-in-out hover:rounded-3xl hover:bg-opacity-50 md:w-80 md:font-bold m-20"
      >
        Delete Account
      </button>

      <div class="mt-10 hidden md:block lg:mt-5">
        <IconsLogo />
      </div>
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
