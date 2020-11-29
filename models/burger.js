let orm = require("../config/orm");

let burger = {

    selectAll: function(){
        orm.selectAll("burgers", function(res){
            console.log(res);
        });
    },

    insertOne: function() {
        orm.insertOne("burgers", function(res){
            console.log(res)
        });
    },

    updateOne: function() {
        orm.updateOne("burgers", function(res) {
            console.log(res);
        });
    },

    deleteOne: function() {
        orm.deleteOne("burgers", function(res) {
            console.log(res);
        });
    }
}

module.exports = burger;