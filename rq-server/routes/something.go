package routes

import (
	"os"
	"github.com/gofiber/fiber/v2"
)

func GetCars(c *fiber.Ctx) error {
	res,err := os.ReadFile("data/cars.json")
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	return c.Status(200).Send(res)
}