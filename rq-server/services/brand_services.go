package services

import (
	"encoding/json"

	"log"
	"os"
)

func GetAllBrands() (*[]string, error) {
	content, err := os.ReadFile("data/brands.json")
	if err != nil {
		log.Fatal("Error when opening file: ", err)
	}

	// Now let's unmarshall the data into `payload`
	var payload []string
	err = json.Unmarshal(content, &payload)
	if err != nil {
		log.Fatal("Error during Unmarshal(): ", err)
		return nil, err
	}
	if err != nil {
		return nil, err
	}
	return &payload, nil
}
