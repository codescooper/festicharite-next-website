import { PricingSectionProps } from '@/src/sections/pricing/version-2';

export const pricingSectionData: PricingSectionProps = {
  cards: [
    {
      title: "Ticket N'zassa",
      description:
        "Ticket standard assistez au Gala de charité au palais des congrès de l'hotêl ivoire, vennez decouvrir l'expérience festicharité dans toute sa beauté.",
      features: ['Gala de charité', 'Festival de charité'],
      price: '30.000 FCFA',
      duration: '/événement',

      button: {
        href: '/',
        label: 'Acheter mon ticket',
      },
    },
    {
      title: 'Ticket Bogolan',
      description:
        "Participez à l'évènement et inscrivez votre nom parmis les acteurs du festival international de charité 2eme Edition.",
      features: [
        'Gala de charité',
        'Festival de charité',
        "Livre d'or des festivaliers",
        'Promotion de votre structure',
      ],
      price: '50.000 FCFA',
      duration: '/événement',
      button: {
        href: '/',
        label: 'Acheter mon ticket',
      },
    },
    {
      title: 'Ticket Kita',
      description:
        "Soyez à l'honneur du Festicharité 2eme Edition et beneficiez de nombreux avantages ainsi qu'un acces privilegié au backstage du gala de charité.",
      features: [
        'Gala de charité',
        'Festival de charité',
        "Livre d'or des festivaliers",
        'Promotion de votre structure',
        'Stand personnalisé',
      ],
      price: '100.000 FCFA',
      duration: '/événement',
      button: {
        href: '/',
        label: 'Acheter mon ticket',
      },
    },
  ],
};
