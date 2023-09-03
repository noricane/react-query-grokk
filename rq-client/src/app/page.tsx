"use client"
import CarGrid from "./components/Cars/CarGrid";
import { QueryClient, QueryClientProvider, } from "@tanstack/react-query";
import Header from "./components/Layout/Header";
const queryClient = new QueryClient();

export default function Home() {
  return (
    <main className="bg-zinc-200 flex min-h-screen flex-col items-center justify-between">
      <h1 className="mt-6 mb-5 text-2xl font-semibold select-none font-OldEnglishFive">Los Santos Customs</h1>
       <section className="grid grid-cols-12 gap-4 w-full auto-rows-min	 px-4 pb-12 min-h-screen overflow-scroll">
        <QueryClientProvider client={queryClient}>
          <Header/>
          <CarGrid/>
        </QueryClientProvider> 
      </section>    
    </main>
  );
}
