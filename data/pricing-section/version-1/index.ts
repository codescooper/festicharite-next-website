import { PricingSectionProps } from '@/src/sections/pricing/version-1';

export const pricingSectionData: PricingSectionProps = {
  sectionHeading: {
    subtitle: 'Pricing Action',
    title: 'Innovating for a better tomorrow',
  },
  cards: [
    {
      title: 'Ticket Standard',
      description:
        'Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.',
      features: [
        'Éviter les erreurs',
        'Votre Startup',
        'Tout savoir sur les polices',
        'Indicateur de succès pour votre startup',
      ],
      price: '30 000 FCFA',
      duration: '/événement',
      isPopular: false,
      button: {
        href: '/',
        label: 'Sélectionner le Ticket',
      },
    },
    {
      title: 'Ticket Privilège',
      description:
        'Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.',
      features: [
        'Éviter les erreurs',
        'Votre Startup',
        'Tout savoir sur les polices',
        'Indicateur de succès pour votre startup',
      ],
      price: '50 000 FCFA',
      duration: '/événement',
      isPopular: true,
      button: {
        href: '/',
        label: 'Sélectionner le Ticket',
      },
    },
    {
      title: 'Ticket VIP',
      description:
        'Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression.',
      features: [
        'Éviter les erreurs',
        'Votre Startup',
        'Tout savoir sur les polices',
        'Indicateur de succès pour votre startup',
      ],
      price: '100 000 FCFA',
      duration: '/événement',
      isPopular: false,
      button: {
        href: '/',
        label: 'Sélectionner le Ticket',
      },
    },
  ],
};
