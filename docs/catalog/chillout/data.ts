import type { NavLink } from '../.vitepress/theme/types'

type NavData = {
  title: string;
  items: NavLink[];
};

export const NAV_DATA: NavData[] = [
  {
    title: 'Парки и Природа',
    items: [
      {
        title: 'Ботанический сад',
        link: 'https://t.me/makdn1690/2168',
        desc: 'Хорошее место для семейного отдыха на природе. Пруд, цветы, самая длинаня аллея в Европе',
        phone: 'Донецк, просп. Ильича, 110',
        icon: './img/botsad.png',
      },
      {
        title: 'Тихий парк, Зеленый',
        link: 'https://t.me/makdn1690/2111',
        desc: 'В Мини-парке есть интересные скульптуры и инсталляции, красивые расписанные стены, и кофейня',
        phone: 'Макеевка, Зелёный микрорайон 10А,',
        icon: './img/tihiypark.png',
      },
    ],
  },
  {
    title: 'Активный отдых',
    items: [
      {
        title: 'Аквапарк Донецк',
        link: 'https://yandex.ru/maps/-/CDV2M0Kn',
        desc: 'Аквапарк «Аквасфера», Донецк',
        phone: 'Донецк, ул. Стадионная 1Я',
        icon: './img/aquadn.png',
      },
    ],
  },
  {
    title: 'Детям',
    items: [
      {
        title: 'Северный парк',
        link: 'https://t.me/makdn1690/2129',
        desc: 'Парк аттракционов, большая посадка, пруд в конце посадки',
        phone: 'Макеевка, ул. Парижской Коммуны, 42',
        icon: './img/severpark.png',
      },
      {
        title: 'Детская зона, за ДК Бажанова',
        link: 'https://t.me/makdn1690/2207',
        desc: ' Много игровых зон, батутов, туалет, зоны для курения, столики, фастфуд и место для ожидания детей',
        phone: 'Макеевка, Монтажная улица 52',
        icon: './img/DKBAJANOVA.png',
      },
    ],
  },
];
