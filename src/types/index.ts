export interface Locale {
  'hide-text': string
  'show-text': string
  'copy-button-text': string
  'copy-success-text': string
}

export interface Locales {
  [key: string]: Locale
}

export type ReplaceValue = () => string
export interface ScriptReplace {
  searchValue: RegExp
  replaceValue: string | ReplaceValue
}

export interface DemoblockPluginOptions {
  locales?: Locales
  customClass?: string
  theme?: string
  langs?: any[]
  lang?: string
  cssPreprocessor?: 'sass' | 'scss' | 'less' | 'stylus'
  customStyleTag?: 'sass' | 'scss' | 'less' | 'stylus'
  scriptImports?: Array<string>
  scriptReplaces?: Array<ScriptReplace>
}
