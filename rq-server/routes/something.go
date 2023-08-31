package routes

import (
	"fmt"
	"os"

	"github.com/gofiber/fiber/v2"
)

func GetCars(c *fiber.Ctx) error {
	res,err := os.ReadFile("data/cars.json")
	if err != nil {
		fmt.Printf("Error: %+v\n",err)
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	//Use generator to read line by line?

	return c.Status(200).Send(res)
}