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
	content, err := os.ReadFile("data/brands.json")
	if err != nil {
		log.Fatal("Error when opening file: ", err)
	}
	fmt.Printf("content is %v", string(content))
	// Now let's unmarshall the data into `payload`

	var hasNext bool
	payload,err := getBrandsFromStore()

	if err != nil {
		log.Fatal("Error during Unmarshal(): ", err)
		return PaginatedResponse{}, err
	}
	var paginatedList *[]string
	if len(*payload) > limit*(page-1) { //vettted
		from :=(limit*(page-1))//vetted?
		to :=limit*page
		fmt.Printf("From: %d To: %d, lenlist:%d\n",from,to,len(*payload))
		if (to > len(*payload)){
			temp := (*payload)[from:]
			paginatedList = &temp;	
		}else{
			temp := (*payload)[from:to]
			paginatedList = &temp;	
		}
		fmt.Printf("to:%d len:%d\n",to+1 , len(*payload))
		if (to < len(*payload)) {
			hasNext = true
		} 
	}

	return PaginatedResponse{Brands: paginatedList, HasNext: hasNext}, nil
}
func GetBrands() (*[]string, error) {
	return getBrandsFromStore()
}

func getBrandsFromStore()(*[]string, error){
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
	return &payload,nil
}