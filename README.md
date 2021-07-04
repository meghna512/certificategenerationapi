# Certificate Generation API
This is a [NodeJS](https://nodejs.org/en/) based Certificate Generation App where name on the certificcate is provided by the user and a certificate in the form of a png file is generated.

## Setup Locally
1. Clone ```certificategenerationapi``` from ```https://github.com/meghna512/certificategenerationapi.git```
2.  Go to terminal inside certificategenerationapi directory and run ```npm install```
3.  Create a .env file, similar to .env.example
4.  Run ```node index.js``` command.

### Run Using Docker
1. Run ```sudo docker-compose up``` command in your terminal.

A link for Postman Collections is provided given here:

[Postman Links](https://www.getpostman.com/collections/81bcb534ea981260c8e6)

There are two end points in this Api:
1. A POST api to create certificate which returns a png file in response (with given name). These are maintained inside certificates folder in Node App. The name to be printed on the certificate has to be sent via Postman inside Body as JSON data.
For example: {
                "name": "name to be printed on certificate"
             }

2. A GET api to get the certificate with given certificate id which again returns a png image on request completion. The certificate id should be given at the end of url. (For reference check Postman links)
