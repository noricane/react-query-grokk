package server

import (
	"encoding/json"
	"fmt"
	"log"
	"os"

	//"time"
	"github.com/gofiber/fiber/v2"
)

func GetCars(c *fiber.Ctx) error {
	fmt.Printf("Getting cars\n")
	// Let's first read the `config.json` file
	content, err := os.ReadFile("data/cars.json")
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
	//Just to see laoding component in client
	//time.Sleep(1 * time.Second)
	return c.Status(200).JSON(payload.Data)
}
