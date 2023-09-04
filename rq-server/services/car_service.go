package services

import (
	"encoding/json"
	"fmt"
	"io/fs"
	"log"
	"os"
	"rq-server/models"
)

// The data struct for the decoded data
// Notice that all fields must be exportable!
type Data struct {
	Data []models.Car
}

func GetCar(id int) (*models.Car, int, error) {
	cars, err := GetCars()
	if err != nil {
		return &models.Car{}, 500, err
	}
	for _, c := range *cars {
		if c.Id == id {
			return &c, 200, nil
		}
	}
	return &models.Car{}, 404, fmt.Errorf("Could not find a car with Id: %d", id)
}
func AddCar(c *models.Car) error {
	content, err := os.ReadFile("data/cars.json")
	if err != nil {
		log.Fatal("Error when opening file: ", err)
	}

	var payload Data
	err = json.Unmarshal(content, &payload)
	if err != nil {
		log.Fatal("Error during Unmarshal(): ", err)
		return err
	}
	c.Id = len(payload.Data) + 1
	payload.Data = append(payload.Data, *c)
	jsonData, err := json.Marshal(payload)
	err = os.WriteFile("data/cars.json", jsonData, fs.FileMode(os.O_RDWR))
	if err != nil {
		return err
	}
	return nil
}
func GetCars() (*[]models.Car, error) {
	content, err := os.ReadFile("data/cars.json")
	if err != nil {
		log.Fatal("Error when opening file: ", err)
	}

	// Now let's unmarshall the data into `payload`
	var payload Data
	err = json.Unmarshal(content, &payload)
	if err != nil {
		log.Fatal("Error during Unmarshal(): ", err)
		return nil, err
	}
	if err != nil {
		return nil, err
	}
	return &payload.Data, nil
}
