import { defineClientAppEnhance } from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

export default defineClientAppEnhance(({
  app,
  router, // 当前应用的路由实例
  siteData, // 站点元数据
}) => {
  app.use(ElementPlus)
})

