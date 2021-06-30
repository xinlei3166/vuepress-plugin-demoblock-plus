export const siteData = {
  "base": "/",
  "lang": "en-US",
  "title": "VuePress",
  "description": "Life is short, Keep it simple.",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "type": "image/png",
        "href": "/logo.png"
      }
    ]
  ],
  "locales": {}
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
