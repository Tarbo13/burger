let express = require("express");
let burger = require("../models/burger");



let router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let hdbrsObj = {
            burgers: data
        };
        console.log(hdbrsObj);
        res.render("index", hdbrsObj);
    });

    router.post("/api/burgers", function(req, res) {
        burger.insertOne(
            ["burger_name"],
            [req.body.burger_name],
            function() {
                // res.json({ id: result.insertId });
                res.redirect("/");
            }
        );
    });

    router.put("/api/burgers/:id", function(req, res) {
        var condition = "id = " + req.params.id;

        console.log("condition", condition);
        burger.updateOne({ devoured: req.body.devoured }, condition, function(result) {
            if ((result.changedRows === 0)) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        });
    });

    router.delete("/api/burgers/:id", function(req, res) {
        var condition = "id = " + req.params.id;

        console.log("condition", condition);
        // burger.deleteOne({ devoured: req.body.devoured }, condition, function(result) {
        //     if ((result.changedRows === 0)) {
        //         return res.status(404).end();
        //     } else {
        //         res.status(200).end();
        //     }
        // });

       
        burger.deleteOne(condition, function(result) {
            if (result.affectedRows == 0) {
                return res.status(404).end();
            } else {
                res.status(200).end();
            }
        })
    });


});

module.exports = router;

