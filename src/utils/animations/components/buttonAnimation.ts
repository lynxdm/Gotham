import gsap from 'gsap';
import { RefObject } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { componentSize } from '@/components/shared/types';

gsap.registerPlugin(ScrollTrigger);

const buttonAnimation = (buttonRef: RefObject<HTMLButtonElement>, size?: componentSize) => {
  const button = buttonRef.current;

  if (button) {
    const buttonLabel = button?.getElementsByTagName('div');

    const btnHorizontalPadding = size === 'sm' ? 54 : size === 'md' ? 65 : 54;
    const btnVerticalPadding = size === 'sm' ? 12 : size === 'md' ? 20 : 23;

    gsap.fromTo(
      button,
      {
        padding: `${btnVerticalPadding} ${btnHorizontalPadding / 1.5}`,
      },
      {
        padding: `${btnVerticalPadding} ${btnHorizontalPadding}`,
        duration: 1,
        ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
        scrollTrigger: {
          trigger: button,
        },
      },
    );

    gsap.fromTo(
      buttonLabel,
      { y: 32, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
        duration: 0.5,
        delay: 0.4,
        scrollTrigger: {
          trigger: button,
        },
      },
    );
  }
};

export default buttonAnimation;
