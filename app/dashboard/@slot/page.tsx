import { fetchThings } from "@/app/_utils";

export default async function Page() {
  await fetchThings();

  return (
    <div className="flex items-center p-4 m-4 border border-black">
      Slot page done
    </div>
  );
}
