var Circle = /** @class */ (function () {
    function Circle(name, color) {
        this.name = name;
        this.color = color;
    }
    Circle.prototype.calculateArea = function (radius) {
        return Math.PI * Math.pow(radius, 2);
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(name, color) {
        this.name = name;
        this.color = color;
    }
    Rectangle.prototype.calculateArea = function (length, width) {
        return length * width;
    };
    Rectangle.prototype.print = function () {
        return "formula area of a rectangle it's length * width";
    };
    return Rectangle;
}());
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
var Triangle = /** @class */ (function () {
    function Triangle(name, color) {
        this.name = name;
        this.color = color;
    }
    Triangle.prototype.calculateArea = function (base, height) {
        return (base * height) / 2;
    };
    return Triangle;
}());
var circle = new Circle("My circle", "Red");
console.log(circle.calculateArea(40));
var rectangle = new Rectangle("MY Rectangle", "White");
console.log(rectangle.calculateArea(5, 5));
console.log(rectangle.print());
var square = new Square("My Square", "Yellow");
console.log(square.calculateArea(5));
console.log(square.print());
var triangle = new Triangle("My Triangle", "Blue");
triangle.calculateArea(20, 20);
