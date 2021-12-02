import { defineNuxtPlugin } from '#app'
import ElementPlus from 'element-plus/lib'
import 'element-plus/theme-chalk/index.css'

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(ElementPlus)
})
