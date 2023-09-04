import axios, { AxiosError } from "axios";
import { url } from "./global";
import { Car, PaginatedBrands } from "./types";

export async function getBrands():Promise<string[]>{
    try {
        const res = await axios.get(`${url}/brands`)
        return res.data
    } catch (error) {
        throw error as AxiosError
    }
}
export async function getPaginatedBrands(limit:number,page:number):Promise<PaginatedBrands>{
    try {
        const res = await axios.post(`${url}/brands_paginated?limit=${limit}&page=${page}`)
        return res.data
    } catch (error) {
        throw error as AxiosError
    }
}
export async function getCars():Promise<Car[]>{
    try {
        const res = await axios.get(`${url}/cars`)
        return res.data
    } catch (error) {
        throw error as AxiosError
    }
}
export async function addCar(c:Car):Promise<boolean>{
    try {
        const res = await axios.post(`${url}/cars/new`,{car:c})
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

