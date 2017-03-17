/*
 * golang app to serve personal website
 */

package main

import (
	log "github.com/Sirupsen/logrus"
	"net/http"
	"rsc.io/letsencrypt"
)

func main() {
	log.Info("CMU Data Science Club Website")

	//Serve static files
	http.Handle("/", http.FileServer(http.Dir("/root/go/src/github.com/DSC_website/static")))

	//Https setup
	var m letsencrypt.Manager
	if err := m.CacheFile("letsencrypt.cache"); err != nil {
		log.Fatal(err)
	}

	//Serve
	log.Fatal(m.Serve())
}
