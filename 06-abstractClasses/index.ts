interface IFigure {
    name: string
    color: string
}

abstract class BaseFigure implements IFigure {
    constructor(public readonly name: string, public readonly color: string) {}

    abstract calculateArea(data1: number, data2?: number): number
}

class Circle extends BaseFigure {
    public calculateArea(radius: number): number {
        return Math.PI * Math.pow(radius, 2);
    }
}

class Triangle extends BaseFigure {
    public calculateArea(base: number, height: number): number {
        return (base * height) / 2;
    }
}

class Rectangle extends BaseFigure {
    public calculateArea(length: number, width: number): number {
        return length * width;
    }

    public print(): string {
        return "formula area of a rectangle it's length * width"
    }
}

class Square extends BaseFigure {
    public calculateArea(side: number): number {
        return side * side
    }

    public print(): string {
        return "square area formula it's side * side"
    }
}







