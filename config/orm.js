let connection = require("./connection");


function createQmarks(num) {
    let arr = [];
    for(var i = 0; i < num; i++) {
        arr.push("?");
    }
    return arr.toString();
}

function traslateSql(obj) {
    let arr = [];
    for (var key in obj) {
        let value = obj[key];
        if (Object.jasOwnProperty.call(obj, key)) {
            if(typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value)
        }
    }
    return arr.toString();
}


let orm = {

    selectAll: function(table, callBack) {
        let query = "SELECT * FROM " + table + ";";

        connection.query(query, function(err,res) {
            if (err) {
                throw err;
            }
            callBack(res);
            
        });
    },

    insertOne: function(table, cols, vals, callBack) {
        let query = "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES (" + createQmarks(vals.length) + ") ";
        console.log(query);
        connection.query(query, vals, function(err,res) {
            if (err) {
                throw err;
            }
            callBack(res);
        });
    },

    updateOne: function(table, objColVals, condition, callBack) {
        let query = "UPDATE " + table + " SET " + traslateSql(objColVals) + " WHERE " + condition; 

        console.log(query);
        connection.query(query, function(err,res) {
            if (err) {
                throw err;
            }
            callBack(res);
            
        });
    },

    deleteOne: function(table, condition, callBack) {
        let query = "DELETE FROM " + table + " WHERE " + condition;

        console.log(query);
        connection.query(query, function(err,res) {
            if (err) {
                throw err;
            }
            callBack(res);
            
        });
    }

}

module.exports = orm;




