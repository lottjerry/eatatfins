<template>
  <Form
    class="flex flex-col items-center justify-center"
    @submit="onSubmit"
    :validation-schema="schema"
    v-slot="{ errors }"
  >
    <div class="flex flex-col items-center gap-3">
      <h1
        class="p-3 text-lg font-medium underline decoration-2 underline-offset-4 md:text-2xl"
      >
        Account Information
      </h1>
      <div class="flex flex-col items-center gap-5">
        <InputField
          name="email"
          label="Email"
          type="string"
          :error="errors.email || ''"
        />
        <InputField
          name="password"
          label="Password"
          type="password"
          :error="errors.password || ''"
        />
        <InputField
          name="passwordConfirm"
          label="Confirm Password"
          type="password"
          :error="errors.passwordConfirm || ''"
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
          name="firstName"
          label="First Name"
          type="string"
          :error="errors.firstName || ''"
        />
        <InputField
          name="lastName"
          label="Last Name"
          type="string"
          :error="errors.lastName || ''"
        />
        <InputField
          name="phone"
          label="Phone"
          type="string"
          :error="errors.phone || ''"
        />
      </div>
    </div>
    <div class="m-5 flex flex-col">
      <AcceptField
        name="termsAndConditions"
        label="Terms & Conditions."
        :error="errors.termsAndConditions || ''"
      />
      <AcceptField
        name="termsOfUse"
        label="Terms of Use."
        :error="errors.termsOfUse || ''"
      />
      <AcceptField
        name="privacyPolicy"
        label="Privacy Policy."
        :error="errors.privacyPolicy || ''"
      />
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
  </Form>
</template>

<script setup>
  import { string, object, ref } from 'yup'
  import { useAppStore } from '~/stores/appStore'

  const schema = object({
    email: string()
      .email('Please enter a valid email.')
      .required('Please enter an email.'),
    password: string()
      .required('Please enter a password.')
      .min(6, 'Password must be a minimum of 6 characters.'),
    passwordConfirm: string()
      .required('Please enter a password.')
      .min(6, 'Password must be a minimum of 6 characters.')
      .oneOf([ref('password')], 'Password must match.'),
    firstName: string().required('Please enter your first name.'),
    lastName: string().required('Please enter your last name.'),
    phone: string().required('Please enter your phone number.'),
    termsAndConditions: string().required(
      'Please accept the Terms & Conditions.',
    ),
    termsOfUse: string().required('Please accept the Terms of Use.'),
    privacyPolicy: string().required('Please accept the Terms & Conditions.'),
  })

  const onSubmit = (values) => {
    // display form values on success
    alert('SUCCESS!!\n\n' + JSON.stringify(values, null, 4))
  }

  definePageMeta({
    layout: 'alternate',
  })

  const appStore = useAppStore()
  const { toggleSignIn } = appStore
</script>
