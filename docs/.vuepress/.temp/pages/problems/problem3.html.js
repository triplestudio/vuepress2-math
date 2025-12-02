import comp from "D:/github/github/vuepress2-math/docs/.vuepress/.temp/pages/problems/problem3.html.vue"
const data = JSON.parse("{\"path\":\"/problems/problem3.html\",\"title\":\"问题 3: 微积分求导问题\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"git\":{\"updatedTime\":1764561187000,\"contributors\":[{\"name\":\"yyliujc\",\"username\":\"yyliujc\",\"email\":\"443448607@qq.com\",\"commits\":1,\"url\":\"https://github.com/yyliujc\"}],\"changelog\":[{\"hash\":\"ca967d20f2ee823cc188da1e81333d7104435935\",\"time\":1764561187000,\"email\":\"443448607@qq.com\",\"author\":\"yyliujc\",\"message\":\"first commit\"}]},\"filePathRelative\":\"problems/problem3.md\"}")
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
