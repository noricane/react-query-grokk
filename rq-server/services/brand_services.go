package services

import (
	"encoding/json"
	"fmt"

	"log"
	"os"
)

type PaginatedResponse struct {
	Brands  *[]string `json:"brands"`
	HasNext bool      `json:"has_next"`
}

func GetBrandsPaginated(limit int, page int) (PaginatedResponse, error) {
	fmt.Println("Get Paginatedbrands")
	var hasNext bool
	payload, err := getBrandsFromStore()

	if err != nil {
		log.Fatal("Error during Unmarshal(): ", err)
		return PaginatedResponse{}, err
	}
	var paginatedList *[]string
	if len(*payload) > limit*(page-1) {
		from, to := (limit * (page - 1)), limit*page

		if to > len(*payload) {
			temp := (*payload)[from:]
			paginatedList = &temp
		} else {
			temp := (*payload)[from:to]
			paginatedList = &temp
		}

		if to < len(*payload) { hasNext = true }
	}

	return PaginatedResponse{Brands: paginatedList, HasNext: hasNext}, nil
}
func GetBrands() (*[]string, error) {
	fmt.Println("Get Brands")
	return getBrandsFromStore()
}

func getBrandsFromStore() (*[]string, error) {
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
	return &payload, nil
}
