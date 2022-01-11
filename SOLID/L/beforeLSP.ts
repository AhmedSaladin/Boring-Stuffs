/*
The below classes do not obey LSP because you cannot replace the Rectangle base class with its derived class Square.
The Square class has extra constraints, i.e., the height and width must be the same.
Therefore, substituting Rectangle with Square class may result in unexpected behavior.
*/

class Rectangle {
  constructor(private width: number, private length: number) {}

  public setWidth(width: number) {
    this.width = width;
  }

  public setLength(length: number) {
    this.length = length;
  }

  public getArea() {
    return this.width * this.length;
  }
}

class Square extends Rectangle {
  constructor(side: number) {
    super(side, side);
  }

  public setWidth(width: number) {
    // A square must maintain equal sides
    super.setWidth(width);
    super.setLength(width);
  }

  public setLength(length: number) {
    super.setWidth(length);
    super.setLength(length);
  }
}
