interface Shape {
  getArea: () => number;
}

interface RectangleInterface extends Shape {
  width: number;
  length: number;
}

interface SquareInterface extends Shape {
  sides: number;
}

class Rectangle implements RectangleInterface {
  width: number;
  length: number;
  constructor(width: number, length: number) {
    this.width = width;
    this.length = length;
  }

  getArea() {
    return this.width * this.length;
  }
}

class Square implements SquareInterface {
  sides: number;
  constructor(sides: number) {
    this.sides = sides;
  }

  getArea() {
    return this.sides * 4;
  }
}
