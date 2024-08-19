import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { HeroSection } from '@/src/sections/hero/v3';
import { TeamSection } from '@/src/sections/team/grid';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FESTICHARITE | Team',
  description: 'FESTICHARITE - Festival International de la Charité',
};

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title="Team"
        breadcrumbItems={[
          {
            label: 'Accueil',
            href: '/',
          },
          {
            label: 'Team',
          },
        ]}
      />
      <TeamSection />
      <Footer />
    </>
  );
}
