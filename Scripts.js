import { eventoAtual } from "./roteiro.js";

let day = 1;
const gotEnding = [];
const gotInfo = [];

const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const option5 = document.querySelector('#option5');
const option6 = document.querySelector('#option6');

const text = document.querySelector("#mainText");

function introTest() {
    startGame(eventoAtual[0]);
    console.log(eventoAtual[0].update_button.length);
};

function pathA() {
    startGame(eventoAtual[1]);
};

function pathB() {
    startGame(eventoAtual[2]);
};

function pathC() {
    startGame(eventoAtual[3]);
};

function pathD() {
    startGame(eventoAtual[4]);
};


// Começa o jogo
option1.onclick = introTest;

// function atualizaEvento(eventoAtual) {
//     for (let i = 0; i < eventoAtual.update_button.length; i++) {
        
        
//     };
    
// };

function startGame(evento) {
    option2.style.display = "block";
    option3.style.display = "block";
    option4.style.display = "block";
    option1.innerText = evento["button text"][0];
    option2.innerText = evento["button text"][1];
    option3.innerText = evento["button text"][2];
    option4.innerText = evento["button text"][3];
    option1.onclick = evento["update button"][0];
    option2.onclick = evento["update button"][1];
    option3.onclick = evento["update button"][2];
    option4.onclick = evento["update button"][3];
    text.innerText = evento["text"];

    console.log(evento.update_button.length)
};

