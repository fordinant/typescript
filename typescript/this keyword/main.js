//this keyword
var _this = this;
var text = function (thing) {
    console.log(_this);
    console.log(_this + "says hello" + thing);
    //return message(thing);
};
text("world");
//lexical binding(object creaion)
var object1 = {
    firstname: "varun",
    lastname: "verma",
    message: function () {
        console.log(_this);
        return (_this.firstname + " " + _this.lastname);
    }
};
var myname = object1.message();
