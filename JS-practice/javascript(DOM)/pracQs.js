//Qs.1
let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Click me";
document.querySelector("body").append(input);
document.querySelector("body").append(button);

//Qs.2
button.setAttribute("id", "btn");
input.setAttribute("placeholder", "username");

//Qs.3
let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

//Qs.4
let h1 = document.createElement("h1");
h1.innerHtml = "<ul>DOM Practice</ul>";
document.querySelector("body").append(h1);

//Qs.5
let P = document.createElement("p");
P.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(P);