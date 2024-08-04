import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('appStore', () => {
  const isMenuNavOpen = ref(false)
  const isSignInOpen = ref(false)
  const currentDay = ref('')
  const showPassword = ref(false)

  const menuItems = ref([
    {
      text: 'Starters',
      isSpecial: false,
    },
    {
      component: 'Facebook',
      text: 'Salads',
      isSpecial: false,
    },
    {
      text: 'Soup/Gumbo',
      isSpecial: false,
    },
    {
      text: 'Burgers',
      isSpecial: false,
    },
    {
      text: 'Special Entrees',
      isSpecial: false,
    },
    {
      text: 'Entrees',
      isSpecial: false,
    },
    {
      text: 'Po-Boys',
      isSpecial: false,
    },
    {
      text: 'Pasta',
      isSpecial: false,
    },
    {
      text: 'Kids Plates',
      isSpecial: false,
    },
    {
      text: 'Sides',
      isSpecial: false,
    },
    {
      text: 'Drinks',
      isSpecial: false,
    },
    {
      text: 'Specials',
      isSpecial: false,
    },
    {
      text: 'Thursday Only',
      isSpecial: true,
      specialDay: 'Thursday',
    },
    {
      text: 'Friday Only',
      isSpecial: true,
      specialDay: 'Friday',
    },
    {
      text: 'All Items',
      isSpecial: false,
    },
  ])

  const toggleMenuNav = () => {
    isMenuNavOpen.value = !isMenuNavOpen.value
  }

  const toggleShowPassword = () => {
    showPassword.value = !showPassword.value
  }

  const toggleSignIn = () => {
    isSignInOpen.value = !isSignInOpen.value
  }

  const setCurrentDay = () => {
    currentDay.value = new Date().toLocaleString('en-us', { weekday: 'long' })
  }

  return {
    isMenuNavOpen,
    isSignInOpen,
    toggleSignIn,
    toggleMenuNav,
    toggleShowPassword,
    menuItems,
    currentDay,
    setCurrentDay,
    showPassword,
  }
})
