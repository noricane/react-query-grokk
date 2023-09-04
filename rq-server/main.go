package main

import (
	"fmt"
	"os"
	"rq-server/routes"
	"github.com/joho/godotenv"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
)
func main() {
	godotenv.Load()
	
	app := fiber.New()
	var environment string
	if env := os.Getenv("ENVIRONMENT"); env != "DEVELOPMENT" {
		environment = "Production"
		fmt.Print("Initializing cors\n")
		app.Use(cors.New(cors.Config{
			AllowOrigins: "https://app.unstxpbl.com, https://*.unstxpbl.com",
			AllowHeaders: "Origin, Content-Type, Accept, Authorization",
		}))
	} else {
		environment = "Development"

		fmt.Println("Allow cors") 
		app.Use(cors.New(cors.Config{
			AllowOrigins: "*",
			// AllowHeaders:  "Origin, Content-Type, Accept",
		}))

	}

	setupRoutes(app)

	fmt.Printf("Launching server in %s mode \n",environment)
	if PORT := os.Getenv("PORT"); PORT != "" {
		app.Listen(fmt.Sprintf(":%s", PORT))
	} else {
		listen(8000, app)
	}
}

func listen(port int, app *fiber.App) {
	fmt.Printf("Connecting to port %d\n", port)
	err := app.Listen(fmt.Sprintf(":%d", port))
	fmt.Printf("Failed to connect %v\n", err)
	if err != nil {
		listen(port+1, app)
	}
}

func setupRoutes(app *fiber.App) {
	//Random standard route
	app.Get("/", func(c *fiber.Ctx)error{return c.Status(200).JSON("HELO World 🌍")})
	
	//Car routes
	app.Post("/cars/new",routes.AddCar)
	app.Get("/cars",routes.GetCars)
	//User routes
	app.Get("/user/get_last_clicked",routes.GetLastCarClickedId)
	app.Post("/user/set_last_clicked",routes.SetLastCarClickedId)
}