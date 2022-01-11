/*
 We have a Car class that depends on the concrete Engine class; therefore, it is not obeying DIP.
 The code will work, for now, but what if we wanted to add another engine type, let’s say a diesel engine? This will require refactoring the Car class.
 */

class Car {
  private engine: Engine;
  constructor(e: Engine) {
    this.engine = e;
  }
  start() {
    this.engine.start();
  }
}

class Engine {
  start() {}
}
