const max = prompt("enter the max number");

const random = Math.floor(Math.random() * max) + 1;
// console.log(random);

let guess = prompt("guess the number");
while (true) {
    if (guess == "guit") {
        console.log("user quit");
        break;
    }
    if (guess == random) {
        console.log("you are right!");
        break;
    }
    else if (guess < random) {
        guess = prompt(" hint: your guess was too small. please try again");
    } else {
      guess= prompt(" hint: your guess was too large. please try again");
    }

  
  
    //else{
    //   guess = prompt("your guess was wrong. please try again");   
    //     }
}