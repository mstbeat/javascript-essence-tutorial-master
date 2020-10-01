const targetObj = { a: 0 };
const handler = {
  set: function(target, prop, value, receiver) {
    console.log(`[set]: ${prop}`);
    // target[prop] = value;
    throw new Error('cannot add prop.');
  },
  get: function(target, prop, receiver) {
    console.log(receiver);
    if(targetObj.hasOwnProperty(prop)) {
      return target[prop];
    } else {
      return '-1';
    }
    console.log(`[get]: ${prop}`);
  },
  deleteProperty: function(target, prop, receiver) {
    console.log(`[delete]: ${prop}`);
    delete target[prop];
  }
}
const pxy = new Proxy(targetObj, handler);
// pxy.a = 1;
console.log(pxy.b);;
delete pxy.a;