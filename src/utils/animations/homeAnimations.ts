import gsap from 'gsap';
import { RefObject } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

//Banner animations
export const logoAnimation = (logoRef: RefObject<HTMLDivElement>) => {
  if (logoRef.current) {
    gsap.fromTo(
      logoRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
        scrollTrigger: {
          trigger: logoRef.current,
        },
      },
    );
  }
};

export const headerTextAnimation = (
  bannerHeaderText: { lines: HTMLElement[] | null },
  bannerHeaderTextRef: RefObject<HTMLDivElement>,
) => {
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
        scrollTrigger: {
          trigger: bannerHeaderTextRef.current,
        },
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

//Big Tech Festival Animations

export const biggestTechHeaderAnimation = (
  bannerHeaderText: { lines: HTMLElement[] | null },
  biggestTechHeaderRef: RefObject<HTMLDivElement>,
) => {
  if (bannerHeaderText) {
    gsap.fromTo(
      bannerHeaderText.lines,
      { opacity: 0, x: -32 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.2,
        duration: 1,
        ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
        delay: 0.2,
        scrollTrigger: {
          trigger: biggestTechHeaderRef.current,
        },
      },
    );
  }
};

export const biggestTextSubTextAnimation = (bannerSubTextRef: RefObject<HTMLDivElement>) => {
  if (bannerSubTextRef.current) {
    gsap.fromTo(
      bannerSubTextRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 2,
        ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
        delay: 0.2,
        scrollTrigger: {
          trigger: bannerSubTextRef.current,
        },
      },
    );
  }
};

export const imageGalleryAnimation = (imageGalleryRef: RefObject<HTMLDivElement>) => {
  setTimeout(() => {
    if (imageGalleryRef.current) {
      gsap.fromTo(
        imageGalleryRef.current,
        { opacity: 0, x: 300 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          delay: 0.2,
          ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
          scrollTrigger: {
            trigger: imageGalleryRef.current,
          },
        },
      );

      const items = imageGalleryRef.current.querySelectorAll('.single-img-container');

      Array.from(items).forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, scale: 1.05 },
          {
            opacity: 1,
            duration: 1,
            delay: 0.7,
            scale: 1,
            ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
            scrollTrigger: {
              trigger: item,
            },
          },
        );
      });
    } else {
    }
  }, 100);
};

//HiGHLIGHTS SECTION

export const highlightsIntroHeader = (highlightsIntroHeaderRef: RefObject<HTMLHeadingElement>) => {
  if (highlightsIntroHeaderRef.current) {
    gsap.fromTo(
      highlightsIntroHeaderRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        duration: 1,
        ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
        scrollTrigger: {
          trigger: highlightsIntroHeaderRef.current,
        },
      },
    );
  }
};

export const highlightsHeaderAnimation = (
  highlightsHeaderText: { lines: HTMLElement[] | null },
  highlightHeaderRef: RefObject<HTMLElement>,
) => {
  if (highlightsHeaderText) {
    gsap.fromTo(
      highlightsHeaderText.lines,
      { opacity: 0, x: -32 },
      {
        opacity: 1,
        x: 0,
        stagger: 0.5,
        duration: 1,
        ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
        delay: 1,
        scrollTrigger: {
          trigger: highlightHeaderRef.current,
        },
      },
    );
  }
};

export const highlightsVideoBgAnimation = (highlightsVideoBgRef: RefObject<HTMLDivElement>) => {
  gsap.fromTo(
    highlightsVideoBgRef.current,
    { opacity: 0, scale: 1.1 },
    {
      opacity: 1,
      duration: 0.3,
      delay: 2,
      scale: 1,
      ease: 'cubic-bezier(0.7, 0, 0.25, 1)',
      scrollTrigger: {
        trigger: highlightsVideoBgRef.current,
      },
    },
  );
};
