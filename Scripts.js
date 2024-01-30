// import * as arcOne from './roteiro.js' ;
// import { eventoAtual, atualizaEvento, introTest, pathA, pathB, pathC, pathD } from './roteiro.js';

let day = 1;
const buttonIds = ['#option1', '#option2', '#option3', '#option4', '#option5', '#option6'];
const gotEnding = [];
const gotInfo = [];
const buttons = [];

for (const buttonId of buttonIds) {
    const button = document.querySelector(buttonId);
    buttons.push(button);
};

const allButtons = document.querySelectorAll('.optionBtn');

const text = document.querySelector('#mainText');

const eventoAtual = [
    {
        nome: 'Intro',
        text: 'Você é basicamento o super-homem. Você consegue ver vários problemas no mundo e tem o poder para resolvê-los. Qual é a primera coisa que você quer fazer?',
        'button text': ['Ir atrás de criminosos', 'Não mostrar seus poderes publicamente', 'Voar direto para Brasília (Capital do país)', 'Procurar cientistas que podem ajudar a entender melhor seus poderes.'],
        update_button: [pathA, pathB, pathC, pathD]
    },
    {
        nome: 'test_pathA',
        text: 'Teste do caminho A: Ir atrás de criminosos',
        'button text': ['Voltar ao início', 'Não mostrar seus poderes publicamente', 'Voar direto para Brasília (Capital do país)', 'Procurar cientistas que podem ajudar a entender melhor seus poderes.'],
        update_button: [introTest, pathB, pathC, pathD]
    },
    {
        nome: 'test_pathB',
        text: 'Teste do caminho B: Não mostrar seus poderes publicamente',
        'button text': ['Voltar ao início', 'Ir atrás de criminosos', 'Voar direto para Brasília (Capital do país)', 'Procurar cientistas que podem ajudar a entender melhor seus poderes.'],
        update_button: [introTest, pathA, pathC, pathD]
    },
    {
        nome: 'test_pathC',
        text: 'Teste do caminho C: Voar direto para Brasília (Capital do país)',
        'button text': ['Voltar ao início', 'Não mostrar seus poderes publicamente', 'Ir atrás de criminosos', 'Procurar cientistas que podem ajudar a entender melhor seus poderes.'],
        update_button: [introTest, pathB, pathA, pathD]
    },
    {
        nome: 'test_pathD',
        text: 'Teste do caminho D: Procurar cientistas que podem ajudar a entender melhor seus poderes.',
        'button text': ['Voltar ao início', 'Não mostrar seus poderes publicamente', 'Voar direto para Brasília (Capital do país)', 'Ir atrás de criminosos'],
        update_button: [introTest, pathB, pathC, pathA]
    }
];

const caminhoA = [
    {
        nome: 'Usar Poderes',
        text: 'Você decide usar seus poderes para ir atrás de criminosos.',
        'button text': ['Voltar às anteriores', 'Procurar pelas partes mais violentas da cidade.', 'Ir atrás de alvos específicos'],
        update_button: [introTest, pathPatrulha, pathAlvos]
    },
    {
        nome: 'Patrulha',
        text: 'Você voa pelas partes consideradas mais perigosas da cidade em busca de criminosos. Não demora muito e você encontra o que parecem ser traficantes armados vendendo drogas. *Você pode escolher mais de uma opção, mas tome cuidado com a ordem das escolhas.',
        'button text': ['Voltar às opções anteriores', 'Destruir armas', 'incapacitá-los temporariamente', 'Eliminá-los', 'Chamar polícia', 'Interrogá-los'],
        update_button: [introTest, introTest, introTest, introTest, introTest, introTest]
    },
    {
        nome: 'Alvos prontos',
        text: 'Você já sabe quem você está procurando...',
        'button text': ['Voltar às opções anteriores', 'Desmantelar organização criminosa de traficantes', 'Ir atrás "daqueles" Fascistas', 'Ir atrás dos Comunistas degenerados', 'Voar para Brasília, destruindo todos os políticos no caminho'],
        update_button: [introTest, introTest, introTest, introTest, introTest]
    },
];

function atualizaEvento(evento) {
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].style.display = 'none';
    };
    
    for (let i = 0; i < evento['update_button'].length; i++) {
        buttons[i].style.display = 'block';
        buttons[i].innerText = evento['button text'][i];
        buttons[i].onclick = () => evento['update_button'][i]();
        text.innerText = evento['text'];
    };
};

function introTest() {
    atualizaEvento(eventoAtual[0]);
};

function pathA() {
    atualizaEvento(caminhoA[0]);
};

function pathPatrulha() {
    atualizaEvento(caminhoA[1]);
};

function pathAlvos() {
    atualizaEvento(caminhoA[2]);
};

function pathB() {
    atualizaEvento(eventoAtual[2]);
};

function pathC() {
    atualizaEvento(eventoAtual[3]);
};
function pathD() {
    atualizaEvento(eventoAtual[4]);
};

    // Começa o jogo
    buttons[0].onclick = introTest;