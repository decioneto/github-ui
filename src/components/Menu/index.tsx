'use client';

import { MENU_ITEMS } from './useMenu';
import { usePathname } from 'next/navigation';
import styles from './styles.module.scss';

export function Menu() {
  const pathname = usePathname();

  return (
    <div className={styles.menu}>
      <ul>
        {MENU_ITEMS.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={item.href === pathname ? styles.active : ''}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
