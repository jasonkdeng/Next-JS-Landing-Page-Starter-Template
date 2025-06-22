import Image from 'next/image';

import { Section } from '@/layout/Section';

const Sponsors = () => (
  <Section title="Sponsors" description="Spur...? >_<">
    <div className="flex justify-center">
      <Image
        src="/assets/images/spur_innovation_centre_logo.jpg"
        alt="Spur Innovation Centre"
        width={260}
        height={224}
      />
    </div>
  </Section>
);

export { Sponsors };
