package routes

import "github.com/gofiber/fiber/v2"

func GetCars(c *fiber.Ctx) error {
	return c.SendStatus(fiber.StatusNotImplemented)
}