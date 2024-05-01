import { basename } from 'node:path'
import { defineConfig } from 'vitepress'
import MarkdownPreview from 'vite-plugin-markdown-preview'

import { head, nav, sidebar } from './configs'

const APP_BASE_PATH = basename(process.env.GITHUB_REPOSITORY || '')

export default defineConfig({
  outDir: '../dist',
  base: '/',

  lang: 'ru-RU',
  title: 'M1690',
  description: "Самый большой каталог Макеевки и Донбасса",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['script', { async: true, src: 'https://www.googletagmanager.com/gtag/js?id=G-9EYSRQDKKF' }],
    ['script', {}, `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-9EYSRQDKKF');
    `]
  ],

  lastUpdated: true,
  cleanUrls: true,

  markdown: {
    lineNumbers: true,
  },

  themeConfig: {
    i18nRouting: false,

    logo: '/logo.png',

    nav: [
      { text: 'Связаться', link: 'https://t.me/stepanovgg' },
      { text: 'Telegram', link: 'https://t.me/+VtNU8Fj_9W1lYzdi' }
    ],
    sidebar: {
      '/catalog/': [
        {
          text: 'Каталог',
          items: [
            { text: '🏖 Куда пойти?', link: '/catalog/chillout/' },
            { text: '🥗 Еда и продукты', link: '/catalog/food/' },
            { text: '🚕 Такси', link: '/catalog/taxi/' },
            { text: '🚚 Эвакуаторы', link: '/catalog/evacuation/' },
            { text: 'Скоро новый раздел', link: '#' }
          ]
        }
      ]
    },
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск'
              },
              modal: {
                noResultsText: 'Нет результатов по запросу',
                resetButtonTitle: 'Сбросить',
                footer: {
                  selectText: 'для выбора',
                  navigateText: 'для навигации',
                  closeText: 'закрыть'
                }
              }
            }
          }
        }
      }
    },
    
    outline: {
      level: 'deep',
      label: 'Навигация',
    },

    socialLinks: [
      { icon: 'instagram', link: 'https://instagram.com/stepanov.go' }
    ],

    footer: {
      copyright: 'Блог Макеевки ❤️ <a href="https://t.me/+a_4nT9Dwj5M4NDJi">M1690</a>'
    },

    darkModeSwitchLabel: 'Тема',
    returnToTopLabel: 'Вернуться',
    lastUpdatedText: 'Обновление',

    docFooter: {
      prev: 'Назад',
      next: 'Вперед',
    },

    visitor: {
      badgeId: 'slionmr.m1690',
    },
  },

  vite: {
    plugins: [MarkdownPreview()],
  },
})
