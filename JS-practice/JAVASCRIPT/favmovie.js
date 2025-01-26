//favorite movie
const favMovie ="avatar";
let guess = prompt("guess my favorite movie");
while((guess!=favMovie) && (guess!="guit")){

guess = prompt(" wrong guess. please try again");
}
if(guess == favMovie){
    console.log("congrats!");
}else{
    console.log(quit);
}

//break keyword
let i=1;
while(i<=5){
    if(i==3){
        break;
    }
    console.log(i);
    i++;
}
console.log("we used break at 3");

//loops with arrays
let fruits =["mango", "apple", "banana", "litch", "orange"];
fruits.push("pineapple");
// for(let i=0; i<fruits.length; i++){
    for(let i=1; i<fruits.length; i=1+2){
        // for(let i=0; i<fruits.length; i=i+2){
    console.log(i, fruits[i]);
}

//nested loops with nested arrays
let heroes=[
    ["ironman", "spiderman", "thor"],["superman", "wonder woman", "flash"]
]
for(let i=0; i<heroes.length; i++)
    console.log(i, heroes[i], heroes[i].length);
for(let j=0; j<heroes[i].length; j++ ){
    console.log(`j=${j}, ${heroes[i][j]}`)
}

//for of loop
let Fruits =["mango", "apple", "banana", "litch", "orange"];
for(fruit of fruits){
    console.log(fruits);
}

