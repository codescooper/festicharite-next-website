import { Icon1, Icon2 } from '@/data/about-section/v1';
import { AboutSectionProps } from '@/src/sections/about/v1';

export const aboutSectionData: AboutSectionProps = {
  images: {
    image1: {
      src: '/assets/images/about/about-1.png',
      alt: 'Don de à la MACCA lors du festicharité 2023',
      width: 195,
      height: 132,
    },
    image2: {
      src: '/assets/images/about/about-2.png',
      alt: 'Remise du prix festicharité à Mr Hassan Hayek lors du festicharité 2023',
      width: 312,
      height: 304,
    },
    image3: {
      src: '/assets/images/about/about-3.png',
      alt: 'Remise du prix festicharite 2023 à ',
      width: 250,
      height: 265,
    },
    image4: {
      src: '/assets/images/about/about-4.png',
      alt: 'Discour de Jhon Jay lors du festicharité 2023',
      width: 250,
      height: 265,
    },
  },
  sectionHeading: {
    subtitle: 'A propos de nous',
    title: "Aider c'est notre mission",
    description:
      "1er rendez-vous incontournable des acteurs de la Charité en Côte d'Ivoire, le Festicharité – Festival International de la Charité vise à célébrer la Charité sous toutes ses formes et à inspirer un engagement collectif autour des causes humanitaires. Organisé chaque année autour du 5 septembre, à l’occasion de la Journée mondiale de la Charité, le Festicharité revient en 2025 pour sa 3ᵉ édition. 📍 le 14 août 2025, à Abidjan (Côte d'Ivoire), cette nouvelle édition rassemblera associations, donateurs, entreprises, institutions, artistes et citoyens engagés, sous le thème : 🎯  « Montage de projets et Opportunités de financements par les bailleurs de fonds internationaux », en cohérence avec les Objectifs de Développement Durable (ODD) des Nations unies.",
  },
  keyPoints: [
    {
      icon: <Icon1 />,
      title: "J'achete mon ticket pour le festiCharité 2024",
      url: '/',
    },

    {
      icon: <Icon2 />,
      title: "Je m'engage pour le festiCharité 2024",
      url: '/',
    },
  ],
  description:
    'Nous vous invitons à vous joindre à notre mission en vous joignant à cet évènement.',
};
