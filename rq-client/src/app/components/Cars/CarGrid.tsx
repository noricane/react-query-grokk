"use client"
import { getCars } from "@/utils/api";
import { Car } from "@/utils/types";
import { useRouter } from "next/navigation";
import CarComponent from "./CarComponent";
import ModalPanel from "../HTML/ModalPanel";
import React from "react";
import CarModalComponent from "./CarModalComponent";
import { QueryClient, QueryClientProvider, QueryKey, useQuery } from "@tanstack/react-query";

const queryClient = new QueryClient();

const CarGrid = ({}:{}) => {
     const [isOpened,setIsOpened] = React.useState<boolean>(false)
     const [selected,setSelected] = React.useState<Car|null>(null)

  const { data: cars } = useQuery<Car[]>({ queryKey:["cars"], queryFn: getCars, initialData: [] });
  /* const cars: Car[] = [
    {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/2015-03-03_Geneva_Motor_Show_3893.JPG/1024px-2015-03-03_Geneva_Motor_Show_3893.JPG",
    manufacturer: "Rolls Royce",
    model: "Phantom Serenity",
    price: 874762,
    description:
      "The Rolls-Royce Phantom Serenity was released by Rolls-Royce Motor Cars in 2015. The interior of this luxurious ride was inspired by Japanese design and it is crafted from hand-woven silk. The exterior is just as awe-inspiring, with a mother of pearl resemblance. With a V12 engine and 8-speed transmission, this venerable machine can really move, and it is also the cheapest on this list, coming in at just under £1 million.",
    wiki:"https://en.wikipedia.org/wiki/Rolls-Royce_Phantom_Serenity"
    },{
    id: 2,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Aston_Martin_One-77_%288701486190%29_%28cropped%29.jpg/1920px-Aston_Martin_One-77_%288701486190%29_%28cropped%29.jpg",
    manufacturer: "Aston Martin",
    model: "One-77",
    price: 1113657,
    description:
      "The Aston Martin One-77 is a V12 two-door coupe costing those who purchased it £1.1 million. Like nearly every car on this list, a limited number of the Aston Martin One-77 were produced, and the name of the model says the exact number – 77 cars.",
      wiki:"https://en.wikipedia.org/wiki/Aston_Martin_One-77"
    },

  ]; */
  return (
    <QueryClientProvider client={queryClient}>
    <section className="grid grid-cols-12 gap-4 w-full auto-rows-min	 px-4 pb-12 min-h-screen overflow-scroll">
        <input type="text" className="px-2 mt-1 col-span-full h-12  rounded-lg outline-zinc-700" />
        {cars.map((e:Car) => (
            <CarComponent onClick={() => { setSelected(e); setIsOpened(true) }} key={e.id} {...e}/>
        ))}
        {selected && isOpened && 
          <ModalPanel containerStyle={"md:min-h-[36rem] md:w-[44rem]"} name={"carSelectedModal"} isOpened={isOpened} setIsOpened={setIsOpened}>
            <CarModalComponent {...selected} />
          </ModalPanel>
        }
    </section>

    </QueryClientProvider>
  )
}

export default CarGrid