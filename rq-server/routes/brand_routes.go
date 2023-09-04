package routes

import (
	"rq-server/services"

	"github.com/gofiber/fiber/v2"
)

func GetAllBrands(c *fiber.Ctx) error {
	res, err := services.GetAllBrands()
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	return c.Status(fiber.StatusOK).JSON(*res)
}
