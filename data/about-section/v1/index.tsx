import { AboutSectionProps } from '@/src/sections/about/v1';

function Icon1() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4H52C52.5304 4 53.0391 4.21071 53.4142 4.58579C53.7893 4.96086 54 5.46957 54 6V10C54 10.5304 53.7893 11.0391 53.4142 11.4142C53.0391 11.7893 52.5304 12 52 12C50.3431 12 49 13.3431 49 15C49 16.6569 50.3431 18 52 18C52.5304 18 53.0391 18.2107 53.4142 18.5858C53.7893 18.9609 54 19.4696 54 20V44C54 44.5304 53.7893 45.0391 53.4142 45.4142C53.0391 45.7893 52.5304 46 52 46C50.3431 46 49 47.3431 49 49C49 50.6569 50.3431 52 52 52C52.5304 52 53.0391 52.2107 53.4142 52.5858C53.7893 52.9609 54 53.4696 54 54V58C54 58.5304 53.7893 59.0391 53.4142 59.4142C53.0391 59.7893 52.5304 60 52 60H12C11.4696 60 10.9609 59.7893 10.5858 59.4142C10.2107 59.0391 10 58.5304 10 58V54C10 53.4696 10.2107 52.9609 10.5858 52.5858C10.9609 52.2107 11.4696 52 12 52C13.6569 52 15 50.6569 15 49C15 47.3431 13.6569 46 12 46C11.4696 46 10.9609 45.7893 10.5858 45.4142C10.2107 45.0391 10 44.5304 10 44V20C10 19.4696 10.2107 18.9609 10.5858 18.5858C10.9609 18.2107 11.4696 18 12 18C13.6569 18 15 16.6569 15 15C15 13.3431 13.6569 12 12 12C11.4696 12 10.9609 11.7893 10.5858 11.4142C10.2107 11.0391 10 10.5304 10 10V6C10 5.46957 10.2107 4.96086 10.5858 4.58579C10.9609 4.21071 11.4696 4 12 4V4Z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 24H42"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 32H42"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 40H42"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Icon2() {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="16" r="12" stroke="white" strokeWidth="2" />
      <path
        d="M16 52V46C16 42.6863 18.6863 40 22 40H42C45.3137 40 48 42.6863 48 46V52"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 32H50"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44 26L50 32L44 38"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
      "FestiCharité est un événement annuel dédié à la collecte de fonds et à la sensibilisation pour diverses causes caritatives. Nous rassemblons des associations, des communautés, des bénévoles et des participants pour soutenir des initiatives visant à améliorer la vie des personnes dans le besoin. Avec une variété d'activités telles que des spectacles, des ateliers, des enchères et des conférences, FestiCharité crée un espace convivial et dynamique pour promouvoir la solidarité et célébrer l'acte de donner. Notre mission est de renforcer les liens communautaires et de créer un impact positif et durable sur la société.",
  },
  keyPoints: [
    {
      icon: <Icon1 />,
      title: "J'achete mon ticket pour le festiCharité 2024",
    },
    {
      icon: <Icon2 />,
      title: "Je m'engage pour le festiCharité 2024",
    },
  ],
  description:
    'Nous vous invitons à vous joindre à notre mission en vous joignant à cet évènement.',
};
