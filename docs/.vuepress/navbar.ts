/**
 * @see https://theme-plume.vuejs.press/config/navigation/ 查看文档了解配置详情
 *
 * Navbar 配置文件，它在 `.vuepress/plume.config.ts` 中被导入。
 */

import { defineNavbarConfig } from 'vuepress-theme-plume'

export default defineNavbarConfig([
  { text: '首页', link: '/' },
  { text: '生活记录', link: '/lifedoc/' },
  { text: '标签', link: '/invest/' },
  { text: '归档', link: '/health/' },
  { text: '博客', link: 'https://wyc.cc/' },
 // {
  //  text: '笔记',
  //  items: [{ text: '示例', link: '/demo/README.md' }]
 // },
])
