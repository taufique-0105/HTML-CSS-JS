function hello() {
    console.log("hello");
}
hello();


function printName() {
    console.log("Annu kumari");
}
printName();

//practice qs.1
//Create a function that prints a poem
function printproem() {
    console.log("Twinkle Twinkle, little star");
    console.log("how I Wonder what you are");
}
printproem();

//practice qs.2
//Create a function to roll a dice &nalways display the value of the dice(1 to 6)
function rollDice() {
    let rand = Math.floor(Math.random() * 6) + 1;
    console.log(rand);
}
rollDice();

//functions with arguments
function printInfo(name, age) {
    console.log(`${name}'s age is ${age}.`);
}
printInfo("Annu kumari, 21");

function Sum(a, b) {
    console.log(a + b);
}
Sum(1, 2);
Sum(4, 5);
Sum(7, 8);
//practice qs.3
// create a function that gives us the average of 3 numbers
function calcAvg(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log(avg);
}
calcAvg(2, 4, 6);

//practice qs.4
//Creste a function that prints the multiplication table of a number
function printTable(n) {
    for (let i = n; i <= n * 10; i += n) {
        console.log(i);
    }
}
printTable(5);

//return keywords
function isAdult(age) {
    if (age >= 18) {
        return "adult";
    }
    else {
        return "not adult"
    }
}
isAdult();

//practice qs.5
//Create a function that returns the sum of numbers from 1 to n.
function getSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

//practice qs.6
// Create a function that rturns the concatenation of all strings in an array.
let str = ["hi", "hello", "bye", "!"];
function concat(str) {
    let result;
    for (let i = 0; i < str.length; i++) {
        result += str[i];
    }
    return result;
}

//practice qs.7
//Whazt will be the output
let greet = "hello"; //global scope
function changeGreet() {
    let greet = "namaste"; //function scope
    console.log(greet);
    function innerGreet() {
        console.log(greet); //lexical scope
    }
    innerGreet();
}
console.log(greet);
changeGreet();

//takes one or multiple functions as arguments
function multiplegreet(func, n) { //higher order function
    for (let i = 1; i <= n; i++) {
        func();
    }
}
let Greet = function () {
    console.log("hello");
}
multiplegreet(Greet, 2)


//returns a function
function oddEvenTest(request) {
    if (request == "odd") {
        return function (n) {
            console.log(!(n % 2 == 0));
        }
    }
    else if (request == "even") {
        return function (n) {
            console.log(n % 2 == 0);
        }
    }
    else {
        console.log("wrong request");
    }
}

//methods
const calculator ={
    num: 55,
    add: function(a, b){
        return a+b;
    },
    sub: function(a, b){
        return a-b;
    },
    mul: function(a, b){
        return a*b;
    }
};