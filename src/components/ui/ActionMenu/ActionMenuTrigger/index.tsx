'use client';

import { ReactNode, useMemo } from 'react';
import { IconButton } from '../../IconButton';
import { useTriggerState } from '../hooks/useTrigger';
import { Button } from '../../Button';

type ActionMenuTriggerProps = {
  type: 'icon' | 'button' | 'single-selection' | 'multi-selection';
  label?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
};

export function ActionMenuTrigger({
  type,
  label = '',
  icon,
  iconPosition,
}: ActionMenuTriggerProps) {
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
        return (
          <Button
            label={label}
            icon={icon}
            iconPosition={iconPosition}
            variant="secondary"
            size="md"
            pressed={pressed}
            onClick={handlePressed}
          />
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, pressed]);

  return component;
}
