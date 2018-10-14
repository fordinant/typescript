//defining a class
var animal = /** @class */ (function () {
    // a constructor which is used a class fields
    function animal(limbs, typeofanimal, diet) {
        var _this = this;
        this.limbs = limbs;
        this.typeofanimal = typeofanimal;
        this.diet = diet;
        // method which is accessible to outside the class
        this.gettypeofanimal = function () {
            return _this.typeofanimal;
        };
        this.limbs = limbs;
        this.typeofanimal = typeofanimal;
        this.diet = diet;
    } //end constructor
    return animal;
}()); //end class
var tiger = new animal(4, "mammal", "carnivore");
var snake = new animal(6, "reptile", "carnivore");
var animaltype = snake.gettypeofanimal();
alert(animaltype);
