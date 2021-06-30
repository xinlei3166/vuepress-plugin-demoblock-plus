const path = require('path')
const { shikiPlugin: shiki } = require('@vuepress/plugin-shiki')

const defaultLocales = {
  '/': {
    'hide-text': '隐藏代码',
    'show-text': '显示代码',
    'copy-button-text': '复制代码片段'
  }
}

const demoblockPlugin = ({ locales = {}, theme = 'github-light', langs = [] }, app) => {
  return {
    name: 'vuepress-plugin-demoblock',
    clientAppEnhanceFiles: path.resolve(__dirname, '../client/clientAppEnhance.js'),
    extendsMarkdown: async md => {
      await shiki({ theme, langs }).extendsMarkdown(md)
      const { demoBlockPlugin } = require('./demoblock')
      md.use(demoBlockPlugin)
    },
    define: {
      __DEMOBLOCK_LOCALES__: { ...defaultLocales, ...locales }
    }
  }
}

module.exports = demoblockPlugin
