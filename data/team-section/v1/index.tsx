import { TeamSectionProps } from '@/src/sections/team/v1';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaPinterest,
  FaTwitter,
} from 'react-icons/fa6';

export const teamSectionData: TeamSectionProps = {
  sectionHeading: {
    subtitle: 'Les membres du commissariat',
    title: 'Le festicharité vous est orchestré par une équipe devouée',
  },
  cards: [
    {
      slug: '#',
      image: {
        src: '/assets/images/team/people-1.png',
        alt: 'Ange Eric Kouassi',
      },
      socials: [
        {
          href: 'https://www.facebook.com/',
          icon: <FaFacebookF />,
        },
        {
          href: 'https://twitter.com/',
          icon: <FaTwitter />,
        },
        {
          href: 'https://www.linkedin.com/',
          icon: <FaLinkedinIn />,
        },
        {
          href: 'https://www.pinterest.com/',
          icon: <FaPinterest />,
        },
      ],
      name: 'Ange Eric Kouassi',
      about: 'Commissaire Générale du Festicharité',
    },
    {
      slug: '#',
      image: {
        src: '/assets/images/team/people-2.png',
        alt: 'Zakro Ursula Diane',
      },
      socials: [
        {
          href: 'https://www.facebook.com/',
          icon: <FaFacebookF />,
        },
        {
          href: 'https://twitter.com/',
          icon: <FaTwitter />,
        },
        {
          href: 'https://www.linkedin.com/',
          icon: <FaLinkedinIn />,
        },
        {
          href: 'https://www.pinterest.com/',
          icon: <FaPinterest />,
        },
      ],
      name: 'Zakro Ursula Diane',
      about: 'Commissaire Générale Adjointe à L\'organisation et l\'administration',
    },
    {
      slug: '#',
      image: {
        src: '/assets/images/team/people-3.png',
        alt: 'Dr N\'Guessan',
      },
      socials: [
        {
          href: 'https://www.facebook.com/',
          icon: <FaFacebookF />,
        },
        {
          href: 'https://twitter.com/',
          icon: <FaTwitter />,
        },
        {
          href: 'https://www.linkedin.com/',
          icon: <FaLinkedinIn />,
        },
        {
          href: 'https://www.pinterest.com/',
          icon: <FaPinterest />,
        },
      ],
      name: 'Dr N\'Guessan',
      about: 'Président du comité d\'organisation & Commission Santé',
    },
    {
      slug: '#',
      image: {
        src: '/assets/images/team/people-4.png',
        alt: 'Mr Zakro Laurent',
      },
      socials: [
        {
          href: 'https://www.facebook.com/',
          icon: <FaFacebookF />,
        },
        {
          href: 'https://twitter.com/',
          icon: <FaTwitter />,
        },
        {
          href: 'https://www.linkedin.com/',
          icon: <FaLinkedinIn />,
        },
        {
          href: 'https://www.pinterest.com/',
          icon: <FaPinterest />,
        },
      ],
      name: 'Zakro Laurent Simon',
      about: 'Commissaire Logistique & Transport',
    },
    // {
    //   slug: '#',
    //   image: {
    //     src: '/assets/images/team/people-2.png',
    //     alt: 'Ralph Edwards',
    //   },
    //   socials: [
    //     {
    //       href: 'https://www.facebook.com/',
    //       icon: <FaFacebookF />,
    //     },
    //     {
    //       href: 'https://twitter.com/',
    //       icon: <FaTwitter />,
    //     },
    //     {
    //       href: 'https://www.linkedin.com/',
    //       icon: <FaLinkedinIn />,
    //     },
    //     {
    //       href: 'https://www.pinterest.com/',
    //       icon: <FaPinterest />,
    //     },
    //   ],
    //   name: 'Ralph Edwards',
    //   about: 'Medical Assistant',
    // },
    // {
    //   slug: '#',
    //   image: {
    //     src: '/assets/images/team/people-3.png',
    //     alt: 'Jenny Wilson',
    //   },
    //   socials: [
    //     {
    //       href: 'https://www.facebook.com/',
    //       icon: <FaFacebookF />,
    //     },
    //     {
    //       href: 'https://twitter.com/',
    //       icon: <FaTwitter />,
    //     },
    //     {
    //       href: 'https://www.linkedin.com/',
    //       icon: <FaLinkedinIn />,
    //     },
    //     {
    //       href: 'https://www.pinterest.com/',
    //       icon: <FaPinterest />,
    //     },
    //   ],
    //   name: 'Jenny Wilson',
    //   about: 'Dog Trainer',
    // },
  ],
};
