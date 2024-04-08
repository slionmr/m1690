import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ru-RU',
  title: "Каталог Макеевки",
  head: [
    ['link', { rel: 'icon', href: 'favicon.ico' }],
    // Вставляем предоставленный код для Google Tag Manager
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-J9P9CXR5LP'}],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-J9P9CXR5LP');
    `]
  ],
  description: "Арсенал дизайнера",
  base: '/',
  themeConfig: {
    logo: 'logo.svg',
    footer: {
      copyright: 'Сделано с Любовью ❤️ <a href="https://t.me/+VtNU8Fj_9W1lYzdi">Блог Макеевки</a>'
    },
    nav: [
      { text: 'Связаться', link: 'https://t.me/stepanovgg' }
    ],
    sidebar: {
      '/db/': [
        {
          text: 'Арсенал дизайнера',
          items: [
            { text: '💭 Тест', link: '/db/inspire' }
          ]
        },
        {
          text: 'Обозначения',
          items: [
            { text: 'F - Бесплатный ресурс' },
            { text: 'FP - Частично бесплатно' },
            { text: 'P - Премиум доступ' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'instagram', link: 'https://instagram.com/stepanov.go' }
    ],
    search: {
      provider: 'local'
    }
  }
})
