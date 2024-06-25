import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('appStore', () => {
  const isMenuNavOpen = ref(false)
  const isSignInOpen = ref(false)
  const currentDay = ref('')
  const showPassword = ref(false)

  const menuItems = ref([
    {
      component: 'Pasta',
      text: 'Starters',
      isSpecial: false,
      resolvedComponent: '',
    },
    {
      component: 'Facebook',
      text: 'Salads',
      isSpecial: false,
      resolvedComponent: '',
    },
    {
      component: 'Pasta',
      text: 'Soup/Gumbo',
      isSpecial: false,
      resolvedComponent: '',
    },
    {
      component: 'Pasta',
      text: 'Burgers',
      isSpecial: false,
      resolvedComponent: '',
    },
    {
      component: 'Pasta',
      text: 'Special Entrees',
      isSpecial: false,
      resolvedComponent: '',
    },
    {
      component: 'Pasta',
      text: 'Entrees',
      isSpecial: false,
      resolvedComponent: '',
    },
    {
      component: 'Pasta',
      text: 'Po-Boys',
      isSpecial: false,
      resolvedComponent: '',
    },
    {
      component: 'Pasta',
      text: 'Pasta',
      isSpecial: false,
      resolvedComponent: '',
    },
    {
      component: 'Pasta',
      text: 'Kids Plates',
      isSpecial: false,
      resolvedComponent: '',
    },
    {
      component: 'Pasta',
      text: 'Sides',
      isSpecial: false,
      resolvedComponent: '',
    },
    {
      component: 'Pasta',
      text: 'Drinks',
      isSpecial: false,
      resolvedComponent: '',
    },
    {
      component: 'Pasta',
      text: 'Specials',
      isSpecial: false,
      resolvedComponent: '',
    },
    {
      component: 'Pasta',
      text: 'Thursday Only',
      isSpecial: true,
      specialDay: 'Thursday',
      resolvedComponent: '',
    },
    {
      component: 'Pasta',
      text: 'Friday Only',
      isSpecial: true,
      specialDay: 'Friday',
      resolvedComponent: '',
    },
    {
      component: 'Pasta',
      text: 'All Items',
      isSpecial: false,
      resolvedComponent: '',
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
    showPassword
  }
})
