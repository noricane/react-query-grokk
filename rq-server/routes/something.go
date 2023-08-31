package routes

import "github.com/gofiber/fiber/v2"

func GetSomething(c *fiber.Ctx) error {
	return c.SendStatus(fiber.StatusNotImplemented)
}