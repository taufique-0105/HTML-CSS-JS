//this keywords
const Student ={
    name: "annu",
    age:21,
    eng:75,
    math:80,
    chem:95,
    getAvg() {
        let avg =(this.eng + this.math + this.chem) /3;
        console.log(avg);
    }
}


//try & catch
let a=5;
try{
    console.log(a);
} catch{
    console.log("caught an error.. a is not defined");
}


//Arrow functions
const sum =(a, b) =>{
    console.log(a+b);
};
const cube =(n) =>{
    return n*n*n;
}


//implicit return
const mul =(a, b) => a*b;


//set timeout
console.log("hi there!");
setTimeout( () => {
    console.log("Apna college");
}, 4000);
console.log("Welcome to");


//set interval
let id = setInterval( () => {
    console.log("Apna college");
}, 2000);

console.log(id)

let id2 = setInterval( () => {
    console.log("helo");
}, 3000);

console.log(id2)
clearInterval(id);


//this with arrow functions
const student ={
    Name: "Annukumari",
    Marks: 95,
    prop: this,  //global scope
    getName: function(){
        console.log(this);
        return this.name;
    },
    getMarks: () => {
        console.log(this);  //parent's scope -> window
        return this.marks;
    },
};


//PracQs.1  [Write an arrow function that returns the square of a number 'n'.]
const square=(n) =>n*n;
console.log (square(4));

//PracQs.2 [Write a function that prints "hello world" 5 times at intervals of 2s each.]
let id3 = setInterval(()=>{
    console.log("hello world");
}, 2000);

setTimeout(() =>{
    clearInterval(id);
}, 10000);