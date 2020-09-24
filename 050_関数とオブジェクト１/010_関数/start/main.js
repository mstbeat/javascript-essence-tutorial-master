const fn = function fn(...args) {
  console.log(args);
  const a = arguments[0];
  const b = arguments[1];
  console.log(arguments);
  console.log(a, b);
  return a;
}

const fn2 = function fn(a, b) {
  console.log(2);
}

let c = fn(1, 0);
console.log(c);