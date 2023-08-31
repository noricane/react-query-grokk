import { getCars } from "@/utils/api";
import { Car } from "@/utils/types";
import { useRouter } from "next/navigation";
import CarComponent from "./CarComponent";

const CarGrid = ({}:{}) => {
     
  //const { data: cars } = useQuery<Car[]>({ queryFn: getCars, initialData: [] });
  const cars: Car[] = [
    {
    id: 1,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/2015-03-03_Geneva_Motor_Show_3893.JPG/1024px-2015-03-03_Geneva_Motor_Show_3893.JPG",
    manufacturer: "Rolls Royce",
    model: "Phantom Serenity",
    price: 874762,
    description:
      "The Rolls-Royce Phantom Serenity was released by Rolls-Royce Motor Cars in 2015. The interior of this luxurious ride was inspired by Japanese design and it is crafted from hand-woven silk. The exterior is just as awe-inspiring, with a mother of pearl resemblance. With a V12 engine and 8-speed transmission, this venerable machine can really move, and it is also the cheapest on this list, coming in at just under £1 million.",
    },{
    id: 2,
    img: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Aston_Martin_One-77_%288701486190%29_%28cropped%29.jpg/1920px-Aston_Martin_One-77_%288701486190%29_%28cropped%29.jpg",
    manufacturer: "Aston Martin",
    model: "One-77",
    price: 1113657,
    description:
      "The Aston Martin One-77 is a V12 two-door coupe costing those who purchased it £1.1 million. Like nearly every car on this list, a limited number of the Aston Martin One-77 were produced, and the name of the model says the exact number – 77 cars.",
    },
  ];
  return (
    <section>
        {cars.map((e) => (
            <CarComponent {..e}></CarComponent>
      ))}
        
    </section>
  )
}

export default CarGrid