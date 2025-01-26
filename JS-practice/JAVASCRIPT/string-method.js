// let Msg ="      Hello      ";
// let password = prompt(" set your password ");
// let newPass = password.trim();


// console.log(password.trim());
//console.log(newPass); //remove the spaces
// console.log(password); //with space
let name = "Apna college";
let msg = "  iloveCodding  ";
// let msg = "  hello  ";
let newMsg = msg.trim().toUpperCase();
console.log(newMsg);
console.log(msg.slice(0, 6));


// practise question[qs.1]
let Msg = "help!";
console.log(Msg.trim().toUpperCase());
//[qs.2]
let Name = "apna college";

//ASSIGNMENT QUESTIONS
//qs.1
let arr = [7, 9, 0, -2];
let n = 3;
let ans = arr.slice(0, n);
console.log(ans);

//qs.2
let Arr = [7, 9, 0, -2];
let b = 3;
let Ans = arr.slice(arr.length - n);
console.log(Ans);

//qs.3
let str = prompt("please enter a string");
if (str.length == 0) {
        console.log("string is empty");
} else {
        console.log("string is not empty");
}

//qs.4
let Str = "ApNaCoLlEgE";
let ids = 3;
if (Str[ids] == Str[ids].toLowerCase()) {
        console.log("character is lowercase");
} else {
        console.log("character is not lowercase");
}

//qs.5
let STr = prompt("please enter a string");
console.log(`originam string =${Str}`);
console.log(`string without spaces = ${STr.trim()}`);
//qs.6
let ARr =["hello", 'a', 23, 64, 99, -6];
let item =64;
if(ARr.indexOd(item) != -1){
console.log("element exists in array");
} else{
        console.log("element does't exist in array");
}