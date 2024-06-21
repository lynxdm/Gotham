'use client';
import { sendGAEvent } from '@next/third-parties/google';

const GAEvent = () => {
  return (
    <button onClick={() => sendGAEvent({ event: 'buttonClicked', value: 'xyz' })}>
      This button sends a GA event
    </button>
  );
};

export default GAEvent;
