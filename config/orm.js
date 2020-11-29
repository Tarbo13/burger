const connection = require("./connection");

connection = require("../config/connection");

let orm = {

    selectAll: function() {
        let query = "SELECT * FROM burgers";

        connection.query(query, function(err,res) {
            if (err) throw err;
            console.log(res)
        });
    },

    insertOne: function() {
        let query = "INSERT INTO burgers VALUES ?";

        connection.query(query, function(err,res) {
            if (err) throw err;
            console.log(res);
        });
    },

    updateOne: function() {
        let query = "UPDATE burgers"; 

        connection.query(query, function(err,res) {
            if (err) throw err;
            console.log(res);
        })
    },

    deleteOne: function() {
        let query = "DELETE FROM burgers";

        connection.query(query, function(err,res) {
            if (err) throw err;
            console.log(res);
        })
    }

}

module.exports = orm;




