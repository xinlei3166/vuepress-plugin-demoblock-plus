import { path } from '@vuepress/utils'
import { default as shiki } from '@vuepress/plugin-shiki'
import type MarkdownIt from 'markdown-it'
import type { DemoblockPluginOptions } from '../types'
import { demoblock } from './demoblock'
import { getDirname } from '../utils'

const __dirname = getDirname(import.meta.url)

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
 * @return {{clientConfigFile, name: string, define: {__DEMOBLOCK_LOCALES__: {'/': {'show-text': string, 'copy-success-text': string, 'hide-text': string, 'copy-button-text': string}}}, extendsMarkdown: ((function(*=): Promise<void>)|*)}}
 */
export const demoblockPlugin = ({
  locales = {},
  customClass = '',
  theme = 'css-variables',
  langs,
  lang = 'vue',
  cssPreprocessor,
  scriptImports = [],
  scriptReplaces = []
}: DemoblockPluginOptions) => {
  return {
    name: 'vuepress-plugin-demoblock-plus',
    clientConfigFile: path.resolve(__dirname, '../client/config.mjs'),
    // alias: {
    //   'vuepress-plugin-demoblock-plus/client': path.resolve(__dirname, '../client/index.mjs')
    // },
    extendsMarkdown: async (md: MarkdownIt) => {
      await (shiki({ theme, langs }) as any).extendsMarkdown(md)
      md.use(demoblock, {
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

export * from './demoblock'
export * from '../types'

export default demoblockPlugin
