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
        "Giving frees the spirit, giving opens hearts. Let's continue to give to bring joy.",
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
        "Let's continue to give, because those who give always receive in one way or another.",
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
        'When God gives you 1000 FCFA, remember that there is someone for whom 100 FCFA is important.',
      rating: 4,
    },
  ],
};
