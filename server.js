
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
const burgerRoutes = require("./controllers/burgers_controller");
let path = require("path");

let app = express();
let PORT = process.env.PORT || 3000;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));



app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



app.use("/", burgerRoutes);

// app.use(router);

app.listen(PORT, function() {
    console.log("server is listening on local host:" + PORT)
});

