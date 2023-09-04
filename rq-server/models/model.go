package models

type Car struct {
	Id           int    `json:"id"`
	Manufacturer string `json:"manufacturer"`
	Model        string `json:"model"`
	Price        int    `json:"price"`
	Img          string `json:"img"`
	Description  string `json:"description"`
	Wiki         string `json:"wiki"`
}
