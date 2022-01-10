console.log("start");

console.time("callback");
setTimeout(() => {
  console.log("timeout callback executed");
  console.timeEnd("callback");
}, 2000);

console.log("end");
