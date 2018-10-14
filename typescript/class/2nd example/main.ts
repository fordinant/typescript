//defining a class
class animal
{

// a constructor which is used a class fields
constructor (public limbs: number, public typeofanimal:string ,public diet:string)
{
this.limbs =limbs;
this.typeofanimal=typeofanimal;
this.diet=diet;
}//end constructor
   // method which is accessible to outside the class
    gettypeofanimal=()=>
    {
    return this.typeofanimal;
    }
}//end class

let tiger=new animal(4,"mammal","carnivore");
let snake=new animal(6,"reptile","carnivore");
let animaltype= snake.gettypeofanimal();
alert(animaltype);
