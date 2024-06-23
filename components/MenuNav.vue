<template>
  <div class="flex">
    <div
      :class="[
        'fixed inset-y-0 left-0 w-full md:w-[400px] bg-white text-black transition-all duration-500 ease-in-out md:border md:rounded-xl',
        { '-translate-x-full': !isMenuNavOpen },
      ]"
    >
      <div class="flex justify-between p-4 shadow-md shadow-primary/50 rounded-xl m-2">
        <h1 class="text-4xl">Menu</h1>
        <LeftCircle
          class="w-8 cursor-pointer fill-current pt-1 text-black transition-all duration-500 ease-in-out hover:text-primary/50 hover:-translate-x-2"
          @click="toggleMenuNav"
        />
      </div>
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
          <component :is="menuItem.resolvedComponent"   :class="{
            'btn-icon':
              menuItem.isSpecial === false ||
              (menuItem.isSpecial && menuItem.specialDay === currentDay),
            'btn-icon-disabled':
              menuItem.isSpecial && menuItem.specialDay !== currentDay,
          }"/>
        </MenuButton>
      </nav>
    </div>
  </div>
</template>

<script setup>
  import { storeToRefs } from 'pinia'
  import { onMounted, resolveComponent } from 'vue'
  import { useAppStore } from '~/stores/appStore'

  const appStore = useAppStore()
  const { isMenuNavOpen, menuItems, currentDay } = storeToRefs(appStore)
  const { setCurrentDay, toggleMenuNav, resolveMenuComponents } = appStore

  onMounted(() => {
    setCurrentDay()
    menuItems.value.forEach(async (item) => {
      item.resolvedComponent = resolveComponent('Facebook') // Works
      console.log(item.resolvedComponent)
    })
  })
</script>
