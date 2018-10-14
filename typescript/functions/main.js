// applying types to function
var multiply1 = function (x, y) {
    //or let multiply1= (x:number,y:number):number=>{
    return x * y;
};
console.log(multiply1(1, 9));
var multiply = function (x, y) { return number; };
multiply = function (x, y) {
    return x * y;
};
console.log(multiply(1, 2));
var divide = function (x, y) {
    return x / y;
};
console.log(divide(2, 1));
var multipyts = function (x, y) {
    if (y) {
        return (x * y);
    }
    else {
        return (x * x);
    }
};
console.log(multipyts(2));
console.log(multipyts(2, 3));
//rest parameter
var allpeopleinvite = [];
var pushpeopleinvite = function () {
    var people = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        people[_i] = arguments[_i];
    }
    var peoplearray = people;
    allpeopleinvite = allpeopleinvite.concat(peoplearray);
    console.log(allpeopleinvite);
    return (allpeopleinvite);
};
pushpeopleinvite("ram", "sham", "sita");
pushpeopleinvite("ankit", "mohit", "geeta");
//any
var numberoffriends = function (friends) {
    if (typeof friends == "string") {
        console.log(friends);
        return ("you have 1 friend");
    }
    else {
        var message = "you have " + friends.length + " in number";
        console.log(friends);
        return message;
    }
};
console.log(numberoffriends("ankit"));
console.log(numberoffriends(["ankit", "mohit", 3]));
