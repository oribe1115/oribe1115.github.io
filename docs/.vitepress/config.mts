import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "oribe.work",
  description: "oribe's Website",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    sidebar: [
      {
        text: 'About',
        link: '/about'
      },
      {
        text: 'Blogs',
        link: '/blogs'
      },
      {
        text: 'Slides',
        link: '/slides/index'
      }
    ],
    search: {
      provider: 'local'
    }
  },
  cleanUrls: true,
  head: [
    [
      'link',
      { rel: 'icon', href: '/icon.png'}
    ],
    [
      'meta',
      { property: 'og:image', content: 'https://oribe.work/icon-square.png' }
    ]
  ]
})
