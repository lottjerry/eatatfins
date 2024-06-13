<template>
  <nav
    class="flex items-center justify-around py-2 md:justify-center md:gap-[12rem] xl:gap-[20rem] transition-all duration-300 ease-in"
  >
    <!-- *********************** LEFT NAV *********************** -->
    <div class="flex items-center gap-5 md:gap-10 xl:gap-16">
      <button>
        <Logo class="w-16 h-14 md:w-24 md:h-20 transition-all duration-300 ease-in"/>
      </button>
      <button
        class="inline-flex h-9 w-24 md:h-11 md:w-32 items-center justify-center rounded-xl hover:rounded-3xl bg-[#06398C] px-4 py-2 font-bold text-white hover:bg-opacity-70 text-sm md:text-lg transition-all duration-300 ease-in-out"
      >
        <Silverware class="mr-2 w-5 md:w-6 fill-current" />
        <span>Menu</span>
      </button>
    </div>
    <!-- *********************** RIGHT NAV *********************** -->
    <div class="flex  gap-8 md:gap-14 xl:gap-16">
      <button class="hidden md:flex flex-col items-center text-sm md:text-lg transition-all duration-300 ease-in">
        <MapMarker class="w-5 md:w-6 pt-1" />
        <span>Locate Fins</span>
      </button>
      <button class="flex flex-col items-center text-sm md:text-lg transition-all duration-300 ease-in">
        <AccountCircle class="w-5 md:w-6 pt-1" />
        <span>Sign In</span>
      </button>
      <button class="flex flex-col items-center text-sm md:text-lg transition-all duration-300 ease-in">
        <span>0</span>
        <Shopping class="w-5 md:w-6" />
      </button>
    </div>
  </nav>
</template>

