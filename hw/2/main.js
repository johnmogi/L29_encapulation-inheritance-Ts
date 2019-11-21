var Flashlight = /** @class */ (function () {
    function Flashlight(name, color, length, volume, batteries) {
        this.name = name;
        this.color = color;
        this.length = length;
        this.volume = volume;
        this.batteries = batteries;
    }
    // switchOn switchOff soundOn 
    Flashlight.prototype.switchOn = function () {
        console.log(this.name + " is on");
    };
    Flashlight.prototype.switchOff = function () {
        console.log(this.name + " is off");
    };
    Flashlight.prototype.replaceBatteries = function () {
        console.log(this.name + " batteries are being replaced");
    };
    Flashlight.prototype.display = function () {
        console.log(this.name + "color: ", this.color);
        console.log(this.name + "light intensity is:  ", this.length);
        console.log(this.name + "volume: ", this.volume);
    };
    return Flashlight;
}());
var flight1 = new Flashlight("miniLight", "Yellow", 45, 200, 55);
flight1.display();
flight1.switchOn();
flight1.switchOff();
flight1.replaceBatteries();
var flight2 = new Flashlight("Big Boomba", "Silver", 5000, 45000, 800);
flight2.display();
flight2.switchOn();
flight2.switchOff();
flight2.replaceBatteries();
