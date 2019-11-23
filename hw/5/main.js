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
    Shape.prototype.display = function () {
        console.log("xPosition: ", this.xPosition);
        console.log("yPosition: ", this.yPosition);
        console.log("color: ", this.color);
    };
    return Shape;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(xPosition, yPosition, color, radius) {
        var _this = _super.call(this, xPosition, yPosition, color) || this;
        _this.radius = radius;
        return _this;
    }
    Circle.prototype.getarea = function (radius2) {
        radius = Math.abs(radius);
        var volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        return volume;
    };
    Circle.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("radius: ", this.radius);
    };
    return Circle;
}(Shape));
var roundy = new Circle(50, 50, "red", 35);
roundy.getarea(35);
roundy.display();
