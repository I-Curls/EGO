export const eventoAtual = [
    {
        nome: "Intro",
        text: "Você é basicamento o super-homem. Você consegue ver vários problemas no mundo e tem o poder para resolvê-los. Qual é a primera coisa que você quer fazer?",
        "button text": ["Ir atrás de criminosos", "Não mostrar seus poderes publicamente", "Voar direto para Brasília (Capital do país)", "Procurar cientistas que podem ajudar a entender melhor seus poderes."],
        "update button": [pathA, pathB, pathC, pathD]
    },
    {
        nome: "test_pathA",
        text: "Teste do caminho A: Ir atrás de criminosos",
        "button text": ["Voltar ao início", "Não mostrar seus poderes publicamente", "Voar direto para Brasília (Capital do país)", "Procurar cientistas que podem ajudar a entender melhor seus poderes."],
        "update button": [introTest, pathB, pathC, pathD]
    },
    {
        nome: "test_pathB",
        text: "Teste do caminho B: Não mostrar seus poderes publicamente",
        "button text": ["Voltar ao início", "Ir atrás de criminosos", "Voar direto para Brasília (Capital do país)", "Procurar cientistas que podem ajudar a entender melhor seus poderes."],
        "update button": [introTest, pathA, pathC, pathD]
    },
    {
        nome: "test_pathC",
        text: "Teste do caminho C: Voar direto para Brasília (Capital do país)",
        "button text": ["Voltar ao início", "Não mostrar seus poderes publicamente", "Ir atrás de criminosos", "Procurar cientistas que podem ajudar a entender melhor seus poderes."],
        "update button": [introTest, pathB, pathA, pathD]
    },
    {
        nome: "test_pathD",
        text: "Teste do caminho D: Procurar cientistas que podem ajudar a entender melhor seus poderes.",
        "button text": ["Voltar ao início", "Não mostrar seus poderes publicamente", "Voar direto para Brasília (Capital do país)", "Ir atrás de criminosos"],
        "update button": [introTest, pathB, pathC, pathA]
    }
];

const endings = [
    { name: "Ditador", final: "final 1 de 5" },
    { name: "Pacifista", final: "final 2 de 5" },
    { name: "Limpeza Étnica", final: "final 3 de 5" },
    { name: '"Democracia"', final: "final 4 de 5" },
    { name: "Democracia!", final: "final 5 de 5" },
];
