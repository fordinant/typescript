//defining a class
class mobilephone
{
//fields or properties
screensize:string;
RAM:string;
processor:string;
camera:number;
battery:number;
OS:string;


// a constructor which is used a class fields
constructor (screen_size: string, _RAM:string ,_processor:string, _camera:number ,_battery:number, _OS:string)
{
this.screensize =screen_size;
this.RAM=_RAM;
this.processor=_processor;
this.camera=_camera;
this.battery=_battery;
this.OS=_OS;
}//end constructor
   // method which is accessible to outside the class
    getoperatingsystem=()=>
    {
    return this.OS;
    }
}//end class

let onePlus6T=new mobilephone("6 inch","6 GB","snapdragon",20,3300,"Android");//oneplus6t object of the class mobile phone
let os= onePlus6T.getoperatingsystem();
alert(os);
