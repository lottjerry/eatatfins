<template>
  <nav
    class="flex items-center justify-around py-2 transition-all duration-300 ease-in md:justify-center md:gap-[12rem] xl:gap-[20rem]"
  >
    <!-- *********************** LEFT NAV *********************** -->
    <div class="flex items-center gap-5 md:gap-10 xl:gap-16">
      <button>
        <Logo
          class="h-14 w-16 transition-all duration-300 ease-in md:h-20 md:w-24"
        />
      </button>
      <button
        class="bg-primary inline-flex h-9 w-24 items-center justify-center rounded-xl px-4 py-2 text-sm font-bold text-white transition-all duration-500 ease-in-out hover:rounded-3xl hover:bg-opacity-50 md:h-11 md:w-32 md:text-lg"
      >
        <Silverware class="mr-2 w-5 fill-current md:w-6" />
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
          <MapMarker
            class="text-primary w-5 fill-current pt-1 transition-all duration-500 ease-in-out group-hover:text-opacity-50 md:w-6"
          />
          <span>Locate Fins</span>
        </button></a
      >

      <button class="right-nav-btn group">
        <AccountCircle
          class="text-primary w-5 fill-current pt-1 transition-all duration-500 ease-in-out group-hover:text-opacity-50 md:w-6"
        />
        <span>Sign In</span>
      </button>
      <button class="right-nav-btn group">
        <span>0</span>
        <Shopping
          class="text-primary w-5 fill-current transition-all duration-500 ease-in-out group-hover:text-opacity-50 md:w-6"
        />
      </button>
    </div>
  </nav>
</template>
