//sources to use
let buttons = document.querySelectorAll("button");
let gamestatus = document.querySelector("#game_status");

let player1 = "X";

let player2 = "O";
//console.log(buttons);


let Gamecheck;
let count = 1;


buttons.forEach(element => {
    element.addEventListener("click", () => {

        if (element.textContent == "") {
            if (count == 1) {
                element.textContent = player1;
                element.style.color = "red";
                gamestatus.textContent = "Joueur O c'est votre tour.";
                gamestatus.style.backgroundColor = "#34cfeb";
                count++;
            } else {
                element.style.color = "#34b1eb";
                element.textContent = player2;
                gamestatus.textContent = "Joueur X c'est votre tour."
                gamestatus.style.backgroundColor = "#eb3480";
                count--;
            }
        }





        //tetsting horizontally
        if (buttons[0].textContent == buttons[1].textContent && buttons[1].textContent == buttons[2].textContent) {
            Gamecheck = buttons[2].textContent + " win";
            console.log(buttons[2].textContent + " win");
            gameover();
        } else if (buttons[3].textContent == buttons[4].textContent && buttons[4].textContent == buttons[5].textContent) {
            Gamecheck = buttons[5].textContent + " win";
            gameover();
        } else if (buttons[6].textContent == buttons[7].textContent && buttons[7].textContent == buttons[8].textContent) {
            Gamecheck = buttons[8].textContent + " win";
            gameover();
        }
        //tetsting verticlay
        else if (buttons[0].textContent == buttons[3].textContent && buttons[3].textContent == buttons[6].textContent) {
            Gamecheck = buttons[6].textContent + " win";
            gameover();
        } else if (buttons[1].textContent == buttons[4].textContent && buttons[4].textContent == buttons[7].textContent) {
            Gamecheck = buttons[7].textContent + " win";
            gameover();
        } else if (buttons[2].textContent == buttons[5].textContent && buttons[5].textContent == buttons[8].textContent) {
            Gamecheck = buttons[8].textContent + " win";
            gameover();
        }
        //testing jagunbal
        else if (buttons[0].textContent == buttons[4].textContent && buttons[4].textContent == buttons[8].textContent) {
            Gamecheck = buttons[8].textContent + " win";
            gameover();
        } else if (buttons[2].textContent == buttons[4].textContent && buttons[4].textContent == buttons[6].textContent) {
            Gamecheck = buttons[6].textContent + " win";
            gameover();
        }
    })
});

function gameover() {
    setTimeout(() => {
        if (Gamecheck == "X win") {
            alert("x win")
            window.location.href = "index.html";
        } else if (Gamecheck == "O win") {
            alert("o win")
            window.location.href = "index.html";
        }  
    }, 200);
}