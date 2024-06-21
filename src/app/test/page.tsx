'use client';

import { SEO } from '@/seo';
import { sendGAEvent } from '@next/third-parties/google';

const metadata = {
  title: 'Coming Soon',
  description: 'DevFest Lagos comes up on...',
  keywords: 'devfest, devfest lagos, coming soon, date, venue',
};

const GAEvent = () => {
  return (
    <>
      <SEO title={metadata.title} description={metadata.description} keywords={metadata.keywords} />
      <button onClick={() => sendGAEvent({ event: 'buttonClicked', value: 'xyz' })}>
        This button sends a GA event
      </button>
    </>
  );
};

export default GAEvent;
