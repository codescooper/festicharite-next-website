import { HeaderProps } from '@/src/layout/header/desktop/v2';
import { menuItemsProps } from '../menu';

export const headerData: HeaderProps = {
  contactInfo: {
    phone: '+(225) 07 69 62 78 62',
    mail: 'infos@festicharite.com',
    address: 'Yopougon Niangon cité verte Complexe hotelier le Belvedère',
  },
  ctaBtn: {
    href: '/contact',
    label: 'Billeterie',
    openNewTab: true,
  },
  menuItems: menuItemsProps,
};
