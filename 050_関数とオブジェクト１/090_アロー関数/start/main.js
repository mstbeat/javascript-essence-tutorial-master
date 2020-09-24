function a(name) {
  return 'hello ' + name;
}

const b = (name, name2) => {
  return 'hello ' + name + ' and ' + name2;
}

console.log(b('Tom', 'Bob'));