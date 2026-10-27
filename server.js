const express = require('express');
const cors = require('cors');
const path = require('path');
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
app.use(cors());
app.use(express.json());

// Configura o servidor para servir o arquivo HTML principal (index.html) na raiz
app.use(express.static(path.join(__dirname)));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Pega a chave da IA de forma segura do ambiente do Render
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

app.post('/api/gerar-questoes', async (req, res) => {
    try {
        const { concurso, disciplina, quantidade, historicoTemas } = req.body;
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

        const prompt = `
        Aja como um examinador de concursos públicos da banca ${concurso}.
        Gere ${quantidade} questões INÉDITAS de múltipla escolha sobre ${disciplina}.
        REGRA VITAL PARA NÃO REPETIR: Não aborde os seguintes temas que já foram cobrados no histórico do aluno: ${historicoTemas.join(', ')}.
        
        Retorne ESTRITAMENTE um array JSON com esta exata estrutura para cada questão, sem markdown, sem crases:
        [
          {
            "id": ${Math.floor(Math.random() * 10000)},
            "disciplineName": "${disciplina}",
            "question": "O texto do enunciado da questão aqui",
            "options": ["Alternativa A", "Alternativa B", "Alternativa C", "Alternativa D", "Alternativa E"],
            "correct": 0,
            "explanation": "Explicação detalhada do gabarito"
          }
        ]
        `;

        const result = await model.generateContent(prompt);
        const responseText = result.response.text();
        const cleanJson = responseText.replace(/```json/gi, '').replace(/```/g, '').trim();
        const questoes = JSON.parse(cleanJson);

        res.json(questoes);
    } catch (error) {
        console.error("Erro ao gerar questões:", error);
        res.status(500).json({ error: "Falha na geração com IA" });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT} 🚀`);
});