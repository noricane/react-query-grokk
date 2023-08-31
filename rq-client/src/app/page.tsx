import { getCars } from "@/utils/api";
import { Car } from "@/utils/types";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

export default function Home() {
  const { data: cars } = useQuery<Car[]>({ queryFn: getCars, initialData: [] });
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
