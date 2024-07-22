<template>
  <div class="flex flex-col items-center justify-center">
    <div class="flex flex-col items-center gap-3">
      <h1
        class="p-3 text-lg font-medium underline decoration-2 underline-offset-4 md:text-2xl"
      >
        Account Information
      </h1>
      <div class="flex flex-col items-center gap-5">
        <FormField
          label="Email"
          type="email"
          id="email"
          :validator="
            string().required('Email is required.').email('Invalid email.')
          "
          :validate-on-change="false"
        />
        <FormField
          label="Password"
          type="password"
          id="password"
          :validator="
            string()
              .required('Password is required.')
              .min(5, 'Password must be a minimum of 5 characters.')
              .max(15, 'Password must be a maximum of 15 characters.')
          "
        />
        <FormField
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          :validator="
            string()
              .required('Password is required.')
              .min(5, 'Password must be a minimum of 5 characters.')
              .max(15, 'Password must be a maximum of 15 characters.')
          "
        />
      </div>
    </div>
    <div class="flex flex-col items-center gap-3">
      <h1
        class="p-3 text-lg font-medium underline decoration-2 underline-offset-4 md:text-2xl"
      >
        Your Information
      </h1>
      <div class="flex flex-col items-center gap-5">
        <FormField
          label="First Name"
          type="text"
          id="fullname"
          :validator="string().required('First name is required.')"
        />
        <FormField
          label="First Name"
          type="text"
          id="fullname"
          :validator="string().required('First name is required.')"
        />
        <FormField
          label="First Name"
          type="text"
          id="fullname"
          :validator="string().required('First name is required.')"
        />
      </div>
    </div>
    <div class="m-5 flex flex-col">
      <label class="md:text-xl"
        ><input type="checkbox" class="m-3 cursor-pointer accent-blue-500" />I
        accept
        <span class="custom-link pl text-primary">Fins Terms & Conditions</span>
      </label>
      <label class="md:text-xl"
        ><input type="checkbox" class="m-3 cursor-pointer accent-blue-500" />I
        accept <span class="custom-link pl text-primary">Terms of Use</span>
      </label>
      <label class="md:text-xl"
        ><input type="checkbox" class="m-3 cursor-pointer accent-blue-500" />I
        accept <span class="custom-link pl text-primary">Privacy Policy</span>
      </label>
    </div>

    <button
      class="h-10 w-64 rounded-xl bg-primary text-white transition-all duration-500 ease-in-out hover:rounded-3xl hover:bg-opacity-50 md:w-80 md:text-xl"
    >
      Create Account
    </button>

    <div class="my-10 flex gap-1 text-sm md:text-lg mb-20">
      <p>Already have an account?</p>
      <p class="custom-link text-primary" @click="toggleSignIn">Sign In</p>
    </div>
  </div>
</template>

<script setup>
  import { string } from 'yup'

  definePageMeta({
    layout: 'alternate',
  })

  import { useAppStore } from '~/stores/appStore'

  const appStore = useAppStore()
  const { toggleSignIn } = appStore
</script>
