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
        title: '⭐️ Ботанический сад',
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
        title: '⭐️ Батуты для взрослых и детей',
        link: 'https://vk.com/akunamatatasport',
        desc: '51 спортивный батут общей площадью 1000км.м Находится за Сигмой (Ашаном)',
        phone: 'Донецк, ул. Землянская улица, 10Б',
        icon: './img/akunamatata.png',
      },
      {
        title: 'Конный клуб: Гран При',
        link: 'https://vk.com/club94805689',
        desc: 'Катание на лошадях, индивидуальные и групповые тренировки',
        phone: 'Макеевка, ул.Тимирязева, 1',
        icon: './img/kskgranpri.png',
      },
      {
        title: 'Двор с лошадьми',
        link: 'https://vk.com/katanie_na_poni_makeevke2023',
        desc: 'Познакомиться с животными, можно покормить, покататься',
        phone: 'Макеевка пос. Ново-Калиново.',
        icon: './img/horsehouse.png',
      },
      {
        title: 'Конный клуб: Ягуар',
        link: 'https://vk.com/ksk_jaguarr',
        desc: 'Катание на лошадях, индивидуальные и групповые тренировки',
        phone: 'Донецк, пр.Мира 44.',
        icon: './img/kskjaguar.png',
      },
      {
        title: 'Аквапарк Донецк',
        link: 'https://yandex.ru/maps/-/CDV2M0Kn',
        desc: 'Аквапарк «Аквасфера», Донецк',
        phone: 'Донецк, ул. Стадионная 1Я',
        icon: './img/aquadn.png',
      },
      {
        title: 'Зоопарк г.Придорожное',
        link: 'https://vk.com/public_zoo_pridorozhnoe',
        desc: 'Большой зоопарк недалеко от ДКАД, работает без выходных, с 8:00 до 20:00,',
        phone: 'село Придорожное',
        icon: './img/zoopridor.png',
      },
      {
        title: '⭐️ Мариупольский парк дикой природы',
        link: 'https://vk.com/zoopark_mariupol',
        desc: 'Отличный зоопарк в Мариуполе, однозначно стоит вашего внимания с 8:00 до 20:00 ',
        phone: 'Мариуполь, пр. Металлургов, 131',
        icon: './img/zoomarikr.png',
      },
    ],
  },
  {
    title: 'Досуг и развлечения',
    items: [
      {
        title: 'Кинотеатр Союз',
        link: 'https://vk.com/kinomakeevka',
        desc: 'Единственный кинотеатр Макеевки',
        phone: 'Макеевка, ул. Ленина, 50а',
        icon: './img/kinomak.png',
      },
      {
        title: 'Побегъ',
        link: 'https://vk.com/kvestkomnata_pobegdn',
        desc: 'Крупнейшая сеть квест комнат в Республике. ',
        phone: 'Донецк, бульвар Пушкина, 9',
        icon: './img/pobeg.png',
      },
      {
        title: 'Skynet',
        link: 'https://vk.com/skynet_vr',
        desc: 'Клуб виртуальной реальности в Донецке',
        phone: 'Донецк, улица Постышева, 120',
        icon: './img/skynet.png',
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
        desc: 'Много игровых зон, батутов, туалет, зоны для курения, столики, фастфуд и место для ожидания детей',
        phone: 'Макеевка, Монтажная улица 52',
        icon: './img/DKBAJANOVA.png',
      },
      {
        title: 'JoyPark',
        link: 'https://vk.com/labirintkids',
        desc: 'Детский отдых в Макеевке',
        phone: 'Макеевка, Ленина улица, 140а',
        icon: './img/joypark.png',
      },
    ],
  },
  {
    title: 'Бассейны, Спа, Бани, Отдых',
    items: [
      {
        title: 'Комплекс Сок',
        link: 'https://vk.com/s.o.k_08',
        desc: 'Большой бассейн для взрослых и огромный надувной аквапарк для детей',
        phone: 'Макеевка, посёлок Красная Звезда',
        icon: './img/sok.png',
      },
      {
        title: 'Роща',
        link: 'https://vk.com/roshadonetskdn',
        desc: 'Бассейн, Бани, Аренда беседок, ресторан, рыбалка на границе Донецка и Макеевки',
        phone: 'Донецк, улица Сигова 52',
        icon: './img/rosha.png',
      },
    ],
  },
];
