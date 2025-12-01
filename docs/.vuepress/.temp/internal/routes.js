export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/github/github/vuepress2-math/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"数学试题记录站点"} }],
  ["/problems/problem1.html", { loader: () => import(/* webpackChunkName: "problems_problem1.html" */"D:/github/github/vuepress2-math/docs/.vuepress/.temp/pages/problems/problem1.html.js"), meta: {"title":"问题 1: 二次函数求最值"} }],
  ["/problems/problem2.html", { loader: () => import(/* webpackChunkName: "problems_problem2.html" */"D:/github/github/vuepress2-math/docs/.vuepress/.temp/pages/problems/problem2.html.js"), meta: {"title":"问题 2: 三角函数恒等式证明"} }],
  ["/problems/problem3.html", { loader: () => import(/* webpackChunkName: "problems_problem3.html" */"D:/github/github/vuepress2-math/docs/.vuepress/.temp/pages/problems/problem3.html.js"), meta: {"title":"问题 3: 微积分求导问题"} }],
  ["/problems/", { loader: () => import(/* webpackChunkName: "problems_index.html" */"D:/github/github/vuepress2-math/docs/.vuepress/.temp/pages/problems/index.html.js"), meta: {"title":"我的试题"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/github/github/vuepress2-math/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
