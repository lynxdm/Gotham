'use client';

import * as React from 'react';
import { classNames } from '@/utils/classNames';
import { cva, type VariantProps } from 'class-variance-authority';

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
  (
    {
      label = 'Button',
      onClick,
      className,
      isLoading = false,
      disabled = false,
      type,
      state,
      size,
      fullWidth,
    },
    ref,
  ) => {
    return (
      <button
        className={classNames(buttonVariants({ state, size, fullWidth, className }))}
        ref={ref}
        disabled={disabled || isLoading}
        type={type === 'submit' ? 'submit' : 'button'}
        onClick={onClick}
        aria-disabled={disabled || isLoading}
        aria-busy={isLoading}
        aria-live='polite'
      >
        {label}
      </button>
    );
  },
);
Button.displayName = 'Button';
