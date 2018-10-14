// applying types to function
let multiply1= function(x:number,y:number):number{
//or let multiply1= (x:number,y:number):number=>{
    return x*y;
}

console.log(multiply1(1,9));

let multiply= (x:number,y:number)=>number;
 multiply= (x:number,y:number):number=>
{
return x*y;
}
console.log(multiply(1,2));


let divide= (x:number,y:number):number=>
{
return x/y;
}
console.log(divide(2,1));

let multipyts= (x:number,y?:number)=>
{
if(y)
    {
        return(x*y);
    }
else{
        return(x*x);
    }
}
console.log(multipyts(2));
console.log(multipyts(2,3));

//rest parameter

let allpeopleinvite:string[]=[];
let pushpeopleinvite= (...people:string[])=>
{
let peoplearray= people;
allpeopleinvite=allpeopleinvite.concat(peoplearray);
console.log(allpeopleinvite);
return(allpeopleinvite);
}
pushpeopleinvite("ram","sham","sita");
pushpeopleinvite("ankit","mohit","geeta");

//any

let numberoffriends=(friends:any)=>
{
    if(typeof friends=="string")
    {
        console.log(friends);
        return("you have 1 friend");
    }
    else{
        let message= `you have ${friends.length} in number`;
        console.log(friends);
        return message;
    }
}

console.log(numberoffriends("ankit"));
console.log(numberoffriends(["ankit","mohit",3]));