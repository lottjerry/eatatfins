<template>
  <nav
    class="sticky top-0 flex items-center justify-around bg-white py-2 transition-all duration-300 ease-in md:justify-center md:gap-[12rem] xl:gap-[20rem]"
  >
    <!-- *********************** LEFT NAV *********************** -->
    <div class="flex items-center gap-5 md:gap-10 xl:gap-16">
      <button>
        <IconsLogo
          class="h-14 w-16 transition-all duration-300 ease-in md:h-20 md:w-24"
        />
      </button>
      <button
        @click="toggleMenuNav"
        class="inline-flex h-9 w-24 items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-bold text-white transition-all duration-500 ease-in-out hover:rounded-3xl hover:bg-opacity-50 md:h-11 md:w-32 md:text-lg"
      >
        <IconsSilverware class="mr-2 w-5 fill-current md:w-6" />
        <span>Menu</span>
      </button>
    </div>
    <!-- *********************** RIGHT NAV *********************** -->
    <div class="flex gap-8 md:gap-14 xl:gap-16">
      <a
        href="https://www.google.com/maps/dir//1305+W+6th+St,+Laurel,+MS+39440/@31.6957887,-89.2253126,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x888334383b809fc1:0x542ccbcea7a71af6!2m2!1d-89.1428517!2d31.6958112?entry=ttu"
        target="_blank"
        rel="noopener noreferrer"
        ><button class="right-nav-btn group hidden md:flex">
          <IconsMapMarker
            class="w-5 fill-current pt-1 text-primary transition-all duration-500 ease-in-out group-hover:text-opacity-50 md:w-6"
          />
          <span>Locate Fins</span>
        </button></a
      >

      <button @click="toggleSignIn" class="right-nav-btn group">
        <IconsAccountCircle
          class="w-5 fill-current pt-1 text-primary transition-all duration-500 ease-in-out group-hover:text-opacity-50 md:w-6"
        />
        <span>Sign In</span>
      </button>
      <button class="right-nav-btn group">
        <span>0</span>
        <IconsShopping
          class="w-5 fill-current text-primary transition-all duration-500 ease-in-out group-hover:text-opacity-50 md:w-6"
        />
      </button>
    </div>
  </nav>
</template>

<script setup>
  import { useAppStore } from '~/stores/appStore'

  const appStore = useAppStore()
  const { toggleMenuNav, toggleSignIn } = appStore
</script>
