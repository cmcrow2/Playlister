import Header from "@/components/Header";
import ListItem from "@/components/ListItem";

export default function Home() {
  return (
    <div className="bg-stone-900 md:rounded-md sm:rounded-none h-full w-full overflow-hidden overflow-y-auto">
      <Header>
        <div className="mb-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
            <ListItem
              image="/images/favorites.png"
              name="Featured Supporter"
              href="sponsor"
            />
          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center">
          <h1 className="text-white text-2xl font-semibold">
            Find assistance for a wildlife emergency or conflict.
          </h1>
        </div>
        <div>Or read our Resources/FAQs.</div>
        <div>Form goes here</div>
      </div>
    </div>
  );
}
