const { performance } = require("perf_hooks");

const wait = () => new Promise((resolve) => setTimeout(resolve, 2000));

class FuncClass {
  constructor() {
    this.val = 5;
  }
  func() {
    return this.val;
  }
}

class ArrowClass {
  constructor() {
    this.val = 5;
  }
  arrow = () => this.val;
}

const outterCount = 20;
const count = 100000;

const fc = [];
function funcClassTest() {
  let totalTime = 0;
  let start;
  for (let out = 0; out < outterCount; out++) {
    console.time("funcClass");
    start = performance.now();
    for (let index = 0; index < count; index++) {
      const x = new FuncClass();
      x.func();
      fc.push(x);
    }
    totalTime += performance.now() - start;
    console.timeEnd("funcClass");
  }
  console.log(totalTime);
}

const ac = [];
function arrowClassTest() {
  let totalTime = 0;
  let start;
  for (let out = 0; out < outterCount; out++) {
    console.time("arrowClass");
    start = performance.now();
    for (let index = 0; index < count; index++) {
      const x = new ArrowClass();
      x.arrow();
      ac.push(x);
    }
    totalTime += performance.now() - start;
    console.timeEnd("arrowClass");
  }
  console.log(totalTime);
}

const run = async () => {
  await wait();
  arrowClassTest();

  await wait();
  funcClassTest();
};

run();
