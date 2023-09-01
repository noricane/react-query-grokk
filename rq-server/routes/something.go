package routes

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"github.com/gofiber/fiber/v2"
)

// The data struct for the decoded data
// Notice that all fields must be exportable!
type Data struct {
	Data []Car
}
type Car struct {
	Id           int    `json:"id"`
	Manufacturer string `json:"manufacturer"`
	Model        string `json:"model"`
	Price        int    `json:"price"`
	Img          string `json:"img"`
	Description  string `json:"description"`
	Wiki         string `json:"wiki"`
}

func GetCars(c *fiber.Ctx) error {
	fmt.Printf("Getting cars\n")
	// Let's first read the `config.json` file
	content, err := ioutil.ReadFile("data/cars.json")
	if err != nil {
		log.Fatal("Error when opening file: ", err)
	}

	// Now let's unmarshall the data into `payload`
	var payload Data
	err = json.Unmarshal(content, &payload)
	if err != nil {
		log.Fatal("Error during Unmarshal(): ", err)
	}
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}

	return c.Status(200).JSON(payload.Data)
}

/*
func GetCars(c *fiber.Ctx) error {
	fmt.Printf("Getting cars\n")
	res,err := os.ReadFile("data/cars.json")

	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	return c.Status(200).Send(res)
} */
