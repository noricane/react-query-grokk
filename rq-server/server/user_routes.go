package server

import (
	"fmt"
	//"time"
	"github.com/gofiber/fiber/v2"
)

// Json data starts at id=1 so it is alright that this initializes to 0
var lastCarClickedId int

func GetLastCarClickedId(c *fiber.Ctx) error {
	//Timer just to test loading state of component etc.
	//time.Sleep(5 * time.Second)
	res,err := GetCar(lastCarClickedId)
	if err != nil {
		c.Status(480).JSON(err)
	}
	fmt.Printf("Last clicked id is: %d", lastCarClickedId)
	return c.Status(200).JSON(res)
}

func SetLastCarClickedId(c *fiber.Ctx) error {
	payload := struct {
		CarId int `json:"car_id"`
	}{}
	if err := c.BodyParser(&payload); err != nil {
		return c.SendStatus(fiber.StatusBadRequest)

	}
	lastCarClickedId = payload.CarId
	fmt.Printf("Last clicked id is now: %d", lastCarClickedId)
	return c.SendStatus(fiber.StatusNotImplemented)
}
