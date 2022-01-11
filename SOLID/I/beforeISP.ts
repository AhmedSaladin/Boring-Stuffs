/*
As you can see, it does not make sense for a Bike class to implement the openDoors() method as a bike does not have any doors! To fix this,
ISP proposes that the interfaces be broken down into multiple, small cohesive interfaces so that no class is forced to implement any interface,
and therefore methods, that it does not need.
*/

interface Vehicle {
  drive();
  stop();
  refuel();
  openDoors();
}

class Bike implements Vehicle {
  // Can be implemented
  drive() {}
  stop() {}
  refuel() {}

  // Can not be implemented
  openDoors() {}
}
