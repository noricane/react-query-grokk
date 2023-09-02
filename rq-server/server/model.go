package server

// The data struct for the decoded data
// Notice that all fields must be exportable!
type Data struct {
	Data []Car
}
type Car struct {
	Id           int    `json:"id"`
	Manufacturer string `json:"manufacturer"`
	Model        string `json:"model"`
	Price        int    `json:"price"`
	Img          string `json:"img"`
	Description  string `json:"description"`
	Wiki         string `json:"wiki"`
}
