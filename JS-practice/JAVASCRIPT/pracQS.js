// PRAC-QS.1
// create a number variable num with some value. Now, print "good" if the number is divisible by 10 and print "bad" if it is not.
let num = 20;
if(num % 10 == 0){
    console.log("good");
}
else{
    console.log("bad");
}

//PRAC-QS.2
// take the user's name & age as input using prompts. then  return back the following statement to the user as an alert (by substituting their name & age) : name is age years old..[use template literals to print this sentence]
let name = prompt("please enter your name");
let age = prompt("please enter your age");
alert(`$ {name} is ${age} years old.`);

// PRAC-QS.3
// Write a switch statement to print the months in a quarter.[use the number as the case value in switch]

let quarter =11;
switch(quarter) {
    case 1: console.log("january, february, march");
    break;
    case 2: console.log("april, may, june");
    break;
    case 3: console.log("jult, august, september");
    break;
    case 4: console.log("october, november, december");
    break;
    default:
        console.log("NOT A QUARTER!");
}

// PRACT-QS.4
// A dtring is a golden string if it starts with the character 'A' or 'a' and has a total length greater than 5.[for a given string print if it is golden or not.]
let str = "apples"
if((str[0]) =='a' || start[0] == 'A' && (str.length > 5)){
    console.log("golden string");
}
else{
    console.log("not a golden string");
}

// PRAC-QS.5
// write a program to find the largest of 3 numbers
let a=5;
let b=18;
let c=13;
if(a > b){
    if(s > c){
        console.log(a, "is largest");
    }
    else{
        console.log(c, "is largest");
    }
}
else{
    if(b > c){
        console.log(b, "is largest");
    }
    else{
        console.log(c, "is largest");
    }
}

// PRAC-QS.6
// (BONUS). WRITE A PROGRAM TO CHECK IF 2 NUMBERS HAVE THESAME LAST DIGIT. eg: 32 and 47852 have the same last digit i.e.2
let num1 =32;
let num2 =47852;
if((num1 % 10) == (num2 % 10))
    {
        console.log("numbers have the same last digit which is " , num1%10);
    }
    else{
        console.log("numbers don't have the same last digit");  
    }
    //pracqs.1
    //create a nested array to sow thr following tic-toe game state.
    let game =[['X', null, '0'], [null, 'X', null], ['0', null, 'X'] ];
    