package server

import (
	"fmt"
	//"time"
	"github.com/gofiber/fiber/v2"
)

//Hold state within this variable, I'm grokking react-query. No need for persistence.
//Json data starts at id=1 so it is alright that this initializes to 0
var lastCarClickedId int

func GetLastCarClickedId(c *fiber.Ctx) error {
	fmt.Printf("Last clicked id is: %d\n", lastCarClickedId)

	//Timer just to test loading state of component etc.
	//time.Sleep(5 * time.Second)
	res,status,err := GetCar(lastCarClickedId)
	if err != nil {
		fmt.Printf("ERROR HERE\n")
		return c.Status(status).JSON(err.Error())
	}
	return c.Status(status).JSON(res)
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
