'use client';

import { useRef, useState, useEffect } from 'react';
import { Footer } from '@/components/shared';
import {
  BiggestTechFestival,
  Celebration,
  Highlights,
  HomeBanner,
  Subscription,
} from '@/components/home';

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  const subscriptionRef = useRef<HTMLDivElement | null>(null);

  const ScrollToSubscription = () => {
    if (subscriptionRef.current) {
      window.scrollTo({
        top: subscriptionRef.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

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
