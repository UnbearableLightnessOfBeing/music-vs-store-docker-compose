package main

import (
	"fmt"
	"net/http"
	"os"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Site server is working"))
	})

	port := os.Getenv("PORT")
  fmt.Println("port:", port)
  portValue := ":" + port

  fmt.Println("starting server at" + portValue)

	http.ListenAndServe(portValue, nil)
}
