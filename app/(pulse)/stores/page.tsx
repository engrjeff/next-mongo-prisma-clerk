import { getStores } from '@/services/store';
import { AddStoreButton } from './_components/AddStoreButton';
import { EmptyStoreView } from './_components/EmptyStoreView';
import { StoresTable } from './_components/StoresTable';

export default async function StoresPage() {
  const stores = await getStores();

  if (stores.length === 0) return <EmptyStoreView />;

  return (
    <div className="px-6 space-y-6 min-h-screen flex flex-col">
      <div className="flex justify-end">
        <AddStoreButton />
      </div>

      <StoresTable stores={stores} />
    </div>
  );
}
