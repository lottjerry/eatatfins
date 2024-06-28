<template>
  <div class="flex">
    <div
      :class="[
        'fixed inset-y-0 right-0 w-full bg-white text-black transition-all duration-500 ease-in-out md:w-[400px] md:rounded-xl md:border',
        { 'translate-x-full': !isSignInOpen },
      ]"
    >
      <!-- *********************** SignIn Top Nav *********************** -->
      <div
        class="m-2 flex justify-between rounded-xl p-4 shadow-md shadow-primary/50"
      >
        <h1 class="text-4xl">Sign In</h1>
        <Arrow
          class="mr-2 w-8 rotate-180 cursor-pointer fill-current pt-1 text-black transition-all duration-500 ease-in-out hover:translate-x-2 hover:text-primary/50"
          @click="toggleSignIn"
        />
      </div>
      <!-- *********************** Sign In Content *********************** -->
      <div class="flex flex-col items-center gap-5">
        <h2 class="mt-10 text-lg font-medium">Sign in for a faster checkout</h2>

        <div>
          <Input class="mb-4" id="email" label="Email" type="email" />
          <Input
            id="password"
            label="Password"
            :type="showPassword ? 'text' : 'password'"
            showEye
          />
        </div>

        <div class="flex gap-8 text-sm">
          <label class="flex items-center gap-1">
            <input type="checkbox" class="cursor-pointer accent-blue-500" />
            Remember Me
          </label>
          <p class="custom-link">Forgot Password?</p>
        </div>
        <div
          class="flex h-16 w-64 items-center justify-center border border-gray-300"
        >
          <h1>reCaptcha</h1>
        </div>
        <button
          class="h-10 w-44 rounded-xl bg-primary text-white transition-all duration-500 ease-in-out hover:rounded-3xl hover:bg-opacity-50"
        >
          Login
        </button>
        <div class="mt-5 flex gap-1 text-sm">
          <p>Don't have an account?</p>
          <nuxt-link to="/create-account">
            <p class="custom-link text-primary" @click="toggleSignIn">Create an account</p></nuxt-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { storeToRefs } from 'pinia'
  import { useAppStore } from '~/stores/appStore'

  const appStore = useAppStore()
  const { isSignInOpen } = storeToRefs(appStore)
  const { showPassword } = storeToRefs(appStore)
  const { toggleSignIn } = appStore
</script>
