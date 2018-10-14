//this keyword

let text= (thing)=>
{

    console.log(this);
    
    console.log(this + "says hello"+ thing);
    //return message(thing);
}

text("world");


//lexical binding(object creaion)

let object1=
{
firstname:"varun",
lastname:"verma",
message:()=>
    { 
        console.log(this);
        return(this.firstname+" "+ this.lastname);
    }
}
let myname= object1.message();
