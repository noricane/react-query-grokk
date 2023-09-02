package server

import (
	"fmt"
	//"time"
	"github.com/gofiber/fiber/v2"
)

func GetCars(c *fiber.Ctx) error {
	
	fmt.Printf("Getting cars\n")
	data,err := GetAllCars()
	if err != nil {
		return c.SendStatus(fiber.StatusInternalServerError)
	}
	return c.Status(200).JSON(data)
}
