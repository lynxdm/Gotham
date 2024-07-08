import { gsap } from 'gsap';
import { useRef, useEffect } from 'react';
import SplitText from 'gsap-trial/SplitText';

gsap.registerPlugin(SplitText);

export const useNavLogoAnimation = () => {
  const navLogoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navLogoRef.current) {
      gsap.fromTo(
        navLogoRef.current,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          duration: 1,
          delay: 0,
          ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
        },
      );
    }
  }, []);

  return { navLogoRef };
};

export const useBannerHeroTextAnimation = () => {
  const headerText = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const split = new SplitText(headerText.current, { type: 'lines' });

    gsap.fromTo(
      split.lines,
      { opacity: 0, y: 15 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.5,
        duration: 1,
        delay: 0.1,
        ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
      },
    );

    return () => {
      split.revert();
    };
  }, []);

  return { headerText };
};
