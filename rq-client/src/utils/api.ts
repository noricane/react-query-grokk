import axios from "axios";
import { url } from "./global";
import { Car } from "./types";

export async function getCars():Promise<Car[]>{
    try {
        const res = await axios.get(`${url}/cars`)
        return res.data
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export async function getLastSelected():Promise<Car>{
    try {
        const res = await axios.get(`${url}/user/get_last_clicked`)
        return res.data
    } catch (error) {
        throw new Error((error as Error).message);
    }
}

export async function setLastSelected(id:number):Promise<boolean>{
    try {
        const res = await axios.post(`${url}/user/get_last_clicked`,{id})
        return res.status == 200 ? true : false
    } catch (error) {
        throw new Error((error as Error).message);
    }
}