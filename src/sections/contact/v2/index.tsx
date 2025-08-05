import { Container } from '@/src/components/container';
import { SectionHeading } from '@/src/components/section-heading';
import { SectionHeadingWithoutStylingProps } from '@/src/components/section-heading/interface';
import { Form } from './form';
import { cn } from '@/src/utils/shadcn';
import { FaEnvelope, FaLink, FaPhone } from 'react-icons/fa6';
import { FaMapMarkerAlt } from 'react-icons/fa';

export interface ContactSectionProps {
  sectionHeading: SectionHeadingWithoutStylingProps;
  contactInfo: {
    sectionHeading: SectionHeadingWithoutStylingProps;
    location: string;
    mail: string;
    phone: string;
  };
}

export const contactSectionData: ContactSectionProps = {
  sectionHeading: {
    title: 'Formulaire saturé en cours de maintenance',
  },
  contactInfo: {
    sectionHeading: {
      title: 'Restons en contact',
      description:
        'Si notre formulaire de contact est momentanément indisponible, ne vous inquiétez pas ! Nous mettons à votre disposition plusieurs autres moyens pour nous joindre',
    },
    location: `Yopougon Km17 cité ADO non loin du groupe scolaire PIBELECAA.`,
    mail: 'infos@festicharite.com',
    phone: '+(225) 01 51 10 00 61 / 05 74 35 38 38 /  07 69 62 78 62',
  },
};

const addressIconParentClasses = cn(
  'w-[50px] h-[50px] relative top-1 text-md/[1] rounded-full inline-grid place-items-center text-white bg-primary flex-none'
);
const addressItemClasses = cn('flex gap-30px');
const addressTitleClasses = cn(
  'text-md font-bold leading-[1.5] mb-1.5 text-accent-900 dark:text-white'
);

export function ContactSection() {
  const { sectionHeading, contactInfo } = contactSectionData;
  return (
    <section className="section-padding-primary">
      <Container>
        <div className="flex flex-col gap-[50px] md:flex-row">
          <div className="md:w-1/2 lg:w-2/3">
            <div className="mb-30px">
              <SectionHeading {...sectionHeading} />
            </div>
            <Form />
          </div>
          <div className="md:w-1/2 lg:w-2/6">
            <div className="mb-30px">
              <SectionHeading {...contactInfo.sectionHeading} />
            </div>
            <ul aria-label="addresses" className="grid gap-5">
              <li className={addressItemClasses}>
                <span className={addressIconParentClasses}>
                  <FaMapMarkerAlt />
                </span>
                <div>
                  <h3 className={addressTitleClasses}>Adresse</h3>
                  <address className="not-italic">
                    {contactInfo.location}
                  </address>
                </div>
              </li>
              <li className={addressItemClasses}>
                <span className={addressIconParentClasses}>
                  <FaEnvelope />
                </span>
                <div>
                  <h3 className={addressTitleClasses}>Adresse mail</h3>
                  <a href={`mailto:${contactInfo.mail}`}>{contactInfo.mail}</a>
                </div>
              </li>
              <li className={addressItemClasses}>
                <span className={addressIconParentClasses}>
                  <FaPhone />
                </span>
                <div>
                  <h3 className={addressTitleClasses}>Numéros de téléphone</h3>
                  <a href={`tel:${contactInfo.phone.split(' ').join('')}`}>
                    {contactInfo.phone}
                  </a>
                </div>
              </li>
              <li className={addressItemClasses}>
                <span className={addressIconParentClasses}>
                  <FaLink />
                </span>
                <div>
                  <a href="https://pay.apaym.com/festicharite" target="_blank">
                    <h3 className={addressTitleClasses}>
                      Faire un don via APAYM PRO
                    </h3>
                  </a>
                </div>
              </li>
              <li className={addressItemClasses}>
                <span className={addressIconParentClasses}>
                  <FaLink />
                </span>
                <div>
                  <a href="https://paypal.me/festicharite" target="_blank">
                    <h3 className={addressTitleClasses}>
                      Faire un don via PAYPAL
                    </h3>
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
