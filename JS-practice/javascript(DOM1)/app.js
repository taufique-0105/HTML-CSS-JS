let btn = document.querySelector("button");
console.dir(btn);

btn.onclick = function(){
    console.log("button was clicked");
};

let btns = document.querySelectorAll("button");
for(btn of btns){
    btn.onclick = sayHello;
}
function sayHello(){
    alert("hello")
}