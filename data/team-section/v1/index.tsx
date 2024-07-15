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
    title: 'Le festicharité vous est ochestré par une équipe devouées',
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
      about: 'Presidente du commissariat festicharité',
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
      about: 'Commissaire Assistante',
    },
    {
      slug: '#',
      image: {
        src: '/assets/images/team/people-3.png',
        alt: 'Zakro Laurent',
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
      name: 'Zakro Laurent',
      about: 'Commission Logistique',
    },
    {
      slug: '#',
      image: {
        src: '/assets/images/team/people-1.png',
        alt: 'Brooklyn Simmons',
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
      name: 'Brooklyn Simmons',
      about: 'President of Sales',
    },
    {
      slug: '#',
      image: {
        src: '/assets/images/team/people-2.png',
        alt: 'Ralph Edwards',
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
      name: 'Ralph Edwards',
      about: 'Medical Assistant',
    },
    {
      slug: '#',
      image: {
        src: '/assets/images/team/people-3.png',
        alt: 'Jenny Wilson',
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
      name: 'Jenny Wilson',
      about: 'Dog Trainer',
    },
  ],
};
