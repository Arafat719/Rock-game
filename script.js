const boxes = document.querySelectorAll(".image");

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const com = Math.floor(Math.random() * 10);

function showComSelection() {
    if (com <= 3) {
        comp = "rock"
        console.log(comp);
    } else if(com >= 4 && com <= 6) {
        comp = "paper";
        console.log(comp)
    }else if (com >= 7 && com <= 9) {
        comp = "scissors";
        console.log(comp);
    }
}

let user = "";

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        let idx = index;
        if (idx == 0) {
            user = "rock";
            console.log("user selectec", user)
            showComSelection();
        } else if (idx == 1) {
            user = "paper";
            console.log("user selected", user)
            showComSelection();
        } else {
            user = "scissors";
            console.log("user selected", user)
            showComSelection();
        }
    })
})
