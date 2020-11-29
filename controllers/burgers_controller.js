let express = require("express");
const burger = require("../models/burger");
let burgers = require("../models/burger");

let router = express.Router();

router.get("/", function (req, res){
    burger.selectAll(function(data){
        let burgObj = {
            burgers: data
        };
        console.log(burgObj);
        res.render("index", burgObj);
    });
});

router.post("/api/burgers", function (req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", function(req, res) {

});

router.delete("/api/burgers/:id", function(req, res) {

});

module.exports = router;

