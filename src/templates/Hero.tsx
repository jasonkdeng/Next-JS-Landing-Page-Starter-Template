import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <div className="flex min-h-screen flex-col">
      <div className="w-full p-6">
        <NavbarTwoColumns logo={<Logo xl />}>
          <li>
            <Link href="https://github.com/jasonkdeng/Spurhacks25">GitHub</Link>
          </li>
        </NavbarTwoColumns>
      </div>
      <div className="flex grow items-center justify-center">
        <Section yPadding="py-0">
          <HeroOneButton
            title={
              <>
                {'Learn to use the web\n'}
                <span className="animate-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-[length:200%_100%] bg-clip-text text-transparent">
                  For Seniors
                </span>
              </>
            }
            description="Make navigating the web your new hobby."
            button={
              <Link href="https://creativedesignsguru.com/category/nextjs/">
                <Button xl>Download the Chrome Extension</Button>
              </Link>
            }
          />
        </Section>
      </div>
    </div>
  </Background>
);

export { Hero };
