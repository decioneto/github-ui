import { MoreHorizontal } from 'lucide-react';
import styles from './styles.module.scss';
import { ComponentProps, HTMLAttributes } from 'react';

interface IconButtonProps extends ComponentProps<'button'> {
  variant: 'primary' | 'secondary' | 'outline' | 'danger' | 'invisible';
  size?: 'sm' | 'md' | 'lg';
  pressed?: boolean;
}

export function IconButton({
  variant,
  size = 'md',
  pressed,
  onClick,
}: IconButtonProps) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${
        pressed ? styles.pressed : ''
      }`}
      onClick={onClick}
    >
      <MoreHorizontal size={16} />
    </button>
  );
}
