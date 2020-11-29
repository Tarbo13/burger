const express = require("express");
const bodyParser = require("body-parser");

let app = express();
let PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true}));

// app.use(bodyParser.jason());

let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

let routes = require("./controllers/burgers_controller");

app.use(routes);

app.listen(PORT, function() {
    console.log("server is listening on local host:" + PORT)
});

