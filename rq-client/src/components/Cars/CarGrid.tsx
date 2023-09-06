"use client"
import { getCars, getLastSelected, setLastSelected } from "@/utils/api";
import { Car, SlideButtons } from "@/utils/types";
import { useRouter } from "next/navigation";
import CarComponent from "./CarComponent";
import ModalPanel from "../HTML/ModalPanel";
import React, { useCallback, useEffect } from "react";
import CarModalComponent from "./CarModalComponent";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import Spinner from "../Misc/Spinner";
import { FaRegTimesCircle } from "react-icons/fa";
import LastSelectedComponent from "../User/LastSelectedComponent";
import { AxiosError } from "axios";
import { carsQuery, lastSelectedQuery } from "@/utils/userQuery_consts";
import NewWhipComponent from "./NewWhipComponent";



const CarGrid = ({}:{}) => {
  
  const [isOpened,setIsOpened] = React.useState<boolean>(false)
  const [selected,setSelected] = React.useState<Car|null>(null)

  //Make selectedId, why? let's say we have a new list where we append a new car to head.
  //The selected index will now be the previous car before the real selected car.
  //Applying the Id idea we will always have the same car upon state change.
  const [selectedIndex,setSelectedIndex] = React.useState<number>(-1)
  //Not sure if i will implement displayed cars functionality, but the idea is to be able to search through the cars.
  //The searched list should of course be a filtered list of the useQuary state list.
  const [displayedCars,setDisplayedCars] = React.useState<Car[]>([])

  
  const queryClient = useQueryClient()
  const setLastSelectedMutation = useMutation(setLastSelected,{
    onSuccess:()=>{
      queryClient.invalidateQueries(lastSelectedQuery)
    }
  })
  const [data, setData] = React.useState(0)
  useEffect(()=>{
    if(data > 0) return
    setData(1)
    queryClient.invalidateQueries(carsQuery)
  },[])
  const { 
    data: cars, 
    isError,
    error,
    isFetching, 
    failureCount
   } = useQuery<Car[],AxiosError>(
    { 
      queryKey:carsQuery, 
      queryFn: getCars, 
      initialData: [] ,
      keepPreviousData: true,
      refetchOnWindowFocus:false,
      refetchOnMount:true,
      staleTime:Infinity,
    });
  
  
  const arrowKeysListener = (e:KeyboardEvent) => {
    switch (e.code) {
      case 'ArrowLeft':
        changeDisplayedCar(SlideButtons.DECREASE)
        return
      case 'ArrowRight':
        changeDisplayedCar(SlideButtons.INCREASE)
        return
    }
  }
  const changeDisplayedCar =(instruction:SlideButtons) => {        
    switch (instruction) {
      case SlideButtons.INCREASE:
        setSelectedIndex(prev => (prev+1)%displayedCars.length)
        break;
      case SlideButtons.DECREASE:
        setSelectedIndex(prev => {
          if(prev-1 < 0) return displayedCars.length-1 
          return prev-1
        })    
        break;
    }
  }

  useEffect(()=>{  
    document.addEventListener('keydown',arrowKeysListener)
    return ()=>{document.removeEventListener('keydown',arrowKeysListener)}
  },[displayedCars])


  useEffect(()=>{     
    if(selectedIndex == -1 || isNaN(selectedIndex)) setSelected(null)
    else setSelected(displayedCars[selectedIndex])
  },[selectedIndex])


  useEffect(()=>{ setDisplayedCars([...cars]) },[cars])

   /* If refetch is empty and modal is openeded, we must close it. */
  useEffect(()=>{
    if(cars.length > 0) return
    setIsOpened(false)
    setSelectedIndex(-1)
    setSelected(null)

  },[cars])

  /* Handle the states different non-success useQuery states */  
  if (isError) return (
    <div className='flex-1 h-[60vh] w-screen gap-4 flex flex-col justify-center items-center'>
      <FaRegTimesCircle color="red" size={80}/>
      {/* Here one should check if it's good practice to display error message to user,
          but in this case this is no problem */}
      <div className="text-red-600 font-semibold text-center text-2xl">{(error as unknown&{message:string}).message} <br /> Try again later</div>
    </div>);

  if (failureCount > 0) return (
    <div className='flex-1  h-[60vh] w-screen flex flex-col justify-center items-center'>
      <Spinner error={true} />
      <div className="text-red-600 font-semibold text-2xl">Failed, trying again</div>
    </div>);

  if (isFetching == true) return (
    <div className='flex-1  h-[60vh] w-screen flex justify-center items-center'>
      <Spinner error={false}/>
    </div>);

  /* Successfully fetched data state */
  return (
    <>
      
      {displayedCars.map((e:Car,idx) => (
          <CarComponent selectCar={() => setLastSelectedMutation.mutate(e.id)} onClick={() => { setSelectedIndex(idx); setIsOpened(true) }} key={e.id} {...e}/>
      ))}
      {isOpened && selected != null && 
          <ModalPanel containerStyle={"md:min-h-[36rem] md:w-[44rem] items-center"} name={"carSelectedModal"} isOpened={isOpened} setIsOpened={setIsOpened}>
            <CarModalComponent changeDisplayedCar={changeDisplayedCar} {...selected} />
          </ModalPanel>}
    </>
  )
}

export default CarGrid