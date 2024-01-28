'use client';

import { useMemo } from 'react';
import { IconButton } from '../../IconButton';

type ActionMenuTriggerProps = {
  type: 'icon' | 'button' | 'single-selection' | 'multi-selection';
};

export function ActionMenuTrigger({ type }: ActionMenuTriggerProps) {
  const component = useMemo(() => {
    switch (type) {
      case 'icon':
        return <IconButton variant="secondary" />;
      default:
        return <button>oi</button>;
    }
  }, [type]);

  return component;
}
