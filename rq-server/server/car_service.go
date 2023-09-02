package server

import (
	"encoding/json"
	"fmt"

	"log"
	"os"
)



func GetCar(id int)(Car,int,error){
	cars,err := GetAllCars()
	if err != nil {
		return Car{},500 ,err
	}
	for _,c := range cars {
		if c.Id == id {
			return c,200,nil
		}
	}
	return Car{},404,fmt.Errorf("Could not find a car with Id: %d", id)
}
func GetAllCars()([]Car,error){
	content, err := os.ReadFile("data/cars.json")
	if err != nil {
		log.Fatal("Error when opening file: ", err)
	}

	// Now let's unmarshall the data into `payload`
	var payload Data
	err = json.Unmarshal(content, &payload)
	if err != nil {
		log.Fatal("Error during Unmarshal(): ", err)
		return nil,err
	}
	if err != nil {
		return nil,err
	}
	return payload.Data,nil
}