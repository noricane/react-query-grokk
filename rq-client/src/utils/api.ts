import axios from "axios";
import { url } from "./global";
import { Car } from "./types";

export async function getCars():Promise<Car[]>{
    try {
        const res = await axios.get(`${url}/cars`)
        return res.data
    } catch (error) {
        return []
    }
}