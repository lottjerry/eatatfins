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
  <form @submit="submit">
    <input-field
      :define-input-binds="defineInputBinds"
      :error-bag="errorBag"
      name="email"
      label="Email"
    />
    <input-field
      :define-input-binds="defineInputBinds"
      :error-bag="errorBag"
      name="password"
      label="Password"
      input-type="password"
    />
    <input-field
      :define-input-binds="defineInputBinds"
      :error-bag="errorBag"
      name="passwordConfirm"
      label="Confirm Password"
      input-type="password"
    />
    <input-field
      :define-input-binds="defineInputBinds"
      :error-bag="errorBag"
      name="firstName"
      label="First Name"
    />
    <input-field
      :define-input-binds="defineInputBinds"
      :error-bag="errorBag"
      name="lastName"
      label="Last Name"
    />
    <input-field
      :define-input-binds="defineInputBinds"
      :error-bag="errorBag"
      name="phone"
      label="Phone"
    />
    <button type="submit">Submit</button>
  </form>
</template>

<style scoped>
  .flex {
    display: flex;
    flex-direction: column;
    max-width: 20rem;
  }
</style>
