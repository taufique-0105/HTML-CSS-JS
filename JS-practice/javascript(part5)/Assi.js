//Qs.1
let nums =[1, 2, 3, 4, 5];
const square = nums.map((num) => num*num);
console.log(square);
let sum = square.reduce((acc, cur) => acc+cur, 0);
let avg = sum / nums.length;
console.log(avg);

//Qs.2
let numbers = [2, 4, 6, 8, -2, -4];
console.log(numbers.map((number) => number + 5));

//Qs.3
let strings = ["adam", "bob", "catlyn", "donald", "eve"];
console.log(strings.map((string) => string.toUpperCase()));

//Qs.4
const doubleAndReturnAge = (arr, ...args) =>[...arr, ...args.map((v) => v * 2),
    ];
    doubleAndReturnAge([1, 2, 3]); //[1,2,3,8,8]
    doubleAndReturnAge([2], 10, 4);  //[2,20,8]

    //Qs.5
    const mergeObjects = (obj1, obj2) => ({ ...obj1, ...obj2});
    mergeObjects({a:1, b:2}, {c:3, d:4});