import { fetchThings } from "@/app/_utils";

export default async function Page() {
  await fetchThings();

  return (
    <div className="flex flex-col items-center p-4 m-4 border border-black">
      Root page
    </div>
  );
}
