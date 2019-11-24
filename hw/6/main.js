var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    function Shape(xPosition, yPosition, color) {
        this.xPosition = xPosition;
        this.yPosition = yPosition;
        this.color = color;
    }
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(xPosition, yPosition, color, radius) {
        var _this = _super.call(this, xPosition, yPosition, color) || this;
        _this.radius = radius;
        return _this;
    }
    // getarea(height,width){
    Circle.prototype.getarea = function (rad) {
        // var radius = +prompt("enter a ball size, we'll give you the volume");
        //    let radius = Math.abs(rad);
        // let volume = (4/3) * rad 
        var volume = (rad * rad) * Math.PI;
        // * Math.pow(radius, 3) * Math.PI 
        // volume = volume.toFixed(4);
        // let radius = height*width;
        console.log(volume);
        return volume;
    };
    Circle.prototype.display = function () {
        console.log("x Position: ", this.xPosition);
        console.log("y Position: ", this.yPosition);
        console.log("color: ", this.color);
        console.log("the ball radius is :  ", this.radius);
        // console.log("radius: ", this.radius)
    };
    return Circle;
}(Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(xPosition, yPosition, color, height, width) {
        var _this = _super.call(this, xPosition, yPosition, color) || this;
        _this.height = height;
        _this.width = width;
        return _this;
    }
    Rectangle.prototype.getarea = function (a, b) {
        this.height + this.width;
        console.log("the rect area is : ", (a + b));
        return (a + b);
    };
    Rectangle.prototype.display = function () {
        console.log("x Position: ", this.xPosition);
        console.log("y Position: ", this.yPosition);
        console.log("color: ", this.color);
        console.log("height: ", this.height);
        console.log("width: ", this.width);
    };
    Rectangle.prototype.DrawOnScreen = function () {
        console.log("displaying Rectangle on screen");
    };
    Rectangle.prototype.drawOnPrinter = function () {
        console.log("displaying Rectangle on printer");
    };
    return Rectangle;
}(Shape));
// ? ----------Last Part-------------
var Sphere = /** @class */ (function (_super) {
    __extends(Sphere, _super);
    function Sphere(xPosition, yPosition, color, radius, roundArea) {
        var _this = _super.call(this, xPosition, yPosition, "blue", 250) || this;
        _this.roundArea = roundArea;
        return _this;
    }
    Sphere.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("the overall area of the Sphere is : ", this.roundArea);
    };
    Sphere.prototype.calculate = function () {
        var base = (this.radius * 4);
        var pieCalc = (base * 3.14) / 3;
        console.log("the Sphere Volume is: " + pieCalc);
        // return volume = pieCalc
    };
    return Sphere;
}(Circle));
var roundy = new Circle(50, 50, "blue", 50);
roundy.getarea(50);
roundy.display();
var squary = new Rectangle(10, 20, "red", 500, 450);
squary.getarea(10, 20);
squary.display();
squary.drawOnPrinter();
squary.DrawOnScreen();
var spherical = new Sphere(250, 250, "green", 450, 500);
spherical.display();
spherical.calculate();
