package routes

import (
	"fmt"
	//"time"
	"rq-server/models"
	"rq-server/services"

	"github.com/gofiber/fiber/v2"
)

func AddCar(c *fiber.Ctx) error {
	payload := struct {
		Car models.Car `json:"car"`
	}{}
	if err := c.BodyParser(&payload); err != nil {
		return c.SendStatus(fiber.StatusBadRequest)
	}
	err := services.AddCar(&payload.Car)
	if err != nil {
		fmt.Printf("ERRORR is %v", err)
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	return c.Status(fiber.StatusOK).JSON("OK")
}
func GetCars(c *fiber.Ctx) error {
	fmt.Printf("Get Cars\n")
	data, err := services.GetCars()
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	return c.Status(200).JSON(data)
}
