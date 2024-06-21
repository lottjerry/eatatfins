export const useAppStore = defineStore('appStore', () => {
  const isMenuNavOpen = ref(false)

  const currentDay = ref('')

  const menuItems = ref([
    {
      componentName: 'Pasta',
      text: 'Starters',
      isSpecial: false,
    },
    {
      componentName: 'AccountCircle',
      text: 'Salads',
      isSpecial: false,
    },
    {
      componentName: 'Pasta',
      text: 'Soup/Gumbo',
      isSpecial: false,
    },
    {
      componentName: 'Pasta',
      text: 'Burgers',
      isSpecial: false,
    },
    {
      componentName: 'Pasta',
      text: 'Special Entrees',
      isSpecial: false,
    },
    {
      componentName: 'Pasta',
      text: 'Entrees',
      isSpecial: false,
    },
    {
      componentName: 'Pasta',
      text: 'Po-Boys',
      isSpecial: false,
    },
    {
      componentName: 'Pasta',
      text: 'Pasta',
      isSpecial: false,
    },
    {
      componentName: 'Pasta',
      text: 'Kids Plates',
      isSpecial: false,
    },
    {
      componentName: 'Pasta',
      text: 'Sides',
      isSpecial: false,
    },
    {
      componentName: 'Pasta',
      text: 'Drinks',
      isSpecial: false,
    },
    {
      componentName: 'Pasta',
      text: 'Specials',
      isSpecial: false,
    },
    {
      componentName: 'Pasta',
      text: 'Thursday Only',
      isSpecial: true,
      specialDay: 'Thursday',
    },
    {
      componentName: 'Pasta',
      text: 'Friday Only',
      isSpecial: true,
      specialDay: 'Friday',
    },
    {
      componentName: 'Pasta',
      text: 'All Items',
      isSpecial: false,
    },
  ])

  const toggleMenuNav = () => {
    isMenuNavOpen.value = !isMenuNavOpen.value
  }

  const setCurrentDay = () => {
    currentDay.value = new Date().toLocaleString('en-us', { weekday: 'long' })
  }

  return { isMenuNavOpen, toggleMenuNav, menuItems,  currentDay, setCurrentDay}
})
