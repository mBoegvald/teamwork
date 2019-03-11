document.addEventListener("DOMContentLoaded", init);

let box = document.querySelector(".box");

function init() {
   
    box.addEventListener("click", clickBox);

}

function clickBox() {
    console.log("hej");
    box.style.backgroundColor = "blue";

}