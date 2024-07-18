'use client';

import gsap from 'gsap';
import * as React from 'react';
import { classNames } from '@/utils/classNames';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { cva, type VariantProps } from 'class-variance-authority';

gsap.registerPlugin(ScrollTrigger);

const buttonVariants = cva(`btn`, {
  variants: {
    state: {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
    },
    size: {
      sm: 'btn-sm',
      md: 'btn-md',
      lg: 'btn-lg',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    state: 'primary',
    size: 'md',
  },
});

type ButtonState = 'primary' | 'secondary';
interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'disabled'>,
    VariantProps<typeof buttonVariants> {
  label: string;
  onClick?: () => void;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit';
  size?: 'sm' | 'md' | 'lg';
  state?: ButtonState;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    label = 'Button',
    onClick,
    className,
    isLoading = false,
    disabled = false,
    type,
    state,
    size,
    fullWidth,
  }) => {
    const buttonRef = React.useRef<HTMLButtonElement>(null);

    React.useEffect(() => {
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
    }, []);

    return (
      <button
        className={classNames(buttonVariants({ state, size, fullWidth, className }))}
        ref={buttonRef}
        disabled={disabled || isLoading}
        type={type === 'submit' ? 'submit' : 'button'}
        onClick={onClick}
        aria-disabled={disabled || isLoading}
        aria-busy={isLoading}
        aria-live='polite'
      >
        <div>{label}</div>
      </button>
    );
  },
);
Button.displayName = 'Button';
