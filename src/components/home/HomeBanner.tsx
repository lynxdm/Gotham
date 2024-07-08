'use client';

import Image from 'next/image';
import { Button } from '../shared';
import { CountdownTimer } from './CountdownTimer';
import { useNavLogoAnimation, useBannerHeroTextAnimation } from '@/hooks/animations/homeAnimations';

export const HomeBanner = ({ ScrollToSubscription }: { ScrollToSubscription: () => void }) => {
  const { navLogoRef } = useNavLogoAnimation();
  const { headerText } = useBannerHeroTextAnimation();

  return (
    <section className='home-banner'>
      <div className='container'>
        <div className='notify-block'>
          <div ref={navLogoRef}>
            <Image
              src='/images/svg/devfest-logo.svg'
              alt='DevFest Lagos Logo'
              height={36}
              width={111}
            />
          </div>

          <Button label='Notify me' size='sm' onClick={ScrollToSubscription} />
        </div>
        <div className='hero-text-container'>
          <div className='hashtag-container'>
            <Image src='/images/svg/hashtag.svg' alt='Hashtag' height={40} width={40} />
          </div>
          <div className='asterisk-container'>
            <Image src='/images/svg/asterik.svg' alt='Asterisk' height={40} width={40} />
          </div>
          <h2 className='text-5xl' ref={headerText}>
            DevFest Lagos is Back, Bigger and Better
          </h2>
          <p className='text-xl'>
            We&apos;re back! and it&apos;s about to be the biggest and most unforgettable tech
            festival yet. Get ready for DevFest Lagos 2024.
          </p>
        </div>
        <div className='text-center'>
          <Button label='Get Early Bird Tickets' size='lg' />
        </div>
        {process.env.NEXT_PUBLIC_EVENT_TIME && <CountdownTimer />}
      </div>
      <div className='arithmetic-container'></div>
    </section>
  );
};
