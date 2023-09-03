import axios, { AxiosError } from "axios";
import { url } from "./global";
import { Car } from "./types";

export async function getCars():Promise<Car[]>{
    try {
        const res = await axios.get(`${url}/cars`)
        return res.data
    } catch (error) {
        throw error as AxiosError
    }
}

export async function getLastSelected():Promise<Car>{
    try {
        const res = await axios.get(`${url}/user/get_last_clicked`)
        return res.data
    } catch (error) {
        throw error as AxiosError

    }
}

export async function setLastSelected(id:number):Promise<boolean>{
    try {
        const res = await axios.post(`${url}/user/set_last_clicked`,{car_id:id})
        return res.data
    } catch (error) {
        throw error as AxiosError
    }
}