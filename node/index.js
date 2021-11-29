const { path } = require('@vuepress/utils')
const { shikiPlugin: shiki } = require('@vuepress/plugin-shiki')

const defaultLocales = {
  '/': {
    'hide-text': '隐藏代码',
    'show-text': '显示代码',
    'copy-button-text': '复制代码片段',
    'copy-success-text': '复制成功'
  }
}

/**
 * demoblockPlugin
 * @param customClass demoblock classname
 * @param locales i18n
 * @param theme shiki theme css-variables/github-light/github-dark ...
 * @param langs shiki langs
 * @param lang shiki lang
 * @param cssPreprocessor less/scss
 * @param scriptImports
 * @param scriptReplaces
 * @param app
 * @return {{clientAppEnhanceFiles, name: string, define: {__DEMOBLOCK_LOCALES__: {'/': {'show-text': string, 'copy-success-text': string, 'hide-text': string, 'copy-button-text': string}}}, extendsMarkdown: ((function(*=): Promise<void>)|*)}}
 */
const demoblockPlugin = (
  {
    customClass = '',
    locales = {},
    theme = 'css-variables',
    langs = [],
    lang = 'vue',
    cssPreprocessor = '',
    scriptImports = [],
    scriptReplaces = []
  },
  app
) => {
  return {
    name: 'vuepress-plugin-demoblock-plus',
    clientAppEnhanceFiles: path.resolve(__dirname, '../client/clientAppEnhance.js'),
    extendsMarkdown: async md => {
      await shiki({ theme, langs }).extendsMarkdown(md)
      const { demoBlockPlugin } = require('./demoblock')
      md.use(demoBlockPlugin, {
        customClass,
        lang,
        cssPreprocessor,
        scriptImports,
        scriptReplaces
      })
    },
    define: {
      __DEMOBLOCK_LOCALES__: { ...defaultLocales, ...locales }
    }
  }
}

module.exports = demoblockPlugin
