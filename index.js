var express = require('express');
var bodyParser = require('body-parser');

var port = 3030;
var BASE_API_PATH = "/api/v1";

var contacts = [
    {"name": "Andres", "phone": "0987656432"},
    {"name": "Cristopher", "phone": "0986543678"}
];

console.log("Starting API Server...");


var app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("<html><body><h1>CAVA 1611 !!</h1></body></html>");
});

app.get(BASE_API_PATH + "/contacts", (req, res) =>{
    console.log(Date() + "- GET /contacts");
    res.send(contacts);
});

app.post(BASE_API_PATH + "/contacts", (req, res) => {
    console.log(Date() + "- POST /contacts");
    var contact = req.body;
    contacts.push(contact);
    res.sendStatus(201);
});

app.listen(port);

console.log("Server ready...!!");
