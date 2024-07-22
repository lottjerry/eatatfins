<script setup>
  import { string, object, ref } from 'yup'

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
</script>

<template>
  <form class="flex flex-col items-center gap-5"  @submit="submit">
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
    <button class="h-10 w-64 rounded-xl bg-primary text-white transition-all duration-500 ease-in-out hover:rounded-3xl hover:bg-opacity-50 md:w-80 md:text-xl" type="submit">Create Account</button>
  </form>
</template>

