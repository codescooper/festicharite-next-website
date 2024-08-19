import { HeaderProps } from '@/src/layout/header/desktop/v2';
import { menuItemsProps } from '../menu';

export const headerData: HeaderProps = {
  contactInfo: {
    phone: '+(225) 01 51 10 00 61',
    mail: 'infos@festicharite.com',
    address: 'Yopougon Niangon cité verte Complexe hôtelier le BELVEDERE',
  },
  ctaBtn: {
    href: '/contact',
    label: 'Billeterie',
    openNewTab: true,
  },
  menuItems: menuItemsProps,
};
