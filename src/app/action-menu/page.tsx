import { ActionMenu } from '@/components/ui/ActionMenu';
import { Settings } from 'lucide-react';

type ActionMenuProps = {};

export default function ActionMenuPage() {
  return (
    <ActionMenu.Root>
      <ActionMenu.Trigger
        type="button"
        label="Settings"
        icon={<Settings size={16} />}
        iconPosition="left"
      />
    </ActionMenu.Root>
  );
}
