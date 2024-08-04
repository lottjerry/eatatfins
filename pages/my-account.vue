<template>
  <h1 class="m-8 text-center text-3xl text-white md:text-5xl">My Account</h1>
  <div
    class="h-fit rounded-t-3xl bg-white md:h-screen md:w-3/4 lg:h-fit xl:w-1/2"
  >
    <Form
      @submit="onSubmit"
      :validation-schema="schema"
      v-slot="{ errors }"
      class="flex h-screen flex-col items-center gap-10"
    >
      <h1
        class="p-3 text-lg font-medium underline decoration-2 underline-offset-4 md:text-2xl"
      >
        My Information
      </h1>
      <InputField
        name="firstName"
        label="First Name"
        type="string"
        :error="errors.firstName || ''"
        :value="defaultValues.firstName"
      />
      <InputField
        name="lastName"
        label="Last Name"
        type="string"
        :error="errors.lastName || ''"
        :value="defaultValues.lastName"
      />
      <InputField
        name="email"
        label="Email"
        type="string"
        :error="errors.email || ''"
        :value="defaultValues.email"
      />
      <InputField
        name="phone"
        label="Phone"
        type="string"
        :error="errors.phone || ''"
        :value="defaultValues.phone"
      />

      <button
        class="h-10 w-64 rounded-xl bg-primary text-white transition-all duration-500 ease-in-out hover:rounded-3xl hover:bg-opacity-50 disabled:cursor-not-allowed disabled:bg-opacity-50 disabled:hover:rounded-xl md:w-80 md:font-bold"
        type="submit"
        :disabled="hasErrors(errors)"
      >
        Save
      </button>

      <button
        class="h-10 w-64 rounded-xl bg-red-600 text-white transition-all duration-500 ease-in-out hover:rounded-3xl hover:bg-opacity-50 md:w-80 md:font-bold"
      >
        Delete Account
      </button>

      <div class="mt-10 hidden md:block lg:mt-5">
        <IconsLogo />
      </div>
    </Form>
  </div>
</template>

<script setup>
  import { string, object } from 'yup'

  const phoneRegExp =
    /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/

  const schema = object({
    email: string()
      .email('Please enter a valid email.')
      .required('Please enter an email.'),
    firstName: string().required('Please enter your first name.'),
    lastName: string().required('Please enter your last name.'),
    phone: string()
      .required('Please enter your phone number.')
      .matches(phoneRegExp, 'Phone number is not valid.')
      .max(10, 'Phone number is not valid.')
      .min(10, 'Phone number is not valid.'),
  })

  const defaultValues = {
    firstName: 'Tyger',
    lastName: 'Jacobs',
    email: 'tyger.jacobs@fins.com',
    phone: '6013425141',
  }

  const onSubmit = (values) => {
    // display form values on success
    alert('SUCCESS!!\n\n' + JSON.stringify(values, null, 4))
  }

  definePageMeta({
    layout: 'alternate',
  })

  const hasErrors = (errors) => {
    return Object.keys(errors).length > 0
  }
</script>
