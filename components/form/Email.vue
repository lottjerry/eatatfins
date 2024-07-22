<template>
  <div>
    <div class="rounded-lg bg-white">
      <div class="relative flex bg-inherit">
        <input
          type="email"
          id="email"
          v-model="value"
          @blur="handleBlur"
          :class="{
            'peer h-10 w-72 rounded-lg bg-transparent px-2 text-black placeholder-transparent ring-1 ring-black/20 focus:outline-none focus:ring-2 focus:ring-primary/50 md:w-96':
              !errorMessage,
            'peer h-10 w-72 rounded-lg bg-transparent px-2 text-black placeholder-transparent ring-1 ring-red-500/40 focus:outline-none focus:ring-2 focus:ring-red-500/50 md:w-96':
              errorMessage,
          }"
          placeholder="Email"
        /><label
          for="email"
          :class="{
            'absolute -top-3 left-0 mx-1 cursor-text bg-inherit px-1 text-sm text-black transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary':
              !errorMessage,
            'absolute -top-3 left-0 mx-1 cursor-text bg-inherit px-1 text-sm text-red-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-red-500 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-red-500':
              errorMessage,
          }"
          >Email</label
        >
      </div>
    </div>
    <div v-if="errorMessage" class="mt-2 text-sm text-red-500">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup>
  import { string } from 'yup'

  const validator = string()
    .required('Email is required.')
    .email('Invalid email.')

  const { value, errorMessage } = useField('email', validator)
</script>
