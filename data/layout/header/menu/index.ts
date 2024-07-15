import { HeaderProps } from '@/src/layout/header/desktop/v1';

export const menuItemsProps: HeaderProps['menuItems'] = [
  {
    label: 'Accueil',
    href: '/',
    // subMenuItems: [
    //   {
    //     label: 'Home One',
    //     href: '/',
    //   },
    //   {
    //     label: 'Home Two',
    //     href: '/home-2',
    //   },
    // ],
  },
  {
    label: 'A propos',
    href: '/about',
  },
  {
    label: 'Evenement',
    href: '/services',
    // subMenuItems: [
    //   {
    //     label: 'Service List',
    //     href: '/services',
    //   },
    //   {
    //     label: 'Service single',
    //     href: '/services/single',
    //   },
    // ],
  },
  {
    label: 'Projets',
    href: '/project',
    // subMenuItems: [
    //   {
    //     label: 'Project List',
    //     href: '/project',
    //   },
    //   {
    //     label: 'Project single',
    //     href: '/project/single',
    //   },
    // ],
  },
  // {
  //   title: 'Blog',
  //   subMenuItems: [
  //     {
  //       label: 'Blog List',
  //       href: '/blog',
  //     },
  //     {
  //       label: 'Blog single',
  //       href: '/blog/single',
  //     },
  //   ],
  // },
  // {
  //   title: 'Pages',
  //   subMenuItems: [
  //     {
  //       label: 'Testimonial',
  //       href: '/testimonial',
  //     },
  //     {
  //       label: 'Team',
  //       href: '/team',
  //     },
  //     {
  //       label: 'Pricing',
  //       href: '/pricing',
  //     },
  //     {
  //       label: 'FAQ',
  //       href: '/faq',
  //     },
  //   ],
  // },
  {
    label: 'Contacts',
    href: '/contact',
  },
];
