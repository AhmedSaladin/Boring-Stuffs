/*
Suppose we now want to add another subclass called Truck.
We would have to modify the above class by adding another if statement, which goes against the Open-Closed Principle.
*/

interface Vehicle {
  getValue();
}

class Car implements Vehicle {
  getValue(): number {
    return 1;
  }
}
class Bike implements Vehicle {
  getValue(): number {
    return 2;
  }
}

class VehicalCalculations {
  calculateValue(vehicle: Vehicle) {
    if (vehicle instanceof Car) return vehicle.getValue() * 0.8;
    if (vehicle instanceof Bike) return vehicle.getValue() * 0.5;
  }
}
