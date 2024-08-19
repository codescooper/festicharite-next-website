import { Footer } from '@/src/layout/footer/v1';
import { MainHeader } from '@/src/layout/header';
import { AboutSection } from '@/src/sections/about/v1';
// import { AboutSection as AboutSectionTwo } from '@/src/sections/about/v2';
import { CtaSection } from '@/src/sections/cta/v1';
import { HeroSection } from '@/src/sections/hero/v3';
import { StatisticsSection } from '@/src/sections/statistics/v1';
import { TeamSection } from '@/src/sections/team/v1';
// import { TestimonialSection } from '@/src/sections/testimonial/v1';
// import { WorkprocessSection } from '@/src/sections/work-process/v1';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FESTICHARITE | A propos',
  description: 'FESTICHARITE - FESTIVAL INTERNATIONAL DE LA CHARITE',
};

export default function Page() {
  return (
    <>
      <MainHeader version="2" />
      <HeroSection
        title="A propos"
        breadcrumbItems={[
          {
            label: 'Accueil',
            href: '/',
          },
          {
            label: 'A propos',
          },
        ]}
      />
      <AboutSection />
      <CtaSection />
      {/* <TestimonialSection /> */}
      <StatisticsSection />
      <TeamSection />
      {/* <AboutSectionTwo /> */}
      {/* <WorkprocessSection /> */}
      <Footer />
    </>
  );
}
