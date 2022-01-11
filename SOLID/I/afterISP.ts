interface Vehicle {
  drive();
  stop();
}

interface Refuel {
  refuel();
}

interface Doors {
  openDoors();
  closeDoors();
}

class Bike implements Vehicle {
  drive() {}
  stop() {}
}

class Car implements Vehicle, Refuel, Doors {
  drive() {}
  stop() {}
  refuel() {}
  openDoors() {}
  closeDoors() {}
}
