
var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");

let path = require("path");

let app = express();
let PORT = process.env.PORT || 3000;



// app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use(express.static("public"));
// app.use(express.static(path.join(__dirname, "public")));

// app.use(bodyParser.urlencoded({ extended: true}));

// app.use(bodyParser.jason());


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./controllers/burgers_controller")(app);

app.use(router);

app.listen(PORT, function() {
    console.log("server is listening on local host:" + PORT)
});

