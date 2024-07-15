import gsap from 'gsap';
import { RefObject } from 'react';

export const logoAnimation = (logoRef: RefObject<HTMLDivElement>) => {
  if (logoRef.current) {
    gsap.fromTo(
      logoRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
      },
    );
  }
};

export const headerTextAnimation = (bannerHeaderText: { lines: HTMLElement[] | null }) => {
  if (bannerHeaderText) {
    gsap.fromTo(
      bannerHeaderText.lines,
      { opacity: 0, y: 32 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
        delay: 0.1,
      },
    );
  }
};

export const bannerHeaderSubTextAnimation = (bannerSubTextRef: RefObject<HTMLDivElement>) => {
  if (bannerSubTextRef.current) {
    gsap.fromTo(
      bannerSubTextRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1.5,
        ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
        delay: 0.2,
      },
    );
  }
};
