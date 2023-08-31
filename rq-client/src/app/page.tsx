import CarGrid from "./components/Cars/CarGrid";

export default function Home() {
  return (
    <main className="bg-zinc-200 flex min-h-screen flex-col items-center justify-between">
      <h1 className="mt-6 mb-5 text-2xl font-semibold select-none font-OldEnglishFive">Los Santos Customs</h1>
      <CarGrid/>
    </main>
  );
}
