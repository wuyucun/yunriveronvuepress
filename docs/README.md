---
pageLayout: home
config:
  # ==========================================
  # 1. 铺满全屏的 Banner 与 Hero 区域
  # ==========================================
  - type: banner
    full: true  # 开启此选项，Banner 会铺满第一屏 (100vh)
    banner: /mount.jpg  # 你的高清背景图路径 (存放在 public/images/ 下)
    bannerMask: { light: 0.2, dark: 0.6 } # 遮罩透明度，防止背景图过亮导致文字看不清
    hero:
      name: 云川
      tagline: 个人知识库
      text: 归纳碎片化信息流，提供如云川一般极致流畅的阅读体验。
      actions:
        - theme: brand
          text: 生活记 →
          link: /lifedoc/
        - theme: brand
          text: 健康记 →
          link: /health/
        - theme: brand
          text: 投资记 →
          link: /invest/
        - theme: alt
          text: 博客
          link: https://wyc.cc
  # ==========================================
  # 左图右文 (image-text)
  # ==========================================
  - type: image-text
    title: 开源托管，稳驻于云
    description: 本地创作，Github仓库和腾讯云EdgeOne，实现云存储、云托管、云部署，全流程免费，高性能全球访问。
    image: /02.svg # 你的展示图
  # ==========================================
  # 左文右图 (text-image)
  # ==========================================
  - type: text-image
    title: 汇聚点滴，奔涌成川
    description: 通过侧边栏索引，以文档布局，将碎片化信息梳理为树状结构，系统化归纳与阅读。
    image: /01.svg # 建议使用带有透明背景的插画
    
---

