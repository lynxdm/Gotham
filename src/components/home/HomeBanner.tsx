'use client';

import Image from 'next/image';
import { Button } from '../shared';
import SplitType from 'split-type';
import { useEffect, useRef } from 'react';
import { CountdownTimer } from './CountdownTimer';
import {
  logoAnimation,
  headerTextAnimation,
  headerSubTextAnimation,
} from '@/utils/animations/pages/homeAnimations';

export const HomeBanner = ({ ScrollToSubscription }: { ScrollToSubscription: () => void }) => {
  const logoRef = useRef<HTMLDivElement>(null);
  const bannerHeaderTextRef = useRef<HTMLDivElement>(null);
  const bannerSubTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bannerHeaderText = SplitType.create('#bannerHeaderText');
    logoAnimation(logoRef);
    headerTextAnimation(bannerHeaderText, bannerHeaderTextRef);
    headerSubTextAnimation(bannerSubTextRef);
    return () => {
      bannerHeaderText.revert();
    };
  }, []);

  return (
    <section className='home-banner'>
      <div className='container'>
        <div className='notify-block'>
          <div ref={logoRef}>
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
          <h2 className='text-5xl' id='bannerHeaderText' ref={bannerHeaderTextRef}>
            DevFest Lagos is Back, Bigger and Better
          </h2>

          <p className='text-xl' ref={bannerSubTextRef}>
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
