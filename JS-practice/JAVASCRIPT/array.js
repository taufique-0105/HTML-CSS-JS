// let student1 ="riya";
// let student2 ="annu";
// let student3 ="rani"

// let students =["riya", "annu", "rani"];
// let nums =[2,4,6,8];
// let name ="annu";

// let cars=["audi", "bmw", "motors", "maruti"];

let months =["january", "july", "march", "august"];

for(let i=1; i<=10; i++){
    console.log(i);
}
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");

for(let i=4; i>=1; i--){
    console.log(i);
}

for(let i=10; i>=1; i= i-3){
    console.log(i);
}
//odd numbers
for(let i=1; i<=15; i=i+2){
console.log(i);
}

// for(let i=15; i>=1; i=i-2){
//     console.log(i);
//     }

//even numbers
for(let i=2; i<=10; i=i+2){
    console.log(i);
}

//multiplication table for 5
let n=prompt("write your number");
n= parseInt(n);
for(let i=n; i<=n*10; i=i+n){
    console.log(i);
}

for(let i=5; i<=50; i=i+5){
    console.log(i);
}

//nexted loop
for(let i=1; i<=3; i++){
    console.log(`outer loop ${i}`);
    for(let j=1; j<=3; j++){
        console.log(j);
    }
}

//while loop
// 8

let i=0;
while(i<=20){
    console.log(i);
    i++;
}

