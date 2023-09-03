package server

import (
	"fmt"
	//"time"
	"github.com/gofiber/fiber/v2"
)

func AddCar(c *fiber.Ctx) error {
	payload := struct{
		Car Car `json:"car"`
	}{}
	if err := c.BodyParser(&payload); err != nil {
		return c.SendStatus(fiber.StatusBadRequest)
	}
	err := AddNewCar(&payload.Car)
	if err != nil {
		fmt.Printf("ERRORR is %v",err)
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	return c.Status(fiber.StatusOK).JSON("OK")
}
func GetCars(c *fiber.Ctx) error {
	fmt.Printf("Get Cars\n")
	data,err := GetAllCars()
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	return c.Status(200).JSON(data)
}
