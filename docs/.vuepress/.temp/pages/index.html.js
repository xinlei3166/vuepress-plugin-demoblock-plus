export const data = {
  "key": "v-8daa1a0e",
  "path": "/",
  "title": "",
  "lang": "en-US",
  "frontmatter": {
    "home": true,
    "heroImage": "/logo.png",
    "actions": [
      {
        "text": "Get Started",
        "link": "/guide/",
        "type": "primary"
      },
      {
        "text": "Learn More",
        "link": "/guide/",
        "type": "secondary"
      }
    ],
    "features": [
      {
        "title": "💡 Instant Server Start",
        "details": "On demand file serving over native ESM, no bundling required!"
      },
      {
        "title": "⚡️ Lightning Fast HMR",
        "details": "Hot Module Replacement (HMR) that stays fast regardless of app size."
      },
      {
        "title": "🛠️ Rich Features",
        "details": "Out-of-the-box support for TypeScript, JSX, CSS and more."
      },
      {
        "title": "📦 Optimized Build",
        "details": "Pre-configured Rollup build with multi-page and library mode support."
      },
      {
        "title": "🔩 Universal Plugins",
        "details": "Rollup-superset plugin interface shared between dev and build."
      },
      {
        "title": "🔑 Fully Typed APIs",
        "details": "Flexible programmatic APIs with full TypeScript typing."
      }
    ],
    "footer": "MIT Licensed | Copyright © 2021-present 君惜"
  },
  "excerpt": "",
  "headers": [],
  "filePathRelative": "index.md",
  "git": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
