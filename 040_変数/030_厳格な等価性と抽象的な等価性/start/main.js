function pringEquality(a, b){
  console.log(a === b);
  
  console.log(a == b);
  
}

let a = '1';
let b = 1;

let c = true;

console.log(c === Boolean(b));
pringEquality(b, c);

let e = "";
let f = 0;
pringEquality(e, f);

let g = null;
let h;
pringEquality(g, h);