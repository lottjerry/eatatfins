<template>
  <div class="flex">
    <div
      :class="[
        'fixed inset-y-0 left-0 w-full bg-white text-black transition-all duration-500 ease-in-out',
        { '-translate-x-full': !isMenuNavOpen },
      ]"
    >
      <div class="flex justify-between border-b-2 p-4">
        <h1 class="text-4xl">Menu</h1>
        <CloseCircle
          class="w-8 cursor-pointer fill-current pt-1 text-black transition-all duration-500 ease-in-out hover:text-opacity-50"
          @click="toggleMenuNav"
        />
      </div>
      <nav>

      </nav>
    </div>
  </div>
</template>
<script setup>
  import { storeToRefs } from 'pinia'
  import { useAppStore } from '~/stores/appStore'

  const appStore = useAppStore()
  const { isMenuNavOpen } = storeToRefs(appStore)
  const { toggleMenuNav } = appStore
</script>
