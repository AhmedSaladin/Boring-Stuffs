interface EngineInterface {
  start();
}

class Car {
  private engine: EngineInterface;
  constructor(e: EngineInterface) {
    this.engine = e;
  }
  start() {
    this.engine.start();
  }
}

class Engine {
  start() {
    console.log("it work");
  }
}
