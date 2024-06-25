<template>
  <div class="rounded-lg bg-white">
    <div class="relative flex bg-inherit">
      <input
        :type="type"
        :id="id"
        class="peer h-10 w-72 rounded-lg bg-transparent px-2 text-black placeholder-transparent ring-1 ring-black/20 focus:outline-none focus:ring-2 focus:ring-primary/50"
        :placeholder="label"
      /><label
        :for="id"
        class="absolute -top-3 left-0 mx-1 cursor-text bg-inherit px-1 text-sm text-black transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-black peer-focus:-top-3 peer-focus:text-sm peer-focus:text-primary"
        >{{ label }}</label
      >
      <div
        v-if="showEye"
        class="absolute bottom-2.5 right-3 w-5 cursor-pointer fill-current text-primary transition-all duration-500 ease-in-out hover:text-opacity-50"
      >
        <EyeClosed v-if="!showPassword" @click=toggleShowPassword />
        <Eye v-else @click=toggleShowPassword />
      </div>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    label: String,
    id: String,
    type: String,
    showEye: Boolean,
  })

  import { storeToRefs } from 'pinia'
  import { useAppStore } from '~/stores/appStore'

  const appStore = useAppStore()
  const { showPassword } = storeToRefs(appStore)
  const { toggleShowPassword} = appStore

</script>
