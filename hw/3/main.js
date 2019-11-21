var Chair = /** @class */ (function () {
    function Chair(name, material, color, length, width, height) {
        this.name = name;
        this.material = material;
        this.color = color;
        this.length = length;
        this.width = width;
        this.height = height;
    }
    // switchOn switchOff soundOn 
    Chair.prototype.voluemCalculate = function () {
        var chairVolume = this.length * this.height * this.width;
        console.log(this.name + "length: " + chairVolume);
    };
    Chair.prototype.display = function () {
        console.log(this.name + "material: ", this.material);
        console.log(this.name + "color: ", this.color);
        console.log(this.name + "length: ", this.length);
        console.log(this.name + "width: ", this.width);
        console.log(this.name + "height: ", this.height);
        this.voluemCalculate();
    };
    return Chair;
}());
// name material color length  width height
var soffa = new Chair("The Soffa", "Leather", "Yellow", 45, 200, 55);
soffa.display();
var rockArm = new Chair("Rocking Armchair", "cotton", "blue", 500, 10, 45);
rockArm.display();
