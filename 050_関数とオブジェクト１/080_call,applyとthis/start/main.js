function a(name, name2) {
    console.log('hello ' + name + ' and ' + name2);
}

const tim = {name: 'Tim'};

const b = a.bind(tim);

b();

a.apply(tim, ['Tim', 'Bob']);

a.call(tim, 'Tim', 'Bob');

const arry = [1, 2, 3, 4, 5];

// const result = Math.max.apply(null, arry);
const result = Math.max(...arry);
console.log(result);