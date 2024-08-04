<template>
  <div class="flex">
    <div
      :class="[
        'fixed inset-y-0 left-0 w-full bg-white text-black transition-all duration-500 ease-in-out md:w-[400px] md:rounded-xl md:border',
        { '-translate-x-full': !isMenuNavOpen },
      ]"
    >
      <!-- *********************** MenuNav Top Nav *********************** -->
      <div
        class="m-2 flex justify-between rounded-xl p-4 shadow-md shadow-primary/50"
      >
        <h1 class="text-4xl">Menu</h1>
        <IconsArrow
          class="w-8 cursor-pointer fill-current pt-1 text-black transition-all duration-500 ease-in-out hover:-translate-x-2 hover:text-primary/50"
          @click="toggleMenuNav"
        />
      </div>
      <!-- *********************** MenuNav Botton Nav Buttons *********************** -->
      <nav class="grid grid-cols-2 gap-5 p-5">
        <MenuButton
          v-for="(menuItem, index) in menuItems"
          :key="index"
          :text="menuItem.text"
          :class="{
            'menu-btn group':
              menuItem.isSpecial === false ||
              (menuItem.isSpecial && menuItem.specialDay === currentDay),
            'menu-btn-disabled':
              menuItem.isSpecial && menuItem.specialDay !== currentDay,
          }"
        >
        </MenuButton>
      </nav>
    </div>
  </div>
</template>

<script setup>
  import { storeToRefs } from 'pinia'
  import { onMounted } from 'vue'
  import { useAppStore } from '~/stores/appStore'

  const appStore = useAppStore()
  const { isMenuNavOpen, menuItems, currentDay } = storeToRefs(appStore)
  const { setCurrentDay, toggleMenuNav } = appStore

  onMounted(() => {
    setCurrentDay()
  })
</script>
