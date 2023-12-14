var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseFigure = /** @class */ (function () {
    function BaseFigure(name, color) {
        this.name = name;
        this.color = color;
    }
    return BaseFigure;
}());
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Circle.prototype.calculateArea = function (radius) {
        return Math.PI * Math.pow(radius, 2);
    };
    return Circle;
}(BaseFigure));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calculateArea = function (length, width) {
        return length * width;
    };
    Rectangle.prototype.print = function () {
        return "formula area of a rectangle it's length * width";
    };
    return Rectangle;
}(BaseFigure));
var Square = /** @class */ (function () {
    function Square(name, color) {
        this.name = name;
        this.color = color;
    }
    Square.prototype.calculateArea = function (side) {
        return side * side;
    };
    Square.prototype.print = function () {
        return "square area formula it's side * side";
    };
    return Square;
}());
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Triangle.prototype.calculateArea = function (base, height) {
        return (base * height) / 2;
    };
    return Triangle;
}(BaseFigure));
var triangle = new Triangle("Triangle", "white");
console.log(triangle.name);
