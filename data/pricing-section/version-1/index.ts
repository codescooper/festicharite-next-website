import { PricingSectionProps } from '@/src/sections/pricing/version-1';

export const pricingSectionData: PricingSectionProps = {
  sectionHeading: {
    subtitle: 'Billeterie',
    title: 'Faites partie des notres cette année en reservant votre ticket',
  },
  cards: [
    {
      title: 'Ticket Masterclass',
      description:
        "Participez pleinement au Festicharité 2025 en soutenant les actions caritatives et en vivant une expérience unique !",
      features: ['Masterclass', 'Repas', 'Networking', 'Diplome de participation'],
      price: '10 000 FCFA',
      duration: '/événement',
      isPopular: true,
      button: {
        href: 'https://forms.gle/5Z3b3y87r6cEDjhN8',
        label: 'S`\'inscrire',
      },
    },
    // {
    //   title: 'Pass Bogolan',
    //   description:
    //     "Participez à l'évènement et inscrivez votre nom parmis les acteurs du festival international de charité 2eme Edition.",
    //   features: [
    //     'Gala de charité',
    //     'Festival de charité',
    //     "Livre d'or des festivaliers",
    //     'Promotion de votre structure',
    //   ],
    //   price: '50 000 FCFA',
    //   duration: '/événement',
    //   isPopular: true,
    //   button: {
    //     href: '/',
    //     label: 'Sélectionner le Ticket',
    //   },
    // },
    // {
    //   title: 'Pass Kita',
    //   description:
    //     "Soyez à l'honneur du Festicharité 2eme Edition et beneficiez de nombreux avantages ainsi qu'un acces privilegié au backstage du gala de charité.",
    //   features: [
    //     'Gala de charité',
    //     'Festival de charité',
    //     "Livre d'or des festivaliers",
    //     'Promotion de votre structure',
    //     'Stand personnalisé',
    //   ],
    //   price: '100 000 FCFA',
    //   duration: '/événement',
    //   isPopular: false,
    //   button: {
    //     href: '/',
    //     label: 'Sélectionner le Ticket',
    //   },
    // },
  ],
};
