const boxes = document.querySelectorAll(".image");

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const win = document.querySelector(".win");

const  userCore = document.querySelector(".userCore");
const  compCore = document.querySelector(".compCore");

const mess = document.querySelector(".mess p")

let coreUser = 0;
let coreComp = 0;

let comp = "";

function showComSelection() {
const com = Math.floor(Math.random() * 10);
    if (com <= 3) {
        comp = "rock";
    } else if(com >= 4 && com <= 6) {
        comp = "paper";
    }else if (com >= 7 && com <= 9) {
        comp = "scissors";
    }
}

let user = "";

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        let idx = index;
        if (idx == 0) {
            user = "rock";
            showComSelection();
        } else if (idx == 1) {
            user = "paper";
            showComSelection();
        } else {
            user = "scissors";
            showComSelection();
        }
        if (user == "rock" && comp == "rock") {
            win.innerText = "match was draw";
            mess.innerText = "the computer has taked rock";
        } else if (user == "rock" && comp == "paper") {
            win.innerText = "computer win";
            mess.innerText = "the computer has taked paper";
            coreComp++;
            compCore.innerText = `${coreComp}`;
        } else if (user == "rock" && comp == "scissors") {
            win.innerText = "congratulations you win";
            mess.innerText = "the computer has taked scissors";
            coreUser++;
            userCore.innerText = `${coreUser}`;
        } else if (user == "paper" && comp == "rock") {
            win.innerText = "congratulations you win";
            mess.innerText = "the computer has taked rock";
            coreUser++;
            userCore.innerText = `${coreUser}`;
        } else if (user == "paper" && comp == "paper") {
            win.innerText = "match was draw";
            mess.innerText = "the computer has taked paper";
        } else if (user == "paper" && comp == "scissors") {
            win.innerText = "computer win";
            mess.innerText = "the computer has taked scissors";
            coreComp++;
            compCore.innerText = `${coreComp}`;
        } else if (user == "scissors" && comp == "rock") {
            win.innerText = "conputer win";
            mess.innerText = "the computer has taked rock";
            coreComp++;
            compCore.innerText = `${coreComp}`;
        } else if (user == "scissors" && comp == "paper") {
            win.innerText = "congratulation you win";
            mess.innerText = "the computer has taked paper";
            coreUser++;
            userCore.innerText = `${coreUser}`;
        } else if (user == "scissors" && comp == "scissors") {
            win.innerText = "match was draw";
            mess.innerText = "the computer has taked scissors";
        }
    })
})