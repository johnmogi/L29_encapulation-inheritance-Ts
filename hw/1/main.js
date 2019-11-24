var Speaker = /** @class */ (function () {
    function Speaker(name, color, volume) {
        this.name = name;
        this.color = color;
        this.volume = volume;
    }
    // switchOn switchOff soundOn 
    Speaker.prototype.switchOn = function () {
        console.log(this.name + " is on");
    };
    Speaker.prototype.switchOff = function () {
        console.log(this.name + " is off");
    };
    Speaker.prototype.soundOn = function () {
        console.log(this.name + " is makeing sound now");
    };
    Speaker.prototype.display = function () {
        console.log("color: ", this.color);
        console.log("volume: ", this.volume);
    };
    return Speaker;
}());
var bose = new Speaker("bose", "Yellow", 2000);
bose.display();
bose.switchOn();
bose.soundOn();
bose.switchOff();
var philips = new Speaker("philips", "red", 2000);
philips.display();
philips.switchOn();
philips.soundOn();
philips.switchOff();
