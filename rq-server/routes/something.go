package routes

import (
	"os"

	"github.com/gofiber/fiber/v2"
)

func GetCars(c *fiber.Ctx) error {
	res,err := os.ReadFile("../data/cars.json")
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	//Use generator to read line by line?
	
	return c.SendStatus(fiber.StatusNotImplemented)
}