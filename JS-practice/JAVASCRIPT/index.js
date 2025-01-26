console.log("hello world");
console.log("hello annu");
let A = 10;
let B = 5;
console.log("sum is:", A + B);


let pencilPrice = 10;
let erasorPrice = 5;
// let output ="The  total price is :"+ (pencilPrice + erasorPrice) +"rupees."
// let output= `the total price is: ${pencilPrice + erasorPrice} rupees.`;
// console.log(output);

console.log(`the total price is: ${pencilPrice + erasorPrice} rupees.`)


//arithmetic operations
let a = 10;
let b = 5;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a % b);
console.log(a / b);
console.log(a ** b);


//unary operators
console.log(a++); //10
console.log(++a); //12
console.log(a--); //12
console.log(--a); //10

//assignment opeartors
console.log(b);


//comarison operators
let Age = 18;
console.log(Age > 18); //false
console.log(Age >= 18); //true
console.log(Age < 18); //false
console.log(Age <= 18); //true
console.log(Age == 18); //true
console.log(Age != 18); //false


//CONDITIONAL STATEMENT
//IF STtement
console.log("before my if statement");
let AGE = 23;
if (AGE >= 18) {
    console.log("you can vote");
    console.log("you can drive");
    let a = 5;
    console.log(5 * a);
}
if (AGE > 20) {
    console.log("you are in your 20s");
}
console.log("after my if statement");
let firstName = "annu";
if (firstName == "annu") {
    console.log('welcome annu');
}

//practice qs
//trafic light system
let color = "red";
if (color == "red") {
    console.log("stop! light color is red");
}
if (color == "yellow") {
    console.log("slow down light color is yellow");
}
if (color == "green") {
    console.log("let's go light color is green");
}

//ELSE IF STATEMENT
let marks = 75;
if (marks >= 80) {
    console.log("A+");
}
else if (marks >= 60) {
    console.log("A");
}
else if (marks >= 33) {
    console.log("B");
}
else if (marks < 33) {
    console.log("F");
}

let month = "january";
if (month === "january") {
    console.log("winter is here");
}
else if (month === "april") {
    console.log("summer is here");
}

//else statement
let age = 18;
if (age >= 18) {
    console.log("you can vote");
} else {
    console.log("you cannot vote");
}
let size = "m";
if (size === "xl") {
    console.log("price is 250");
}
else if (size === "l") {
    console.log("price is 200");
}
else if (size === "m") {
    console.log("price is 100");
}
else {
    console.log("price is 50");
}

//nexted-if-else statement
let Marks = 45;
if (Marks >= 33) {
    console.log("pass");
    if (Marks >= 80) {
        console.log("grade:O");
    }
    else {
        console.log("grade:A");
    }
} else {
    console.log("better luck next time!");
}

// practice qs.1
let str = "apple";
if ((str[0] === 'a') && (str.length > 3)) {
    console.log("good string");
} else {
    console.log("not a good string");
}


//practice qs.2
let num = 12;
if ((num % 3 === 0) && ((num + 1 == 15) || (num - 1 == 11))) {
    console.log("safe");
}
else {
    console.log("unsafe");
}

//switch statement
let Color = "red";
switch (color) {
    case "red":
        console.log("stop");
        break;
    case "yellow":
        console.log("slow down");
        break;
    case "green":
        console.log("go");
        break;
    default:
        console.log("Broken light");
}

// practice qs.3
// use switch statement to print the day of the week using a number variable 'day with values 1 to 7.
let day = "1";
switch (day) {
    case "1":
        console.log("monday");
        break;
    case "2":
        console.log("tuesday");
        break;
    case "3":
        console.log("wednesday");
        break;
    case "4":
        console.log("thursday");
        break;
    case "5":
        console.log("friday");
        break;
    case "6":
        console.log("saturday");
        break;
    case "7":
        console.log("sunday");
    default:
        console.log("wrong day");
}

alert("something is wrong");
console.log("this is a simple log");
console.error("this is an error msg");
console.warn("this is a warring")
// prompt("enter your name");
let roll = prompt("enter your roll : ");
console.log("roll");
let FirstName = prompt("enter first name");
let lastName = prompt("enter last name");
console.log(FirstName, " ", lastName);
let msg = "wecome"+ FIrstname+ lastName, "!";
