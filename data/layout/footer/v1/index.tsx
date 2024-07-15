import { FooterSectionProps } from '@/src/layout/footer/v1';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa6';

export const footerSectionData: FooterSectionProps = {
  about: {
    description:
      'FestiCharité est un événement annuel dédié à la collecte de fonds et à la sensibilisation pour diverses causes caritatives.',
    socialLinks: [
      {
        icon: <FaFacebookF />,
        href: 'https://www.facebook.com/festicharite',
      },
      {
        icon: <FaTwitter />,
        href: 'https://twitter.com/festicharite',
      },
      {
        icon: <FaInstagram />,
        href: 'https://www.instagram.com/festicharite',
      },
    ],
  },
  columnOne: {
    title: 'Liens utiles',
    links: [
      {
        label: 'Nous contacter',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Faire un don',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Festicharité 2023',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Bénévolat',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Billeterie',
        href: '/',
        openNewTab: false,
      },
    ],
  },
  columnTwo: {
    title: 'Address',
    location: 'Yopougon Niangon Cité verte, Complexe hotelier le belevedere',
    mails: ['infos@festicharite.com', 'festicharite@gmail.com'],
    phoneNumbers: [
      '(+225) 0-769-627-862',
      '(+225) 0-574-353-838',
      '(+225) 0-151-100-061',
    ],
  },
  columnThree: {
    title: 'Recent Blog',
    blogs: [
      {
        image: {
          src: '/assets/images/blog/blog-sm-1.jpg',
          alt: 'We provide a range of IT solutions',
        },
        title: 'We provide a range of IT solutions',
        date: 'january 11, 2024',
        slug: './blog-details',
      },
      {
        image: {
          src: '/assets/images/blog/blog-sm-2.jpg',
          alt: 'IT solutions enhance efficiency',
        },
        title: 'IT solutions enhance efficiency',
        date: 'january 11, 2024',
        slug: './blog-details',
      },
    ],
  },
  footerBottom: {
    copyrightText: '© Yoursitename  2024 | All Rights Reserved',
    links: [
      {
        label: 'Trams & Condition',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Privacy Policy',
        href: '/',
        openNewTab: false,
      },
      {
        label: 'Contact Us',
        href: '/',
        openNewTab: false,
      },
    ],
  },
};
