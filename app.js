const express = require("express");
const app = express();
const path = require("path");

app.use(express.static("public"));

app.listen(3000, ()=> {
    console.log("servidor corriendo en el servidor 3000")
});

app.get(("/"), (req, res) => {
    res.sendFile(path.join(__dirname, "/views/home.html"))
});

app.get(("/contact"), (req, res) => {
    res.sendFile(path.join(__dirname, "/views/contact.html"));
});

app.get(("/register"), (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"));
});

app.get(("/home/login"), (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"));
});

app.get(("/Carrito"), (req, res) => {
    res.sendFile(path.join(__dirname, "/views/Carrito.html"));
});