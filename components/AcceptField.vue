<template>
  <div>
    <Field
      type="checkbox"
      :name="name"
      :id="name"
      value="true"
      class="mr-3 cursor-pointer accent-blue-500"
    />
    <label :for="name" class="md:text-xl" :class="{'text-red-500' : error}" 
      >I accept
      <span class="custom-link pl text-primary" :class="{'custom-link-error text-red-500' : error}">{{ label }}</span></label
    >
    <div v-if="error" class="mt-1 text-sm text-red-500 relative left-6">
      {{ error }}
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    error: {
      type: String,
      required: true,
    },
  })
</script>
