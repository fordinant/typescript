//defining a class
var mobilephone = /** @class */ (function () {
    // a constructor which is used a class fields
    function mobilephone(screen_size, _RAM, _processor, _camera, _battery, _OS) {
        var _this = this;
        // method which is accessible to outside the class
        this.getoperatingsystem = function () {
            return _this.OS;
        };
        this.screensize = screen_size;
        this.RAM = _RAM;
        this.processor = _processor;
        this.camera = _camera;
        this.battery = _battery;
        this.OS = _OS;
    } //end constructor
    return mobilephone;
}()); //end class
var onePlus6T = new mobilephone("6 inch", "6 GB", "snapdragon", 20, 3300, "Android"); //oneplus6t object of the class mobile phone
var os = onePlus6T.getoperatingsystem();
alert(os);
