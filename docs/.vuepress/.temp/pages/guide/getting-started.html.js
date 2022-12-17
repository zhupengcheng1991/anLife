export const data = JSON.parse("{\"key\":\"v-fb0f0066\",\"path\":\"/guide/getting-started.html\",\"title\":\"快速开始\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"快速开始\",\"description\":\"介绍\"},\"excerpt\":\"\",\"headers\":[{\"level\":2,\"title\":\"test1\",\"slug\":\"test1\",\"children\":[]},{\"level\":2,\"title\":\"test2\",\"slug\":\"test2\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"guide/getting-started.md\"}")

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
