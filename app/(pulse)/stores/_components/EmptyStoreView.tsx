import { AddStoreButton } from './AddStoreButton';

export function EmptyStoreView() {
  return (
    <div className="border border-dashed rounded-lg m-6 p-4 min-h-80 text-center flex flex-col items-center justify-center">
      <p className="text-2xl font-semibold">No stores yet.</p>
      <p className="text-muted-foreground mb-4">Add a record now.</p>
      <AddStoreButton />
    </div>
  );
}
