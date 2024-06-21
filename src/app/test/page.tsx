'use client';
import { Metadata } from 'next';
import { SEO } from '@/seo';
import { sendGAEvent } from '@next/third-parties/google';

const metadata: Metadata = {
  title: 'Coming Soon',
  description: 'DevFest Lagos comes up on...',
  keywords: 'devfest, devfest lagos, coming soon, date, venue',
};

const GAEvent = () => {
  return (
    <>
      <SEO
        title={metadata.title as string}
        description={metadata.description as string}
        keywords={metadata.keywords as string}
      />
      <button onClick={() => sendGAEvent({ event: 'buttonClicked', value: 'xyz' })}>
        This button sends a GA event
      </button>
    </>
  );
};

export default GAEvent;
