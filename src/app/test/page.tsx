'use client';
import { SEO } from '@/seo';
import { sendGAEvent } from '@next/third-parties/google';
import { metadata } from './metadata';

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
