import { ComponentProps, ReactNode } from 'react';
import styles from './styles.module.scss';

type ButtonProps = ComponentProps<'button'> & {
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  iconPosition?: 'left' | 'right';
  variant: 'primary' | 'secondary' | 'outline' | 'danger' | 'invisible';
  size?: 'sm' | 'md' | 'lg';
  pressed?: boolean;
};

export function Button({
  label,
  onClick,
  icon,
  iconPosition,
  disabled,
  pressed,
  variant,
  size = 'md',
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${
        pressed ? styles.pressed : ''
      }`}
    >
      {icon && iconPosition === 'left' && icon}
      {label}
      {icon && iconPosition === 'right' && icon}
    </button>
  );
}
