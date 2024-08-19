import { TestimonialSectionProps } from '@/src/sections/testimonial/v1';

export const testimonialSectionData: TestimonialSectionProps = {
  sectionHeading: {
    subtitle: 'Temoignages de nos primés',
    title: 'Les mots des primées de 2023...',
  },
  cards: [
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-1.jpg',
          alt: "Representant de l'Imam Cissé",
        },
        name: "Representant de l'Imam Cissé",
        about: 'Prix Festicharité 2023',
      },
      speech:
        "Donner libère l'esprit, donner ouvre les cœurs. Continuons à donner pour apporter de la joie.",
      rating: 4,
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-2.jpg',
          alt: 'Unknow',
        },
        name: 'Unknow',
        about: 'Prix Festicharité 2023',
      },
      speech:
        "Continuons à donner, car ceux qui donnent reçoivent toujours d'une manière ou d'une autre.",
      rating: 5,
    },
    {
      person: {
        image: {
          src: '/assets/images/testimonial/person-11.jpeg',
          alt: 'John Zaïbo Jay',
        },
        name: 'John Zaïbo Jay',
        about: 'Prix Festicharité 2023',
      },
      speech:
        "Quand Dieu te donne 1000 FCFA, rappelle-toi qu'il y a quelqu'un pour qui 100 FCFA est important.",
      rating: 4,
    },
  ],
};
