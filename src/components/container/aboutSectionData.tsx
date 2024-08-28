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
      "1er rendez-vous incontournable des acteurs de la Charité en Côte d'Ivoire, le Festicharité Festival International de la Charité vise à célébrer la Charité. Il se tient autour du 05 septembre de chaque année Journée mondiale de la charite. Du 03 au 07/09/2024 à Abidjan (Côte d'Ivoire) se tiendra la 2ème édition du Festicharité sous le theme Repenser la charité en Côte d'Ivoire aux normes des 17 0DD (Objectifs de développement durable) des Nations unies",
  },
  keyPoints: [
    {
      icon: <Icon1 />,
      title: "J'achete mon ticket pour le festiCharité 2024",
    url: "/"
    },

    {
      icon: <Icon2 />,
      title: "Je m'engage pour le festiCharité 2024",
      url: "/"
    },
  ],
  description:
    'Nous vous invitons à vous joindre à notre mission en vous joignant à cet évènement.',
};
