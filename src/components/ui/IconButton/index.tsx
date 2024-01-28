import { MoreHorizontal } from 'lucide-react';
import styles from './styles.module.scss';

type IconButtonProps = {
  variant: 'primary' | 'secondary' | 'outline' | 'danger' | 'invisible';
  size?: 'sm' | 'md' | 'lg';
};

export function IconButton({ variant, size = 'md' }: IconButtonProps) {
  return (
    <button className={`${styles.button} ${styles[variant]} ${styles[size]}`}>
      <MoreHorizontal size={16} />
    </button>
  );
}
