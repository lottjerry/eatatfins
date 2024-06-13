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
        class="inline-flex h-9 w-24 md:h-11 md:w-32 items-center justify-center rounded-xl hover:rounded-3xl bg-[#06398C] px-4 py-2 font-bold text-white hover:bg-opacity-50 text-sm md:text-lg transition-all duration-500 ease-in-out"
      >
        <Silverware class="mr-2 w-5 md:w-6 fill-current" />
        <span>Menu</span>
      </button>
    </div>
    <!-- *********************** RIGHT NAV *********************** -->
    <div class="flex  gap-8 md:gap-14 xl:gap-16">
      <button class=" text-black hidden md:flex flex-col items-center text-sm md:text-lg relative hover:text-[#06398C] hover:text-opacity-50 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-[#06398C] before:bg-opacity-50 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-[#06398C] after:bg-opacity-50 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] group">
        <MapMarker class="w-5 md:w-6 pt-1 text-[#06398C] fill-current group-hover:text-opacity-50 transition-all ease-in-out duration-500" />
        <span>Locate Fins</span>
      </button>
      <button class="text-black flex flex-col items-center text-sm md:text-lg relative hover:text-[#06398C] hover:text-opacity-50 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-[#06398C] before:bg-opacity-50 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-[#06398C] after:bg-opacity-50 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] group">
        <AccountCircle class="w-5 md:w-6 pt-1 text-[#06398C] fill-current group-hover:text-opacity-50 transition-all ease-in-out duration-500" />
        <span>Sign In</span>
      </button>
      <button class="text-black flex flex-col items-center text-sm md:text-lg relative hover:text-[#06398C] hover:text-opacity-50 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-500 before:absolute before:bg-[#06398C] before:bg-opacity-50 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-500 after:absolute after:bg-[#06398C] after:bg-opacity-50 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%] group">
        <span>0</span>
        <Shopping class="w-5 md:w-6 text-[#06398C] fill-current group-hover:text-opacity-50 transition-all ease-in-out duration-500" />
      </button>
    </div>
  </nav>
</template>

