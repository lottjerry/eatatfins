<template>
  <div>
    <div class="rounded-lg bg-white">
      <div class="relative flex bg-inherit">
        <Field
          :name="name"
          :id="name"
          :type="type"
          :class="{
            'peer h-10 w-72 md:w-96 rounded-lg bg-transparent px-2 text-black placeholder-transparent ring-1 ring-black/20 focus:outline-none focus:ring-2 focus:ring-primary/50':
              !error,
            'peer h-10 w-72 md:w-96 rounded-lg bg-transparent px-2 text-black placeholder-transparent ring-1 ring-red-500/40 focus:outline-none focus:ring-2 focus:ring-red-500/50':
              error,
          }"
          :placeholder="label"
        /><label
          :for="name"
          :class="{
            'absolute -top-3 left-0 mx-1 cursor-text bg-inherit px-1 text-sm text-black transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary':
              !error,
            'absolute -top-3 left-0 mx-1 cursor-text bg-inherit px-1 text-sm text-red-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-red-500 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-red-500':
              error,
          }"
          >{{ label }}</label
        >
      </div>
    </div>
    <div v-if="error" class="mt-2 text-sm text-red-500">
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
    type: {
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
