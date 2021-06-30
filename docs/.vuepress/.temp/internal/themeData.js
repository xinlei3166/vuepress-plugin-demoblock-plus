export const themeData = {
  "repo": "xinlei3166/vuepress-plugin-demoblock",
  "logo": "/logo.png",
  "docsDir": "docs",
  "docsBranch": "master",
  "darkMode": false,
  "navbar": [
    {
      "text": "文档",
      "link": "/guide/"
    }
  ],
  "sidebar": {
    "/guide/": [
      {
        "text": "指南",
        "link": "/guide/"
      },
      {
        "text": "组件",
        "link": "/guide/card.md"
      }
    ]
  },
  "editLinkText": "在 GitHub 上编辑此页",
  "lastUpdatedText": "上次更新",
  "contributorsText": "贡献者",
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "sidebarDepth": 2,
  "editLink": true,
  "lastUpdated": true,
  "contributors": true,
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window"
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
