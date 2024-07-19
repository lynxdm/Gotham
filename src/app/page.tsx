'use client';

import { useRef } from 'react';
import { Footer } from '@/components/shared';
import {
  BiggestTechFestival,
  Celebration,
  Highlights,
  HomeBanner,
  Subscription,
} from '@/components/home';

export default function Home() {
  const subscriptionRef = useRef<HTMLDivElement | null>(null);

  const ScrollToSubscription = () => {
    if (subscriptionRef.current) {
      window.scrollTo({
        top: subscriptionRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <main className='home'>
      <HomeBanner ScrollToSubscription={ScrollToSubscription} />
      <BiggestTechFestival />
      <Highlights />
      <Celebration />
      <Subscription subscriptionRef={subscriptionRef} />
      <Footer />
    </main>
  );
}
