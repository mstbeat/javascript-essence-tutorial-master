function printTypeOfValue(val) {
  console.log(typeof val, val)
}

let a = 0;

printTypeOfValue(a);

let b = parseInt('1') + a;

printTypeOfValue(b);

let c = 15 - b;

printTypeOfValue(c);

let d = c - null;

printTypeOfValue(d);

let e = d - true;

printTypeOfValue(e);