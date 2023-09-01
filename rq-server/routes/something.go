package routes

import (
	"fmt"
	"os"

	"github.com/gofiber/fiber/v2"
)

func GetCars(c *fiber.Ctx) error {
	fmt.Printf("Getting cars\n")
	res,err := os.ReadFile("data/cars.json")
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	return c.Status(200).Send(res)
}