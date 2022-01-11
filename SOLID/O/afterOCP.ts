class VehicalCalculations {
  calculateValue() {}
}

class Car extends VehicalCalculations {
  calculateValue(): void {
    this.getValue() * 0.8;
  }

  getValue(): number {
    return 1;
  }
}

class Bike extends VehicalCalculations {
  calculateValue(): void {
    this.getValue() * 0.5;
  }
  getValue(): number {
    return 2;
  }
}

class Truck extends VehicalCalculations {
  calculateValue(): void {
    this.getValue() * 0.9;
  }
  getValue(): number {
    return 3;
  }
}
