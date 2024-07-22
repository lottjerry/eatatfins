<template>
  <form class="flex flex-col items-center justify-center" @submit="submit">
    <div class="flex flex-col items-center gap-3">
      <h1
        class="p-3 text-lg font-medium underline decoration-2 underline-offset-4 md:text-2xl"
      >
        Account Information
      </h1>
      <div class="flex flex-col items-center gap-5">
        <InputField
          :define-input-binds="defineInputBinds"
          :error-bag="errorBag"
          name="email"
          label="Email"
          input-type="email"
        />
        <InputField
          :define-input-binds="defineInputBinds"
          :error-bag="errorBag"
          name="password"
          label="Password"
          input-type="password"
        />
        <InputField
          :define-input-binds="defineInputBinds"
          :error-bag="errorBag"
          name="passwordConfirm"
          label="Confirm Password"
          input-type="password"
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
        <InputField
          :define-input-binds="defineInputBinds"
          :error-bag="errorBag"
          name="firstName"
          label="First Name"
        />
        <InputField
          :define-input-binds="defineInputBinds"
          :error-bag="errorBag"
          name="lastName"
          label="Last Name"
        />
        <InputField
          :define-input-binds="defineInputBinds"
          :error-bag="errorBag"
          name="phone"
          label="Phone"
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
      type="submit"
    >
      Create Account
    </button>

    <div class="my-10 mb-20 flex gap-1 text-sm md:text-lg">
      <p>Already have an account?</p>
      <p class="custom-link text-primary" @click="toggleSignIn">Sign In</p>
    </div>
  </form>
</template>

<script setup>
  import { string, object, ref } from 'yup'
  import { useAppStore } from '~/stores/appStore'

  const schema = object({
    email: string()
      .email('Please enter a valid email')
      .required('Please enter an email'),
    password: string()
      .required('Please enter a password')
      .min(6, 'Password must be a minimum of 6 characters.'),
    passwordConfirm: string()
      .required('Please enter a password')
      .min(6, 'Password must be a minimum of 6 characters.')
      .oneOf([ref('password')], 'Password must match'),
    firstName: string().required('Please enter your first name.'),
    lastName: string().required('Please enter your last name.'),
    phone: string().required('Please enter your phone number.'),
  })

  const { defineInputBinds, values, errorBag, handleSubmit } = useForm({
    validationSchema: schema,
  })

  const submit = handleSubmit(() => {
    alert(JSON.stringify(values))
  })

  definePageMeta({
    layout: 'alternate',
  })

  const appStore = useAppStore()
  const { toggleSignIn } = appStore
</script>
