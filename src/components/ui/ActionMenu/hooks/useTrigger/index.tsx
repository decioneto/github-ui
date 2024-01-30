import { useCallback, useState } from 'react';

export function useTriggerState() {
  const [pressed, setPressed] = useState<boolean>(false);
  const handlePressed = useCallback(() => {
    setPressed((previuous) => !previuous);
  }, [pressed]);

  return {
    pressed,
    handlePressed,
  };
}
