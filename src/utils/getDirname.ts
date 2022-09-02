import { fileURLToPath } from 'node:url'
import { path } from '@vuepress/utils'

export const getDirname = (importMetaUrl: string) => path.dirname(fileURLToPath(importMetaUrl))
