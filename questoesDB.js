// questoesDB.js
const bancoDeQuestoes = {
    "Língua Portuguesa": [
        {
            id: 1,
            enunciado: "Assinale a alternativa em que a regência verbal está correta de acordo com a norma-padrão.",
            opcoes: [
                "A) Assistimos o jogo de futebol no estádio.",
                "B) O médico aspirava o cargo de diretor.",
                "C) Visando o bem-estar de todos, o prefeito assinou o decreto.",
                "D) Obedeci o regulamento rigorosamente.",
                "E) Implicou-se com o atraso do colega."
            ],
            correta: 2, // Índice 2 corresponde à C (0=A, 1=B, 2=C, etc.)
            comentario: "O verbo 'visar' no sentido de 'objetivar' rege a preposição 'a' (visar a algo), mas na linguagem coloquial há variações. Na norma culta moderna, o correto é 'visando ao bem-estar'."
        },
        // Adicione mais questões aqui...
    ],
    "Conhecimentos Gerais": [
        {
            id: 2,
            enunciado: "Qual é o rio principal que banha o município de Rio Branco, no estado do Acre?",
            opcoes: [
                "A) Rio Amazonas",
                "B) Rio Juruá",
                "C) Rio Purus",
                "D) Rio Acre",
                "E) Rio Madeira"
            ],
            correta: 3,
            comentario: "O Rio Acre é o principal rio que corta a cidade de Rio Branco, capital do estado."
        },
        // Adicione mais questões aqui...
    ]
};