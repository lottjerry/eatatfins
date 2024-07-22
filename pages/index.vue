<template>
  <div class="border border-black p-5">
    <h1 class="text-blue-500">Hero</h1>
    <p class="text-purple-700">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quibusdam, sequi rem dolorum tempora dolorem blanditiis odit enim molestiae? Ab libero cumque consequatur nisi magnam animi placeat deserunt velit unde nesciunt voluptas a sed error, totam nemo, sit eveniet neque vero tempora voluptate nam ipsam possimus blanditiis quisquam? Amet similique ea dolore sunt dolorem est id, consequuntur veniam dolor sequi et eaque. Nostrum quia quasi molestias iusto corporis deserunt, et, vel commodi eius asperiores aliquam non iure minima dignissimos enim sequi odio incidunt officiis atque ab. Dolore dicta in impedit voluptate id ducimus voluptatem adipisci commodi, eaque tempora autem esse.
    </p>
    <div class="m-10 flex flex-col gap-5">
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
        label="First Name"
        type="text"
        id="fullname"
        :validator="string().required('First name is required.')"
      />
      <FormField
        label="Password"
        type="password"
        id="password"
        :validator="string().required('Password is required.').min(5, 'Password must be a minimum of 5 characters.').max(15, 'Password must be a maximum of 15 characters.')"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { string } from 'yup'
</script>
