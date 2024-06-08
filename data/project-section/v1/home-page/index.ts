import { ProjectSectionProps } from '@/src/sections/project/v1';

export const projectSectionData: ProjectSectionProps = {
  sectionHeading: {
    subtitle: 'Nos precedentes actions',
    title: 'Nous avons fait des actions pour des causes importantes',
  },
  isWave: true,
  works: [
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/1.png',
        alt: 'portfolio-1',
      },
      title: 'Festicharité by night',
      description:
        "Nous avons parcouru des quartiers pour apporter de la nourriture et de l'assistance aux personnes qui en avaient besoin.",
    },
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/2.png',
        alt: 'portfolio-1',
      },
      title: 'Dons et masterclass aux orphelinats et etablissements',
      description:
        "Nous avons donné des cours de programmation aux orphelinats et aux établissements pour enseigner les technologies de l'informatique.",
    },
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/3.png',
        alt: 'portfolio-1',
      },
      title: 'Dons de parcs informatique',
      description:
        "Nous avons donné des parcs informatiques aux orphelinats et aux établissements pour enseigner les technologies de l'informatique.",
    },
    {
      slug: '/project/single',
      image: {
        src: '/assets/images/project/4.png',
        alt: 'portfolio-1',
      },
      title: 'Projet 0 faim en millieu scolaire',
      description:
        'Nous avons develloppé des cultures et des cantines mobiles pour des établissements scolaires.',
    },
  ],
};
