package routes

import (
	"rq-server/services"

	"github.com/gofiber/fiber/v2"
)

func GetBrandsPaginated(c *fiber.Ctx) error {
	lim := c.QueryInt("limit")
	page := c.QueryInt("page")
	if page == 0 || lim == 0 {
		return c.SendStatus(fiber.StatusBadRequest)
	}
	res, err := services.GetBrandsPaginated(lim, page)
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	return c.Status(fiber.StatusOK).JSON(res)
}
func GetBrands(c *fiber.Ctx) error {

	res, err := services.GetBrands()
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	return c.Status(fiber.StatusOK).JSON(*res)
}
