let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
if(started == false){
    console.log("game is started");
    started = true;
levelUp();
}
});

function gameFlash(btn){    //white color
    btn.classList.add("flash");
setTimeout(function () {
btn.classList.remove("flash");
}, 250);
}

function userFlash(btn){    //color change
    btn.classList.add("userflash");
setTimeout(function () {
btn.classList.remove("userflash");
}, 250);
}

function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;

    //random btn choose
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx){
    // console.log("curr level:", level);
    // let idx = level-1;
   if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        //  levelUp();   
        }
    } else{
    //  h2.innerText =`Game Over! Press any key to start.`; 
    h2.innerHTML =`Game Over! your score was <b>${level}</b> <br> Press any key to start.`; 
    document.querySelector("body").style.backgroundcolor = "red";
    setTimeout(function(){
        document.querySelector("body").style.backgroundcolor = "White";
    }, 150);
     reset();
    }
}

function btnPress() {
    // console.log("this");
    let btn= this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
   userSeq.push(userColor);

   checkAns(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}