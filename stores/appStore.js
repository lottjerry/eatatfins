export const useAppStore = defineStore('app', () => {
  const isMenuNavOpen = ref(false)

  const toggleMenuNav = () => {
    isMenuNavOpen.value = !isMenuNavOpen.value
  }

  


  return { isMenuNavOpen, toggleMenuNav }
})
