// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path"
export default defineNuxtConfig({
  devtools: { enabled: true },

  alias: {
    "@": resolve(__dirname, "/"), 
  },

  css:["~/assets/tailwind.css"],
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt", "@vee-validate/nuxt", "@nuxt/icon"],
  veeValidate: {
    autoImports: true
  }
})