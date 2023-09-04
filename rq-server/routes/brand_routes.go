package routes

import (
	"rq-server/services"

	"github.com/gofiber/fiber/v2"
)

func GetBrands(c *fiber.Ctx) error {
	res, err := services.GetBrands()
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	return c.Status(fiber.StatusOK).JSON(*res)
}
