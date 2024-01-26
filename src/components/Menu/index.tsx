'use client';

import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { MENU_ITEMS } from './useMenu';
import { usePathname } from 'next/navigation';

export function Menu() {
  const [menu, setMenu] = useState<string>();
  const pathname = usePathname();

  useEffect(() => {
    setMenu(pathname);
  }, [pathname]);

  return (
    <div className={styles.menu}>
      <ul>
        {MENU_ITEMS.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              className={item.href === menu ? styles.active : ''}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
