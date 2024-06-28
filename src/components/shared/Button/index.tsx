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

type buttonState = 'primary' | 'secondary';
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
  state?: buttonState;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { label = 'Button', onClick, className, isLoading, disabled, type, state, size, fullWidth },
    ref,
  ) => {
    return (
      <button
        className={classNames(buttonVariants({ state, size, fullWidth, className }))}
        ref={ref}
        disabled={disabled}
        type={isLoading ? 'button' : type === 'submit' ? 'submit' : 'button'}
        onClick={onClick}
      >
        {label}
      </button>
    );
  },
);
Button.displayName = 'Button';
