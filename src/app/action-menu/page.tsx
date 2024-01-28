import { ActionMenu } from '@/components/ui/ActionMenu';

type ActionMenuProps = {};

export default function ActionMenuPage() {
  return (
    <ActionMenu.Root>
      <ActionMenu.Trigger type="icon" />
    </ActionMenu.Root>
  );
}
