<template>
  <div class="flex">
    <div
      :class="[
        'fixed inset-y-0 left-0 w-full bg-white text-black transition-all duration-500 ease-in-out',
        { '-translate-x-full': !isMenuNavOpen },
      ]"
    >
      <div class="flex justify-between p-4 shadow-md shadow-primary/50">
        <h1 class="text-4xl">Menu</h1>
        <CloseCircle
          class="w-8 cursor-pointer fill-current pt-1 text-black transition-all duration-500 ease-in-out hover:text-primary hover:text-opacity-50"
          @click="toggleMenuNav"
        />
      </div>
      <nav class="grid grid-cols-2 gap-5 p-5" >
        <MenuButton
        v-for="(menuItem, index) in menuItems" :key="index"
          :text="menuItem.text"
          :class="{
            'menu-btn group':
              menuItem.isSpecial === false ||
              (menuItem.isSpecial && menuItem.specialDay === currentDay),
            'menu-btn-disabled':
              menuItem.isSpecial && menuItem.specialDay !== currentDay,
          }"
        >
          <!-- <component :is="menuItem.componentName"></component> -->
          <Pasta  :class="{
            'w-7 fill-current text-primary/20 ':
              menuItem.isSpecial && menuItem.specialDay !== currentDay,
          }"/>
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
  const { isMenuNavOpen } = storeToRefs(appStore)
  const { menuItems } = storeToRefs(appStore)
  const { currentDay } = storeToRefs(appStore)
  const { setCurrentDay } = appStore
  const { toggleMenuNav } = appStore

  onMounted(() => {
    setCurrentDay()
  })
</script>
