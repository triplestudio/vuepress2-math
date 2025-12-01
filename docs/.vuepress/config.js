import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'
import { katex } from '@mdit/plugin-katex'

export default defineUserConfig({
  base: '/vuepress2-math/',
  lang: 'zh-CN',
  title: '数学试题记录',
  description: '记录数学试题和解答',
  
  theme: defaultTheme({
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '我的试题',
        link: '/problems/',
      },
    ],
    sidebar: {
      '/problems/': [
        {
          text: '试题清单',
          children: [
            '/problems/README.md',
            '/problems/problem1.md',
            '/problems/problem2.md',
            '/problems/problem3.md',
          ],
        },
      ],
    },
  }),

  bundler: viteBundler(),
  
  extendsMarkdown: (md) => {
    md.use(katex)
  },
  
  head: [
    ['link', {
      rel: 'stylesheet',
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css'
    }]
  ]
})