const text = document.querySelector('#mainText');
export const eventoAtual = [
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

export const caminhoA = [
    {
        nome: 'Usar Poderes',
        text: 'Você decide usar seus poderes para ir atrás de criminosos.',
        'button text': ['Voltar às anteriores', 'Procurar pelas partes mais violentas da cidade.', 'Ir atrás de alvos específicos'],
        update_button: [pathA, pathA, pathA]
    },
    {
        nome: 'Patrulha',
        text: 'Você voa pelas partes consideradas mais perigosas da cidade em busca de criminosos. Não demora muito e você encontra o que parecem ser traficantes armados vendendo drogas. *Você pode escolher mais de uma opção, mas tome cuidado com a ordem das escolhas.',
        'button text': ['Voltar às opções anteriores', 'Destruir armas', 'incapacitá-los temporariamente', 'Eliminá-los', 'Chamar polícia', 'Interrogá-los'],
        update_button: [pathA, pathA, pathA, pathA, pathA, pathA]
    },
    {
        nome: 'Alvos prontos',
        text: 'Você já sabe quem você está procurando...',
        'button text': ['Voltar às opções anteriores', 'Desmantelar organização criminosa de traficantes', 'Ir atrás "daqueles" Fascistas', 'Ir atrás dos Comunistas degenerados', 'Voar para Brasília, destruindo todos os políticos no caminho'],
        update_button: [pathA, pathA, pathA, pathA, pathA]
    },
    // {
    //     nome: '',
    //     text: '',
    //     'button text': ['', '', ''],
    //     update_button: [pathA, pathA, pathA, pathA]
    // },
];

export function atualizaEvento(evento) {
    allButtons.style.display = 'none';
    for (let i = 0; i < evento['update_button'].length; i++) {
        buttons[i].style.display = 'block';
        buttons[i].innerText = evento['button text'][i];
        buttons[i].onclick = () => evento['update_button'][i]();
        text.innerText = evento['text'];
    };
};

// export function startGame(evento) {
//     option2.style.display = 'block';
//     option3.style.display = 'block';
//     option4.style.display = 'block';
//     option1.innerText = evento['button text'][0];
//     option2.innerText = evento['button text'][1];
//     option3.innerText = evento['button text'][2];
//     option4.innerText = evento['button text'][3];
//     option1.onclick = () => evento['update_button'][0]();
//     option2.onclick = () => evento['update_button'][1]();
//     option3.onclick = () => evento['update_button'][2]();
//     option4.onclick = () => evento['update_button'][3]();
//     text.innerText = evento['text'];

//     console.log(evento['update_button'].length);
// };


// export function introTest() {
//     startGame(eventoAtual[0]);
// };

// export function pathA() {
//     startGame(eventoAtual[1]);
// };

// export function pathB() {
//     startGame(eventoAtual[2]);
// };

// export function pathC() {
//     startGame(eventoAtual[3]);
// };

// export function pathD() {
//     startGame(eventoAtual[4]);
// };

export function introTest() {
    atualizaEvento(eventoAtual[0]);
};

export function pathA() {
    atualizaEvento(eventoAtual[1]);
};

export function pathB() {
    atualizaEvento(eventoAtual[2]);
};

export function pathC() {
    atualizaEvento(eventoAtual[3]);
};

export function pathD() {
    atualizaEvento(eventoAtual[4]);
};

const endings = [
    { name: 'Ditador', final: 'final 1 de 5' },
    { name: 'Pacifista', final: 'final 2 de 5' },
    { name: 'Limpeza Étnica', final: 'final 3 de 5' },
    { name: '"Democracia"', final: 'final 4 de 5' },
    { name: 'Democracia!', final: 'final 5 de 5' },
];

// export * from './roteiro.js';