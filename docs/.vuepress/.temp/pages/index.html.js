import comp from "D:/github/github/vuepress2-math/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"数学试题记录站点\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1764633713000,\"contributors\":[{\"name\":\"yyliujc\",\"username\":\"yyliujc\",\"email\":\"443448607@qq.com\",\"commits\":2,\"url\":\"https://github.com/yyliujc\"}],\"changelog\":[{\"hash\":\"c122402906988374b60a9e243a0ab21deafc6cc5\",\"time\":1764633713000,\"email\":\"443448607@qq.com\",\"author\":\"yyliujc\",\"message\":\"deploy\"},{\"hash\":\"ca967d20f2ee823cc188da1e81333d7104435935\",\"time\":1764561187000,\"email\":\"443448607@qq.com\",\"author\":\"yyliujc\",\"message\":\"first commit\"}]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

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
