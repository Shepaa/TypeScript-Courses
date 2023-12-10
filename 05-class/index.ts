class Circle {
    constructor(private name: string, private color: string) {}

    public calculateArea(radius: number): number {
        return Math.PI * Math.pow(radius, 2);
    }
}

class Rectangle {
    constructor(private name: string, private color: string) {}

    public calculateArea(length: number, width: number): number {
        return length * width;
    }

    public print(): string {
        return "formula area of a rectangle it's length * width"
    }
}

class Square {
    constructor(private name: string, private color: string) {}

    public calculateArea(side: number): number {
        return side * side
    }

    public print(): string {
        return "square area formula it's side * side"
    }
}

class Triangle {
    constructor(private name: string, private color: string) {}

    public calculateArea(base: number, height: number): number {
        return (base * height) / 2;
    }
}

const circle = new Circle("My circle", "Red")
console.log(circle.calculateArea(40));
const rectangle = new Rectangle("MY Rectangle", "White")
console.log(rectangle.calculateArea(5, 5));
console.log(rectangle.print());
const square = new Square("My Square", "Yellow")
console.log(square.calculateArea(5));
console.log(square.print());
const triangle = new Triangle("My Triangle", "Blue")
triangle.calculateArea(20, 20)



