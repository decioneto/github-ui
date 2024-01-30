'use client';

import { useMemo } from 'react';
import { IconButton } from '../../IconButton';
import { useTriggerState } from '../hooks/useTrigger';

type ActionMenuTriggerProps = {
  type: 'icon' | 'button' | 'single-selection' | 'multi-selection';
};

export function ActionMenuTrigger({ type }: ActionMenuTriggerProps) {
  const { pressed, handlePressed } = useTriggerState();

  const component = useMemo(() => {
    switch (type) {
      case 'icon':
        return (
          <IconButton
            variant="secondary"
            size="md"
            onClick={handlePressed}
            pressed={pressed}
          />
        );
      default:
        return <button>oi</button>;
    }
  }, [type, pressed]);

  return component;
}
