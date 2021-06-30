import { h } from 'vue'
import { defineClientAppEnhance } from '@vuepress/client'
import Demo from './components/Demo.vue'
import DemoBlock from './components/DemoBlock.vue'
import './styles/index.scss'

const locales = __DEMOBLOCK_LOCALES__

export default defineClientAppEnhance(({ app }) => {
  app.component('Demo', (props, { slots }) => h(Demo, { locales, ...props }, slots))
  app.component('DemoBlock', DemoBlock)
})
