// Simulado Polícia Rodoviária Federal (PRF) — questões originais de treino (não são cópias de provas oficiais).
// Confira sempre a legislação vigente antes de estudar. "correta": 0 = A, 1 = B, 2 = C, 3 = D, 4 = E.
// Faixas de id por disciplina (questões novas): Português 1001+, RL 2001+, Informática 3001+, Física 4001+,
// Trânsito 5001+, Constitucional 6001+, Penal 7001+, Processo Penal 8001+, Administrativo 9001+, Direitos Humanos 10001+.
registrarConcurso("PRF", {
    "title": "Polícia Rodoviária Federal (PRF)",
    "banca": "Cebraspe",
    "emoji": "🚓",
    "tempo": 240,
    "estrutura": [
        {
            "nome": "Língua Portuguesa",
            "limite": 8
        },
        {
            "nome": "Raciocínio Lógico",
            "limite": 5
        },
        {
            "nome": "Informática",
            "limite": 5
        },
        {
            "nome": "Física",
            "limite": 5
        },
        {
            "nome": "Legislação de Trânsito",
            "limite": 15
        },
        {
            "nome": "Direito Constitucional",
            "limite": 5
        },
        {
            "nome": "Direito Penal",
            "limite": 5
        },
        {
            "nome": "Direito Administrativo",
            "limite": 4
        }
    ],
    "questoes": {
        "Língua Portuguesa": [
            {
                "id": 1,
                "enunciado": "Assinale a alternativa que completa corretamente a lacuna: “Refiro-me ___ pessoas que chegaram cedo à reunião.”",
                "opcoes": [
                    "A) às",
                    "B) a",
                    "C) há",
                    "D) à",
                    "E) as"
                ],
                "correta": 0,
                "comentario": "O verbo referir-se exige a preposição “a”, que se funde com o artigo “as” de “as pessoas”: a + as = às."
            },
            {
                "id": 2,
                "enunciado": "Assinale a alternativa em que a concordância verbal está correta:",
                "opcoes": [
                    "A) Vendem-se casas na região.",
                    "B) Consertam-se o carro da família.",
                    "C) Alugam-se um apartamento no centro.",
                    "D) Vende-se casas na região.",
                    "E) Precisam-se de funcionários."
                ],
                "correta": 0,
                "comentario": "Na voz passiva sintética o verbo concorda com o sujeito paciente: “casas” (plural) → “Vendem-se casas”."
            },
            {
                "id": 3,
                "enunciado": "Assinale a alternativa em que a regência do verbo “assistir”, no sentido de presenciar, está correta:",
                "opcoes": [
                    "A) Assistimos do filme ontem.",
                    "B) Assistimos ao filme ontem.",
                    "C) Assistimos no filme ontem.",
                    "D) Assistimos pelo filme ontem.",
                    "E) Assistimos o filme ontem."
                ],
                "correta": 1,
                "comentario": "No sentido de presenciar, “assistir” é transitivo indireto e exige a preposição “a”: assistimos ao filme."
            },
            {
                "id": 4,
                "enunciado": "Assinale a alternativa que preenche corretamente as lacunas: “O condutor, que estava de ___ humor, dirigia ___ naquela manhã.”",
                "opcoes": [
                    "A) mal; mal",
                    "B) mal; bem",
                    "C) mau; mau",
                    "D) mal; mau",
                    "E) mau; mal"
                ],
                "correta": 4,
                "comentario": "“Mau” é adjetivo (oposto de bom): mau humor. “Mal” é advérbio (oposto de bem): dirigia mal."
            },
            {
                "id": 5,
                "enunciado": "Em “O asfalto chorava de calor sob o sol do meio-dia”, a figura de linguagem predominante é:",
                "opcoes": [
                    "A) Pleonasmo",
                    "B) Antítese",
                    "C) Prosopopeia",
                    "D) Hipérbole",
                    "E) Metonímia"
                ],
                "correta": 2,
                "comentario": "Atribuir ação humana (chorar) a um elemento inanimado (o asfalto) caracteriza a prosopopeia, ou personificação."
            },
            {
                "id": 6,
                "enunciado": "Assinale a alternativa em que a colocação do pronome átono está de acordo com a norma-padrão:",
                "opcoes": [
                    "A) Quando contaram-me o fato, assustei-me.",
                    "B) Ela quer que eu entregue-lhe o relatório.",
                    "C) Me disseram a verdade sobre o acidente.",
                    "D) Nada me disseram sobre o acidente.",
                    "E) Não disseram-me nada sobre o acidente."
                ],
                "correta": 3,
                "comentario": "Palavras negativas e pronomes indefinidos, como “nada”, atraem o pronome átono (próclise). Nas demais, a conjunção ou a negação também atraem o pronome."
            },
            {
                "id": 1001,
                "enunciado": "Leia:\n\"Grande parte dos acidentes nas rodovias federais não decorre de falhas mecânicas, mas de comportamentos de risco, como o excesso de velocidade e as ultrapassagens indevidas.\"\nDe acordo com o texto:",
                "opcoes": [
                    "A) os acidentes nas rodovias federais são raros.",
                    "B) a principal causa dos acidentes está relacionada à conduta dos motoristas.",
                    "C) as ultrapassagens são sempre proibidas nas rodovias.",
                    "D) as falhas mecânicas são a principal causa dos acidentes.",
                    "E) o excesso de velocidade não influencia os acidentes."
                ],
                "correta": 1,
                "comentario": "O texto opõe falhas mecânicas ('não decorre') a comportamentos de risco ('mas de'), apontando a conduta dos motoristas como causa principal."
            },
            {
                "id": 1002,
                "enunciado": "Leia:\n\"A fiscalização, por si só, não muda comportamentos de forma duradoura; é a educação para o trânsito que consolida hábitos seguros ao longo do tempo.\"\nO trecho permite inferir que o autor:",
                "opcoes": [
                    "A) acredita que a fiscalização é inútil em qualquer situação.",
                    "B) defende o fim da fiscalização nas rodovias.",
                    "C) afirma que os hábitos seguros surgem rapidamente.",
                    "D) considera a educação mais eficaz que a fiscalização isolada para mudanças permanentes.",
                    "E) considera a educação desnecessária quando há fiscalização."
                ],
                "correta": 3,
                "comentario": "A expressão 'por si só' indica que a fiscalização sozinha é insuficiente, não inútil. O autor valoriza a educação para mudanças duradouras."
            },
            {
                "id": 1003,
                "enunciado": "Leia:\n\"Embora os radares tenham reduzido a velocidade média em trechos críticos, muitos condutores freiam apenas diante do equipamento e voltam a acelerar logo depois.\"\nA oração iniciada por 'Embora' expressa:",
                "opcoes": [
                    "A) uma condição para a redução da velocidade.",
                    "B) a finalidade da instalação dos radares.",
                    "C) uma consequência do comportamento dos condutores.",
                    "D) a causa do comportamento dos condutores.",
                    "E) uma concessão, reconhecendo um fato que não impede a ressalva feita em seguida."
                ],
                "correta": 4,
                "comentario": "'Embora' é conjunção concessiva: admite o efeito positivo dos radares, mas a oração principal traz a limitação (frear só diante do equipamento)."
            },
            {
                "id": 1004,
                "enunciado": "Leia:\n\"O cansaço ao volante é tão perigoso quanto o álcool: ambos reduzem os reflexos e a capacidade de reação do condutor.\"\nOs dois-pontos introduzem:",
                "opcoes": [
                    "A) uma conclusão oposta à primeira parte.",
                    "B) uma explicação da comparação feita na primeira parte.",
                    "C) uma pergunta retórica.",
                    "D) uma enumeração de penalidades.",
                    "E) uma citação direta de outro autor."
                ],
                "correta": 1,
                "comentario": "Depois dos dois-pontos, o texto explica por que o cansaço é comparável ao álcool: os dois reduzem reflexos e capacidade de reação."
            },
            {
                "id": 1005,
                "enunciado": "Leia:\n\"O motorista que respeita os limites de velocidade não está apenas evitando multas; está protegendo a própria vida e a de outras pessoas.\"\nA ideia central do texto é que:",
                "opcoes": [
                    "A) a proteção da vida não tem relação com a velocidade.",
                    "B) os limites de velocidade são desnecessários.",
                    "C) respeitar os limites de velocidade tem um valor que vai além de evitar punições.",
                    "D) apenas o motorista se beneficia de respeitar os limites.",
                    "E) as multas são o principal motivo para respeitar os limites."
                ],
                "correta": 2,
                "comentario": "A construção 'não apenas... está' amplia o sentido: além de evitar multas, respeitar a velocidade protege vidas."
            },
            {
                "id": 1006,
                "enunciado": "Leia:\n\"Após a instalação da iluminação e do acostamento, o trecho deixou de figurar entre os mais perigosos da BR.\"\nInfere-se do texto que:",
                "opcoes": [
                    "A) as melhorias na infraestrutura contribuíram para reduzir o risco no trecho.",
                    "B) a iluminação aumentou o número de acidentes.",
                    "C) o trecho nunca foi considerado perigoso.",
                    "D) o trecho continua entre os mais perigosos da rodovia.",
                    "E) o acostamento foi retirado do trecho."
                ],
                "correta": 0,
                "comentario": "A relação temporal ('Após') e a mudança ('deixou de figurar') sugerem que as obras reduziram a periculosidade."
            },
            {
                "id": 1007,
                "enunciado": "Leia:\n\"Não há segurança viária possível sem a colaboração de todos: condutores, pedestres, ciclistas e poder público.\"\nO texto defende que a segurança viária é:",
                "opcoes": [
                    "A) uma questão que não envolve pedestres.",
                    "B) uma obrigação exclusiva do poder público.",
                    "C) algo impossível de alcançar.",
                    "D) um problema que só os condutores podem resolver.",
                    "E) uma responsabilidade compartilhada entre diversos atores."
                ],
                "correta": 4,
                "comentario": "A enumeração após os dois-pontos mostra que todos os grupos devem colaborar: a responsabilidade é coletiva."
            },
            {
                "id": 1008,
                "enunciado": "Leia:\n\"Dirigir à noite exige atenção redobrada. A visibilidade reduzida, o ofuscamento causado pelos faróis e a sonolência aumentam o risco de acidentes.\"\nA segunda frase, em relação à primeira, apresenta:",
                "opcoes": [
                    "A) uma condição para dirigir à noite.",
                    "B) um exemplo de comportamento correto.",
                    "C) uma ideia que contradiz a primeira.",
                    "D) uma conclusão sem relação com a primeira.",
                    "E) os motivos que justificam a afirmação inicial."
                ],
                "correta": 4,
                "comentario": "A segunda frase fundamenta a primeira, listando os fatores que tornam necessária a atenção redobrada."
            },
            {
                "id": 1009,
                "enunciado": "Leia:\n\"Alguns acreditam que o cinto de segurança é dispensável em trajetos curtos. Contudo, a maioria dos acidentes ocorre justamente perto de casa.\"\nO conectivo 'Contudo' introduz uma ideia de:",
                "opcoes": [
                    "A) oposição à crença apresentada anteriormente.",
                    "B) explicação da crença.",
                    "C) adição de outro argumento favorável à crença.",
                    "D) conclusão da ideia anterior.",
                    "E) tempo em que os acidentes ocorrem."
                ],
                "correta": 0,
                "comentario": "'Contudo' é adversativo: contrapõe o dado sobre acidentes perto de casa à crença de que o cinto é dispensável em trajetos curtos."
            },
            {
                "id": 1010,
                "enunciado": "Leia:\n\"Quanto maior a velocidade, maior a distância necessária para frear o veículo.\"\nA estrutura 'Quanto maior... maior' expressa relação de:",
                "opcoes": [
                    "A) proporção.",
                    "B) condição.",
                    "C) oposição.",
                    "D) finalidade.",
                    "E) concessão."
                ],
                "correta": 0,
                "comentario": "A construção 'quanto mais... mais' (ou 'quanto maior... maior') estabelece proporção entre duas grandezas."
            },
            {
                "id": 1011,
                "enunciado": "Um texto que tem como objetivo principal convencer o leitor sobre um ponto de vista, apresentando argumentos e evidências, é predominantemente:",
                "opcoes": [
                    "A) expositivo puro, sem tese.",
                    "B) descritivo.",
                    "C) dissertativo-argumentativo.",
                    "D) narrativo.",
                    "E) injuntivo."
                ],
                "correta": 2,
                "comentario": "O texto dissertativo-argumentativo defende uma tese com argumentos. O injuntivo dá instruções; o narrativo conta fatos em sequência; o descritivo caracteriza."
            },
            {
                "id": 1012,
                "enunciado": "Um manual de instruções para a troca de um pneu, com verbos no imperativo ('retire', 'posicione', 'aperte'), é exemplo de texto:",
                "opcoes": [
                    "A) narrativo.",
                    "B) injuntivo (instrucional).",
                    "C) descritivo.",
                    "D) poético.",
                    "E) argumentativo."
                ],
                "correta": 1,
                "comentario": "O texto injuntivo orienta o leitor a realizar uma ação, geralmente com verbos no imperativo ou no infinitivo."
            },
            {
                "id": 1013,
                "enunciado": "O boletim de ocorrência que relata, em ordem cronológica, como aconteceu um acidente, quem estava envolvido e onde ocorreu, tem como tipo textual predominante o:",
                "opcoes": [
                    "A) preditivo.",
                    "B) injuntivo.",
                    "C) narrativo.",
                    "D) dialogal.",
                    "E) argumentativo."
                ],
                "correta": 2,
                "comentario": "O relato de fatos em sequência temporal, com participantes, tempo e lugar, caracteriza a narração."
            },
            {
                "id": 1014,
                "enunciado": "\"O condutor estava sem habilitação; ______, o veículo foi retido até a chegada de um motorista habilitado.\" O conectivo que preenche a lacuna é:",
                "opcoes": [
                    "A) por isso",
                    "B) caso",
                    "C) a fim de que",
                    "D) entretanto",
                    "E) embora"
                ],
                "correta": 0,
                "comentario": "A retenção é consequência da falta de habilitação. 'Por isso' expressa conclusão/consequência."
            },
            {
                "id": 1015,
                "enunciado": "Na frase \"O agente parou o veículo e verificou os documentos do condutor; estes estavam regulares\", o pronome 'estes' retoma:",
                "opcoes": [
                    "A) os documentos.",
                    "B) o condutor.",
                    "C) o agente.",
                    "D) o veículo.",
                    "E) o agente e o condutor."
                ],
                "correta": 0,
                "comentario": "O pronome demonstrativo 'estes', no plural, retoma o termo mais próximo compatível: 'os documentos'."
            },
            {
                "id": 1016,
                "enunciado": "Assinale a alternativa em que o conectivo destacado expressa finalidade.",
                "opcoes": [
                    "A) 'Se' houver radares, os motoristas reduzirão a velocidade.",
                    "B) Os radares funcionam 'assim como' as lombadas.",
                    "C) 'Embora' houvesse radares, alguns aceleravam.",
                    "D) Os radares foram instalados 'para que' os motoristas reduzissem a velocidade.",
                    "E) Os motoristas reduziram a velocidade 'porque' havia radares."
                ],
                "correta": 3,
                "comentario": "'Para que' introduz finalidade. 'Porque' indica causa; 'embora', concessão; 'se', condição; 'assim como', comparação."
            },
            {
                "id": 1017,
                "enunciado": "Assinale a alternativa em que a substituição do termo destacado mantém o sentido original:\n\"A rodovia foi interditada 'em virtude de' um deslizamento de terra.\"",
                "opcoes": [
                    "A) apesar de",
                    "B) ao invés de",
                    "C) à medida de",
                    "D) por causa de",
                    "E) a fim de"
                ],
                "correta": 3,
                "comentario": "'Em virtude de' é locução causal, equivalente a 'por causa de' ou 'devido a'."
            },
            {
                "id": 1018,
                "enunciado": "No trecho \"A PRF intensificou as operações no feriado. A iniciativa reduziu o número de acidentes\", a expressão 'A iniciativa' constitui um mecanismo de:",
                "opcoes": [
                    "A) ambiguidade, pois não se sabe a que se refere.",
                    "B) repetição desnecessária de palavras.",
                    "C) contradição com a frase anterior.",
                    "D) coesão sequencial por conjunção adversativa.",
                    "E) coesão referencial, retomando a ideia de intensificar as operações."
                ],
                "correta": 4,
                "comentario": "O substantivo 'iniciativa' resume e retoma o conteúdo da frase anterior, garantindo a coesão por substituição (nominalização)."
            },
            {
                "id": 1019,
                "enunciado": "Assinale a frase corretamente pontuada.",
                "opcoes": [
                    "A) Na madrugada de domingo, a equipe da PRF após denúncia, abordou, o veículo suspeito.",
                    "B) Na madrugada de domingo, a equipe da PRF, após denúncia, abordou o veículo suspeito.",
                    "C) Na madrugada, de domingo, a equipe da PRF, abordou o veículo suspeito.",
                    "D) Na madrugada de domingo a equipe da PRF, após denúncia abordou o veículo suspeito.",
                    "E) A equipe da PRF abordou, o veículo suspeito na madrugada de domingo."
                ],
                "correta": 1,
                "comentario": "O adjunto adverbial deslocado e a expressão intercalada ('após denúncia') ficam entre vírgulas. Não se separa o verbo do objeto direto ('abordou o veículo')."
            },
            {
                "id": 1020,
                "enunciado": "Em \"Senhor condutor, apresente seus documentos\", a vírgula foi empregada para:",
                "opcoes": [
                    "A) indicar a omissão de um verbo.",
                    "B) separar orações coordenadas.",
                    "C) isolar o aposto.",
                    "D) isolar o vocativo.",
                    "E) separar o sujeito do verbo."
                ],
                "correta": 3,
                "comentario": "'Senhor condutor' é vocativo, termo usado para chamar o interlocutor, e deve ser isolado por vírgula."
            },
            {
                "id": 1021,
                "enunciado": "Em \"Brasília, capital federal, sedia a Direção-Geral da PRF\", o termo entre vírgulas é:",
                "opcoes": [
                    "A) um aposto explicativo.",
                    "B) um adjunto adverbial.",
                    "C) um predicativo do objeto.",
                    "D) o sujeito da oração.",
                    "E) um vocativo."
                ],
                "correta": 0,
                "comentario": "'Capital federal' explica o termo 'Brasília', funcionando como aposto explicativo, isolado por vírgulas."
            },
            {
                "id": 1022,
                "enunciado": "Considere as frases:\nI. O policial disse: 'O motorista está embriagado'.\nII. O policial disse que o motorista estava embriagado.\nA passagem de I para II representa a transformação do discurso:",
                "opcoes": [
                    "A) direto em indireto.",
                    "B) indireto em direto.",
                    "C) indireto livre em direto.",
                    "D) argumentativo em narrativo.",
                    "E) direto em indireto livre."
                ],
                "correta": 0,
                "comentario": "No discurso indireto, a fala é reproduzida pelo narrador com verbo dicendi e conjunção ('disse que'), com ajuste do tempo verbal ('está' → 'estava')."
            },
            {
                "id": 1023,
                "enunciado": "Assinale a frase em que a concordância verbal está de acordo com a norma-padrão.",
                "opcoes": [
                    "A) Faz parte da operação cerca de cinquenta policiais.",
                    "B) Existe, nas rodovias, muitos pontos críticos.",
                    "C) Devem haver radares em todo o trecho.",
                    "D) Fazem parte da operação cerca de cinquenta policiais.",
                    "E) Houveram muitas ocorrências durante o feriado."
                ],
                "correta": 3,
                "comentario": "O sujeito 'cerca de cinquenta policiais' está no plural: 'Fazem parte'. 'Haver' no sentido de existir é impessoal ('Houve', 'Deve haver'); 'existir' concorda com o sujeito ('Existem muitos pontos')."
            },
            {
                "id": 1024,
                "enunciado": "\"______ três horas que a rodovia está interditada, e já ______ dezenas de veículos parados.\" As lacunas são corretamente preenchidas por:",
                "opcoes": [
                    "A) Fazem — haviam",
                    "B) Fazem — há",
                    "C) Fazia — existe",
                    "D) Faz — hão",
                    "E) Faz — há"
                ],
                "correta": 4,
                "comentario": "'Fazer' indicando tempo decorrido é impessoal: 'Faz três horas'. 'Haver' no sentido de existir também: 'há dezenas'."
            },
            {
                "id": 1025,
                "enunciado": "Assinale a alternativa em que a concordância nominal está correta.",
                "opcoes": [
                    "A) As placas seguem anexo ao ofício.",
                    "B) É proibida a entrada de veículos pesados no perímetro urbano.",
                    "C) Ela mesmo assinou o auto de infração.",
                    "D) É proibido a entrada de veículos pesados no perímetro urbano.",
                    "E) Os policiais estavam meios cansados após o plantão."
                ],
                "correta": 1,
                "comentario": "Com artigo ('a entrada'), o adjetivo concorda: 'É proibida'. 'Anexas' concorda com 'placas'; 'meio' (advérbio) não varia; 'ela mesma' concorda com o pronome."
            },
            {
                "id": 1026,
                "enunciado": "\"Os agentes e as agentes estavam ______ com o resultado da operação, que foi considerado ______.\" As palavras que completam a frase são:",
                "opcoes": [
                    "A) satisfeito — positivos",
                    "B) satisfeitos — positiva",
                    "C) satisfeitas — positiva",
                    "D) satisfeitas — positivo",
                    "E) satisfeitos — positivo"
                ],
                "correta": 4,
                "comentario": "Adjetivo referente a substantivos de gêneros diferentes vai ao masculino plural ('satisfeitos'). 'Positivo' concorda com 'resultado' (retomado por 'que')."
            },
            {
                "id": 1027,
                "enunciado": "Assinale a alternativa em que a regência do verbo está de acordo com a norma-padrão.",
                "opcoes": [
                    "A) O condutor obedeceu a ordem de parada.",
                    "B) O motorista visava o lucro com o transporte irregular.",
                    "C) O condutor obedeceu à ordem de parada.",
                    "D) Prefiro mais fiscalizar do que autuar.",
                    "E) Os agentes assistiram o acidente de perto."
                ],
                "correta": 2,
                "comentario": "'Obedecer' é transitivo indireto: 'obedeceu à ordem'. 'Visar' (objetivar) e 'assistir' (presenciar) regem 'a'. 'Preferir' rege 'a', sem 'mais... do que'."
            },
            {
                "id": 1028,
                "enunciado": "\"O veículo ______ placa estava adulterada foi encaminhado ao pátio.\" A lacuna é corretamente preenchida por:",
                "opcoes": [
                    "A) que a",
                    "B) onde a",
                    "C) cuja",
                    "D) do qual a",
                    "E) cuja a"
                ],
                "correta": 2,
                "comentario": "'Cujo/cuja' indica posse e concorda com o termo seguinte ('placa'), sem artigo depois dele: 'cuja placa'."
            },
            {
                "id": 1029,
                "enunciado": "Assinale a frase em que o acento grave indicativo de crase está corretamente empregado.",
                "opcoes": [
                    "A) O condutor se referiu à uma placa apagada.",
                    "B) Ficamos frente à frente com o suspeito.",
                    "C) A equipe começou à fiscalizar o trecho.",
                    "D) O documento foi entregue à ele.",
                    "E) A equipe chegou à base às 22h."
                ],
                "correta": 4,
                "comentario": "'Chegar a' + 'a base' = 'à base'; horas determinadas: 'às 22h'. Não há crase antes de verbo, artigo indefinido, pronome pessoal ou em expressões com palavras repetidas."
            },
            {
                "id": 1030,
                "enunciado": "\"O agente fez referência ___ normas do Contran e ___ resolução publicada em 2026.\" As lacunas são corretamente preenchidas por:",
                "opcoes": [
                    "A) as — a",
                    "B) a — à",
                    "C) às — a",
                    "D) à — às",
                    "E) às — à"
                ],
                "correta": 4,
                "comentario": "'Referência a' + 'as normas' = 'às normas'; 'a' + 'a resolução' = 'à resolução'."
            },
            {
                "id": 1031,
                "enunciado": "Em qual frase o uso do acento grave é FACULTATIVO?",
                "opcoes": [
                    "A) O policial chegou à rodovia cedo.",
                    "B) O policial entregou o laudo à chefe do posto.",
                    "C) O policial foi à Bahia na operação.",
                    "D) O policial entregou o laudo à sua chefe.",
                    "E) O policial saiu às pressas."
                ],
                "correta": 3,
                "comentario": "Antes de pronome possessivo feminino singular, o artigo é opcional; por isso a crase também é: 'à sua chefe' ou 'a sua chefe'."
            },
            {
                "id": 1032,
                "enunciado": "Assinale a alternativa em que a colocação pronominal está de acordo com a norma-padrão.",
                "opcoes": [
                    "A) Nunca se viu tanto movimento nesta rodovia.",
                    "B) Me disseram que a pista estava interditada.",
                    "C) Tudo resolveu-se após a chegada da PRF.",
                    "D) Os condutores que envolveram-se no acidente foram ouvidos.",
                    "E) Nunca viu-se tanto movimento nesta rodovia."
                ],
                "correta": 0,
                "comentario": "Advérbios de negação ('nunca'), pronomes relativos ('que') e indefinidos ('tudo') atraem o pronome (próclise). Não se inicia frase com pronome oblíquo na norma-padrão."
            },
            {
                "id": 1033,
                "enunciado": "\"Os documentos foram apresentados, e o agente analisou ______ com cuidado.\" A forma pronominal que completa corretamente a frase é:",
                "opcoes": [
                    "A) -lhes",
                    "B) -nos",
                    "C) -lhe",
                    "D) eles",
                    "E) -os"
                ],
                "correta": 4,
                "comentario": "'Analisar' é transitivo direto; o pronome que substitui 'os documentos' (objeto direto) é 'os': 'analisou-os'."
            },
            {
                "id": 1034,
                "enunciado": "Assinale a alternativa em que o pronome foi empregado corretamente.",
                "opcoes": [
                    "A) Mandaram eu esperar na viatura.",
                    "B) Entre mim e você não há desentendimento.",
                    "C) Este relatório é para mim ler.",
                    "D) Vossa Senhoria trouxestes os documentos?",
                    "E) Entre eu e você não há desentendimento."
                ],
                "correta": 1,
                "comentario": "Após preposição usa-se pronome oblíquo tônico ('entre mim e você'). Antes de verbo no infinitivo que tem sujeito, usa-se 'eu' ('para eu ler'). Vossa Senhoria leva o verbo à 3ª pessoa ('trouxe'). 'Mandaram-me esperar'."
            },
            {
                "id": 1035,
                "enunciado": "Assinale a alternativa em que todas as palavras estão grafadas corretamente.",
                "opcoes": [
                    "A) fiscalização, ascensão, exceso, analize",
                    "B) fiscalização, ascensão, excesso, análise",
                    "C) fiscalisação, ascensão, excesso, análise",
                    "D) fiscalização, ascenção, excesso, análise",
                    "E) fiscalisação, ascenção, exesso, análize"
                ],
                "correta": 1,
                "comentario": "Grafias corretas: 'fiscalização' (de fiscalizar), 'ascensão' (com sc e s), 'excesso' (xc e ss) e 'análise' (com s)."
            },
            {
                "id": 1036,
                "enunciado": "Assinale a alternativa em que o emprego de 'mas' ou 'mais' está correto.",
                "opcoes": [
                    "A) O motorista freou, mais não conseguiu evitar a colisão.",
                    "B) Quanto mas rápido, maior o risco.",
                    "C) Não há mas radares neste trecho.",
                    "D) O motorista freou, mas não conseguiu evitar a colisão.",
                    "E) O trecho tem mas curvas do que o anterior."
                ],
                "correta": 3,
                "comentario": "'Mas' é conjunção adversativa (= porém). 'Mais' é advérbio ou pronome de intensidade ou quantidade."
            },
            {
                "id": 1037,
                "enunciado": "Assinale a frase em que a palavra 'onde' está empregada corretamente.",
                "opcoes": [
                    "A) Houve um tempo onde não havia radares.",
                    "B) O posto onde trabalho fica no quilômetro 150 da rodovia.",
                    "C) É uma situação onde o condutor deve parar.",
                    "D) Foi uma operação onde vários veículos foram retidos.",
                    "E) A reunião onde se discutiu a escala foi longa."
                ],
                "correta": 1,
                "comentario": "'Onde' refere-se a lugar físico (o posto). Para operação, tempo, situação e reunião, use 'em que' ou 'na qual'."
            },
            {
                "id": 1038,
                "enunciado": "Assinale a alternativa em que todas as palavras são acentuadas pela mesma regra.",
                "opcoes": [
                    "A) polícia, ninguém, você",
                    "B) tráfego, país, café",
                    "C) veículo, saída, também",
                    "D) tráfego, veículo, pública",
                    "E) pública, fácil, juíza"
                ],
                "correta": 3,
                "comentario": "'Tráfego', 'veículo' e 'pública' são proparoxítonas, todas acentuadas. As demais opções misturam regras diferentes, como hiatos ('saída', 'país', 'juíza'), oxítonas ('também', 'café', 'você', 'ninguém') e paroxítonas ('fácil', 'polícia')."
            },
            {
                "id": 1039,
                "enunciado": "Na frase \"O condutor foi autuado por dirigir de forma imprudente\", a palavra 'imprudente' pode ser substituída, sem alteração de sentido, por:",
                "opcoes": [
                    "A) moderada.",
                    "B) cautelosa.",
                    "C) prudente.",
                    "D) displicente com a documentação.",
                    "E) temerária."
                ],
                "correta": 4,
                "comentario": "'Imprudente' significa que age sem cautela, de modo arriscado; 'temerária' tem sentido equivalente. As outras opções têm sentido oposto ou diferente."
            },
            {
                "id": 1040,
                "enunciado": "Assinale a alternativa em que as palavras destacadas estão empregadas corretamente.",
                "opcoes": [
                    "A) O motorista estava 'iminente' na comunidade, era muito conhecido.",
                    "B) O agente fez a 'ratificação' do auto para corrigir o erro de digitação.",
                    "C) O agente fez a 'retificação' do auto, corrigindo um erro de digitação.",
                    "D) O suspeito tentou 'infligir' a lei, mas foi detido.",
                    "E) O pedido foi 'deferido', ou seja, negado pela autoridade."
                ],
                "correta": 2,
                "comentario": "'Retificar' = corrigir; 'ratificar' = confirmar. 'Infringir' = violar (a lei); 'infligir' = aplicar (pena). 'Eminente' = ilustre; 'iminente' = prestes a ocorrer. 'Deferido' = aprovado."
            },
            {
                "id": 1041,
                "enunciado": "Na frase \"A operação foi um sucesso, e os índices de acidentes despencaram\", o verbo 'despencaram' foi usado em sentido:",
                "opcoes": [
                    "A) neutro, sem valor expressivo.",
                    "B) técnico, típico da linguagem jurídica.",
                    "C) figurado, indicando queda acentuada.",
                    "D) literal, indicando que algo caiu de uma altura.",
                    "E) figurado, indicando aumento."
                ],
                "correta": 2,
                "comentario": "'Despencar' significa literalmente cair de cima. No texto, indica, de modo figurado, uma redução brusca dos índices."
            },
            {
                "id": 1042,
                "enunciado": "Em \"O veículo apresentava avarias graves\", a palavra 'avarias' significa:",
                "opcoes": [
                    "A) passageiros.",
                    "B) documentos.",
                    "C) acessórios.",
                    "D) danos.",
                    "E) multas."
                ],
                "correta": 3,
                "comentario": "'Avaria' é dano ou estrago sofrido por veículo, embarcação ou carga."
            },
            {
                "id": 1043,
                "enunciado": "Na frase \"A PRF fiscaliza as rodovias federais diariamente\", o termo 'diariamente' exerce a função de:",
                "opcoes": [
                    "A) adjunto adnominal.",
                    "B) adjunto adverbial de tempo.",
                    "C) objeto direto.",
                    "D) predicativo do sujeito.",
                    "E) complemento nominal."
                ],
                "correta": 1,
                "comentario": "'Diariamente' indica a frequência (circunstância de tempo) da ação de fiscalizar: é adjunto adverbial de tempo."
            },
            {
                "id": 1044,
                "enunciado": "Em \"Os policiais encontraram drogas no fundo falso do caminhão\", o termo 'drogas' é:",
                "opcoes": [
                    "A) objeto indireto.",
                    "B) objeto direto.",
                    "C) adjunto adverbial.",
                    "D) sujeito.",
                    "E) agente da passiva."
                ],
                "correta": 1,
                "comentario": "'Encontrar' é verbo transitivo direto; 'drogas' completa seu sentido sem preposição: objeto direto."
            },
            {
                "id": 1045,
                "enunciado": "Na oração \"Foram apreendidos dez veículos na operação\", o sujeito é:",
                "opcoes": [
                    "A) inexistente.",
                    "B) oculto (eles).",
                    "C) dez veículos.",
                    "D) a operação.",
                    "E) indeterminado."
                ],
                "correta": 2,
                "comentario": "A oração está na voz passiva analítica. O sujeito paciente, posposto, é 'dez veículos' (o que foi apreendido)."
            },
            {
                "id": 1046,
                "enunciado": "Em \"Os condutores precisam de atenção constante\", o termo 'de atenção constante' é:",
                "opcoes": [
                    "A) predicativo do sujeito.",
                    "B) complemento nominal.",
                    "C) adjunto adnominal.",
                    "D) objeto indireto.",
                    "E) objeto direto."
                ],
                "correta": 3,
                "comentario": "'Precisar', no sentido de necessitar, é transitivo indireto, regendo a preposição 'de'. Seu complemento é objeto indireto."
            },
            {
                "id": 1047,
                "enunciado": "Assinale a alternativa em que a oração destacada é subordinada adverbial condicional.",
                "opcoes": [
                    "A) 'Embora tenha se recusado', não foi autuado.",
                    "B) 'Como o condutor se recusou', foi autuado.",
                    "C) 'Quando o condutor se recusou', foi autuado.",
                    "D) 'Caso o condutor se recuse', será autuado.",
                    "E) O condutor foi autuado 'porque se recusou'."
                ],
                "correta": 3,
                "comentario": "'Caso' introduz condição. 'Como' (anteposto) e 'porque' expressam causa; 'embora', concessão; 'quando', tempo."
            },
            {
                "id": 1048,
                "enunciado": "Na frase \"O agente que atendeu a ocorrência redigiu o boletim\", a oração 'que atendeu a ocorrência' é:",
                "opcoes": [
                    "A) subordinada adjetiva restritiva.",
                    "B) coordenada sindética explicativa.",
                    "C) subordinada adverbial causal.",
                    "D) subordinada substantiva objetiva direta.",
                    "E) subordinada adjetiva explicativa."
                ],
                "correta": 0,
                "comentario": "A oração, sem vírgulas, restringe o sentido de 'agente' (aquele que atendeu, e não outro): é adjetiva restritiva."
            },
            {
                "id": 1049,
                "enunciado": "A palavra 'infelizmente' é formada por:",
                "opcoes": [
                    "A) parassíntese.",
                    "B) derivação regressiva.",
                    "C) prefixação e sufixação.",
                    "D) derivação imprópria.",
                    "E) composição por justaposição."
                ],
                "correta": 2,
                "comentario": "'In-' (prefixo) + 'feliz' + '-mente' (sufixo). Na parassíntese, o prefixo e o sufixo são acrescentados simultaneamente e não se pode retirar um deles; em 'infelizmente', existem 'infeliz' e 'felizmente'."
            },
            {
                "id": 1050,
                "enunciado": "A palavra 'entardecer' é formada por:",
                "opcoes": [
                    "A) parassíntese.",
                    "B) sufixação apenas.",
                    "C) prefixação apenas.",
                    "D) derivação regressiva.",
                    "E) composição por aglutinação."
                ],
                "correta": 0,
                "comentario": "Em 'entardecer' (en- + tarde + -ecer), prefixo e sufixo são acrescentados ao mesmo tempo: não existem 'entarde' nem 'tardecer'. Isso caracteriza a parassíntese."
            },
            {
                "id": 1051,
                "enunciado": "Transpondo-se para a voz passiva a frase \"A PRF apreendeu duas toneladas de carga ilegal\", obtém-se:",
                "opcoes": [
                    "A) Duas toneladas de carga ilegal foram apreendidas pela PRF.",
                    "B) Duas toneladas de carga ilegal eram apreendidas pela PRF.",
                    "C) Apreendeu-se a PRF com duas toneladas de carga.",
                    "D) A PRF foi apreendida por duas toneladas de carga.",
                    "E) Duas toneladas de carga ilegal serão apreendidas pela PRF."
                ],
                "correta": 0,
                "comentario": "O objeto direto vira sujeito, o verbo passa a 'ser' + particípio no mesmo tempo ('apreendeu' → 'foram apreendidas') e o sujeito ativo vira agente da passiva."
            },
            {
                "id": 1052,
                "enunciado": "Na frase \"Se o motorista tivesse respeitado o limite, o acidente teria sido evitado\", os verbos expressam:",
                "opcoes": [
                    "A) uma ordem ao motorista.",
                    "B) uma hipótese não realizada no passado.",
                    "C) um fato habitual no presente.",
                    "D) um fato certo no futuro.",
                    "E) uma ação que está acontecendo agora."
                ],
                "correta": 1,
                "comentario": "O mais-que-perfeito do subjuntivo ('tivesse respeitado') com o futuro do pretérito composto ('teria sido') expressa uma condição irreal no passado."
            },
            {
                "id": 1053,
                "enunciado": "Assinale a alternativa em que o verbo está conjugado corretamente.",
                "opcoes": [
                    "A) Quando o agente ver o veículo suspeito, fará a abordagem.",
                    "B) Se a equipe propor a mudança, será analisada.",
                    "C) Quando o agente vir o veículo suspeito, fará a abordagem.",
                    "D) Quando eles virem à base, serão ouvidos.",
                    "E) Se o condutor manter a velocidade, não será autuado."
                ],
                "correta": 2,
                "comentario": "Futuro do subjuntivo: 'vir' (de ver), 'mantiver' (de manter), 'vierem' (de vir), 'propuser' (de propor)."
            },
            {
                "id": 1054,
                "enunciado": "Segundo o Manual de Redação da Presidência da República (3ª edição), o vocativo 'Excelentíssimo Senhor' é reservado:",
                "opcoes": [
                    "A) a qualquer servidor público federal.",
                    "B) aos diretores de órgãos de segurança pública.",
                    "C) aos prefeitos e vereadores, exclusivamente.",
                    "D) aos particulares em geral.",
                    "E) aos Chefes de Poder, como o Presidente da República e os Presidentes do Congresso Nacional e do STF."
                ],
                "correta": 4,
                "comentario": "O Manual reserva 'Excelentíssimo Senhor' aos Chefes de Poder. Para as demais autoridades, usa-se 'Senhor' seguido do cargo, e formas como 'Ilustríssimo' e 'Digníssimo' foram abolidas."
            },
            {
                "id": 1055,
                "enunciado": "Segundo o Manual de Redação da Presidência da República, NÃO é atributo da redação oficial:",
                "opcoes": [
                    "A) a clareza.",
                    "B) a pessoalidade, com uso de impressões individuais do redator.",
                    "C) a concisão.",
                    "D) a formalidade e a padronização.",
                    "E) a impessoalidade."
                ],
                "correta": 1,
                "comentario": "A redação oficial deve ser clara, concisa, formal, padronizada e impessoal. Impressões pessoais do redator não cabem em documentos oficiais."
            },
            {
                "id": 1056,
                "enunciado": "Em comunicações oficiais, o fecho 'Respeitosamente,' deve ser usado para:",
                "opcoes": [
                    "A) autoridades de hierarquia inferior.",
                    "B) particulares em geral.",
                    "C) autoridades de mesma hierarquia.",
                    "D) autoridades de hierarquia superior à do remetente.",
                    "E) comunicações internas entre colegas."
                ],
                "correta": 3,
                "comentario": "O Manual prevê 'Respeitosamente,' para superiores hierárquicos e 'Atenciosamente,' para autoridades de mesma hierarquia ou de hierarquia inferior."
            },
            {
                "id": 1057,
                "enunciado": "Na frase \"A rodovia engoliu mais uma vida neste feriado\", há a figura de linguagem chamada:",
                "opcoes": [
                    "A) prosopopeia (personificação).",
                    "B) eufemismo.",
                    "C) pleonasmo.",
                    "D) hipérbole.",
                    "E) antítese."
                ],
                "correta": 0,
                "comentario": "Atribui-se à rodovia uma ação própria de seres vivos ('engolir'), o que caracteriza a personificação."
            },
            {
                "id": 1058,
                "enunciado": "Na frase \"O motorista partiu desta para melhor após o acidente\", usa-se a figura chamada:",
                "opcoes": [
                    "A) ironia.",
                    "B) metonímia.",
                    "C) catacrese.",
                    "D) hipérbole.",
                    "E) eufemismo."
                ],
                "correta": 4,
                "comentario": "O eufemismo suaviza uma ideia desagradável: 'partir desta para melhor' substitui 'morrer'."
            },
            {
                "id": 1059,
                "enunciado": "Em um relatório policial, a frase mais adequada quanto à norma-padrão e à objetividade é:",
                "opcoes": [
                    "A) O motorista, coitado, estava visivelmente alterado, como sempre acontece.",
                    "B) A gente achou que ele tinha bebido umas e outras.",
                    "C) O condutor apresentava sinais de embriaguez, como hálito etílico e fala desconexa.",
                    "D) O cara tava muito doidão, falando coisa com coisa.",
                    "E) O condutor tava meio bêbado e meio perdido."
                ],
                "correta": 2,
                "comentario": "O relatório deve ser impessoal, objetivo e em norma-padrão, descrevendo fatos observáveis. As demais opções têm coloquialismos e juízos pessoais."
            },
            {
                "id": 1060,
                "enunciado": "Leia:\n\"O uso do celular ao volante desvia a atenção do condutor por alguns segundos, tempo suficiente para que um veículo a 100 km/h percorra dezenas de metros sem controle.\"\nO argumento do texto baseia-se em:",
                "opcoes": [
                    "A) a comparação entre dois tipos de veículos.",
                    "B) uma citação de autoridade jurídica.",
                    "C) uma relação de causa e consequência, mostrando o efeito de uma breve distração.",
                    "D) um relato pessoal do autor.",
                    "E) uma opinião sem fundamento em dados."
                ],
                "correta": 2,
                "comentario": "O texto mostra que a distração (causa) leva o veículo a percorrer grande distância sem controle (consequência), reforçando o risco do celular ao volante."
            }
        ],
        "Raciocínio Lógico": [
            {
                "id": 101,
                "enunciado": "Considere a proposição: “Se chove, então a pista fica escorregadia”. Sabendo que a pista não está escorregadia, conclui-se que:",
                "opcoes": [
                    "A) não choveu.",
                    "B) a pista ficará escorregadia.",
                    "C) chove e a pista está seca.",
                    "D) não é possível concluir nada.",
                    "E) choveu."
                ],
                "correta": 0,
                "comentario": "Negando-se o consequente de uma condicional, nega-se o antecedente (modus tollens): se a pista não está escorregadia, não choveu."
            },
            {
                "id": 102,
                "enunciado": "Quantos anagramas distintos possui a palavra CARRO?",
                "opcoes": [
                    "A) 24",
                    "B) 60",
                    "C) 120",
                    "D) 30",
                    "E) 90"
                ],
                "correta": 1,
                "comentario": "São 5 letras com o R repetido duas vezes: 5! ÷ 2! = 120 ÷ 2 = 60."
            },
            {
                "id": 103,
                "enunciado": "Um veículo trafegava a 80 km/h e aumentou a velocidade em 25%. A nova velocidade, em km/h, é:",
                "opcoes": [
                    "A) 95",
                    "B) 100",
                    "C) 105",
                    "D) 90",
                    "E) 110"
                ],
                "correta": 1,
                "comentario": "25% de 80 = 20; 80 + 20 = 100 km/h."
            },
            {
                "id": 104,
                "enunciado": "A uma velocidade constante de 80 km/h, o tempo necessário para percorrer 200 km é de:",
                "opcoes": [
                    "A) 2 h",
                    "B) 2 h 15 min",
                    "C) 3 h",
                    "D) 2 h 45 min",
                    "E) 2 h 30 min"
                ],
                "correta": 4,
                "comentario": "Tempo = 200 ÷ 80 = 2,5 h, ou seja, 2 h 30 min."
            },
            {
                "id": 105,
                "enunciado": "A negação da proposição “Todos os motoristas respeitam a sinalização” é:",
                "opcoes": [
                    "A) Existe motorista que respeita a sinalização.",
                    "B) Todos os motoristas desrespeitam a sinalização.",
                    "C) Pelo menos um motorista não respeita a sinalização.",
                    "D) Algum motorista respeita a sinalização.",
                    "E) Nenhum motorista respeita a sinalização."
                ],
                "correta": 2,
                "comentario": "A negação de “todos” é “existe ao menos um que não”."
            },
            {
                "id": 106,
                "enunciado": "Ao lançar um dado honesto de seis faces, a probabilidade de obter um número par maior que 2 é:",
                "opcoes": [
                    "A) 1/6",
                    "B) 1/2",
                    "C) 2/3",
                    "D) 1/3",
                    "E) 5/6"
                ],
                "correta": 3,
                "comentario": "Os resultados favoráveis são 4 e 6: 2 casos em 6 = 1/3."
            },
            {
                "id": 2001,
                "enunciado": "Considere as proposições P: 'O condutor estava embriagado' e Q: 'O condutor foi autuado'. A proposição 'O condutor estava embriagado e não foi autuado' é representada por:",
                "opcoes": [
                    "A) ¬(P ∧ Q)",
                    "B) P ∧ ¬Q",
                    "C) P ∨ ¬Q",
                    "D) ¬P ∧ Q",
                    "E) P → Q"
                ],
                "correta": 1,
                "comentario": "O conectivo 'e' é a conjunção (∧), e 'não foi autuado' é a negação de Q (¬Q). Logo, P ∧ ¬Q."
            },
            {
                "id": 2002,
                "enunciado": "A proposição composta 'Se o semáforo está vermelho, então o veículo para' só é FALSA quando:",
                "opcoes": [
                    "A) o semáforo está vermelho e o veículo para.",
                    "B) o semáforo não está vermelho e o veículo para.",
                    "C) o semáforo não está vermelho e o veículo não para.",
                    "D) o semáforo está vermelho e o veículo não para.",
                    "E) em nenhum caso; ela é sempre verdadeira."
                ],
                "correta": 3,
                "comentario": "A condicional P → Q só é falsa quando o antecedente é verdadeiro e o consequente é falso (V → F)."
            },
            {
                "id": 2003,
                "enunciado": "A disjunção 'O motorista estava em alta velocidade ou estava distraído' é falsa somente quando:",
                "opcoes": [
                    "A) apenas a primeira é falsa.",
                    "B) a primeira é verdadeira e a segunda é falsa.",
                    "C) apenas a segunda é falsa.",
                    "D) ambas as proposições simples são falsas.",
                    "E) ambas são verdadeiras."
                ],
                "correta": 3,
                "comentario": "A disjunção inclusiva (∨) só é falsa quando as duas proposições são falsas."
            },
            {
                "id": 2004,
                "enunciado": "A bicondicional 'O veículo é liberado se, e somente se, a documentação estiver regular' é verdadeira quando:",
                "opcoes": [
                    "A) as duas proposições têm o mesmo valor lógico.",
                    "B) as duas proposições têm valores lógicos diferentes.",
                    "C) apenas a primeira é verdadeira.",
                    "D) a primeira é falsa, independentemente da segunda.",
                    "E) apenas a segunda é verdadeira."
                ],
                "correta": 0,
                "comentario": "A bicondicional (↔) é verdadeira quando ambas são verdadeiras ou ambas são falsas."
            },
            {
                "id": 2005,
                "enunciado": "Quantas linhas tem a tabela-verdade de uma proposição composta formada por 4 proposições simples distintas?",
                "opcoes": [
                    "A) 8",
                    "B) 32",
                    "C) 4",
                    "D) 16",
                    "E) 12"
                ],
                "correta": 3,
                "comentario": "O número de linhas é 2ⁿ, em que n é o número de proposições simples: 2⁴ = 16."
            },
            {
                "id": 2006,
                "enunciado": "A proposição 'P ∨ ¬P' é classificada como:",
                "opcoes": [
                    "A) contradição.",
                    "B) proposição simples.",
                    "C) tautologia.",
                    "D) contingência.",
                    "E) falácia."
                ],
                "correta": 2,
                "comentario": "'P ou não P' é sempre verdadeira, qualquer que seja o valor de P: é uma tautologia. Já 'P e não P' é sempre falsa (contradição)."
            },
            {
                "id": 2007,
                "enunciado": "A proposição 'P ∧ ¬P' é classificada como:",
                "opcoes": [
                    "A) silogismo.",
                    "B) contradição.",
                    "C) tautologia.",
                    "D) contingência.",
                    "E) equivalência."
                ],
                "correta": 1,
                "comentario": "Uma proposição não pode ser verdadeira e falsa ao mesmo tempo; 'P e não P' é sempre falsa: contradição."
            },
            {
                "id": 2008,
                "enunciado": "A negação de 'O motorista usava o cinto e respeitava o limite de velocidade' é:",
                "opcoes": [
                    "A) O motorista não usava o cinto e respeitava o limite.",
                    "B) O motorista não usava o cinto ou não respeitava o limite de velocidade.",
                    "C) Se o motorista usava o cinto, então respeitava o limite.",
                    "D) O motorista usava o cinto ou respeitava o limite de velocidade.",
                    "E) O motorista não usava o cinto e não respeitava o limite de velocidade."
                ],
                "correta": 1,
                "comentario": "Pela lei de De Morgan, ¬(P ∧ Q) ≡ ¬P ∨ ¬Q: nega-se cada parte e troca-se 'e' por 'ou'."
            },
            {
                "id": 2009,
                "enunciado": "A negação de 'O condutor estava sem cinto ou sem habilitação' é:",
                "opcoes": [
                    "A) O condutor estava com cinto ou com habilitação.",
                    "B) O condutor não estava sem cinto ou estava sem habilitação.",
                    "C) O condutor estava com cinto e com habilitação.",
                    "D) O condutor estava sem cinto e sem habilitação.",
                    "E) Se o condutor estava sem cinto, estava com habilitação."
                ],
                "correta": 2,
                "comentario": "Pela lei de De Morgan, ¬(P ∨ Q) ≡ ¬P ∧ ¬Q. Negar 'sem cinto' é 'com cinto'; negar 'sem habilitação' é 'com habilitação'."
            },
            {
                "id": 2010,
                "enunciado": "A negação de 'Se o condutor bebeu, então não dirige' é:",
                "opcoes": [
                    "A) O condutor não bebeu e não dirige.",
                    "B) Se o condutor dirige, então bebeu.",
                    "C) O condutor não bebeu ou dirige.",
                    "D) Se o condutor não bebeu, então dirige.",
                    "E) O condutor bebeu e dirige."
                ],
                "correta": 4,
                "comentario": "A negação de P → Q é P ∧ ¬Q: mantém-se o antecedente, troca-se 'se... então' por 'e' e nega-se o consequente ('não dirige' → 'dirige')."
            },
            {
                "id": 2011,
                "enunciado": "Uma proposição logicamente equivalente a 'Se chove, então a pista fica molhada' é:",
                "opcoes": [
                    "A) Se não chove, então a pista não fica molhada.",
                    "B) Se a pista fica molhada, então chove.",
                    "C) Chove e a pista não fica molhada.",
                    "D) Não chove ou a pista fica molhada.",
                    "E) Chove ou a pista não fica molhada."
                ],
                "correta": 3,
                "comentario": "P → Q equivale a ¬P ∨ Q. Também equivale à contrapositiva ¬Q → ¬P. A recíproca e a inversa não são equivalentes."
            },
            {
                "id": 2012,
                "enunciado": "A negação de 'Algum condutor foi autuado' é:",
                "opcoes": [
                    "A) Todos os condutores foram autuados.",
                    "B) Algum condutor não foi autuado.",
                    "C) Pelo menos um condutor foi autuado.",
                    "D) Nem todo condutor foi autuado.",
                    "E) Nenhum condutor foi autuado."
                ],
                "correta": 4,
                "comentario": "A negação de 'Algum A é B' é 'Nenhum A é B'. A negação de 'Todo A é B' é 'Algum A não é B'."
            },
            {
                "id": 2013,
                "enunciado": "A negação de 'Nenhum veículo estava irregular' é:",
                "opcoes": [
                    "A) Todos os veículos estavam irregulares.",
                    "B) Todos os veículos estavam regulares.",
                    "C) Nenhum veículo estava regular.",
                    "D) Pelo menos um veículo estava irregular.",
                    "E) Algum veículo estava regular."
                ],
                "correta": 3,
                "comentario": "A negação de 'Nenhum A é B' é 'Algum (pelo menos um) A é B'."
            },
            {
                "id": 2014,
                "enunciado": "A proposição 'Se o veículo está acima do peso, então é retido' é equivalente a:",
                "opcoes": [
                    "A) Se o veículo é retido, então está acima do peso.",
                    "B) O veículo é retido se, e somente se, está acima do peso.",
                    "C) O veículo está acima do peso e não é retido.",
                    "D) Se o veículo não está acima do peso, então não é retido.",
                    "E) Se o veículo não é retido, então não está acima do peso."
                ],
                "correta": 4,
                "comentario": "A contrapositiva (¬Q → ¬P) é equivalente à condicional original. A recíproca (Q → P) e a inversa (¬P → ¬Q) não são."
            },
            {
                "id": 2015,
                "enunciado": "Considere as premissas: 'Todo policial rodoviário é servidor público' e 'Carlos é policial rodoviário'. Conclui-se corretamente que:",
                "opcoes": [
                    "A) Carlos é servidor público.",
                    "B) Alguns servidores públicos não são policiais.",
                    "C) Todo servidor público é policial rodoviário.",
                    "D) Carlos não é servidor público.",
                    "E) Nada se pode concluir."
                ],
                "correta": 0,
                "comentario": "É um silogismo válido: se todo A é B e Carlos é A, então Carlos é B. A recíproca ('todo B é A') não decorre das premissas."
            },
            {
                "id": 2016,
                "enunciado": "Premissas: 'Se o motorista bebeu, então foi autuado' e 'O motorista não foi autuado'. Conclui-se validamente que:",
                "opcoes": [
                    "A) nada se pode concluir.",
                    "B) o motorista bebeu e não foi autuado.",
                    "C) o motorista foi autuado.",
                    "D) o motorista não bebeu.",
                    "E) o motorista bebeu."
                ],
                "correta": 3,
                "comentario": "É o modus tollens: de P → Q e ¬Q, conclui-se ¬P."
            },
            {
                "id": 2017,
                "enunciado": "Premissas: 'Se o motorista bebeu, então foi autuado' e 'O motorista foi autuado'. Concluir que 'o motorista bebeu' constitui:",
                "opcoes": [
                    "A) um silogismo disjuntivo válido.",
                    "B) um argumento válido (modus tollens).",
                    "C) uma tautologia.",
                    "D) um argumento válido (modus ponens).",
                    "E) uma falácia (afirmação do consequente)."
                ],
                "correta": 4,
                "comentario": "De P → Q e Q não se pode concluir P: o motorista pode ter sido autuado por outro motivo. Esse erro chama-se afirmação do consequente."
            },
            {
                "id": 2018,
                "enunciado": "Premissas: 'O veículo foi retido ou o condutor foi liberado' e 'O veículo não foi retido'. Conclui-se que:",
                "opcoes": [
                    "A) o condutor foi liberado.",
                    "B) nem o veículo foi retido nem o condutor foi liberado.",
                    "C) nada se pode concluir.",
                    "D) o veículo foi retido.",
                    "E) o condutor não foi liberado."
                ],
                "correta": 0,
                "comentario": "É o silogismo disjuntivo: de P ∨ Q e ¬P, conclui-se Q."
            },
            {
                "id": 2019,
                "enunciado": "Em uma equipe, sabe-se que: todo agente que trabalha à noite usa colete refletivo; Paula não usa colete refletivo. Conclui-se que:",
                "opcoes": [
                    "A) Nada se pode concluir sobre Paula.",
                    "B) Todo agente que usa colete trabalha à noite.",
                    "C) Paula não trabalha à noite.",
                    "D) Paula não é agente.",
                    "E) Paula trabalha à noite."
                ],
                "correta": 2,
                "comentario": "Se trabalhar à noite implica usar colete e Paula não usa colete, então Paula não trabalha à noite (modus tollens)."
            },
            {
                "id": 2020,
                "enunciado": "Três agentes — Ana, Bruno e Caio — trabalham em turnos diferentes (manhã, tarde e noite). Ana não trabalha à noite; Bruno trabalha à tarde. Logo:",
                "opcoes": [
                    "A) Ana trabalha de manhã e Caio, à noite.",
                    "B) Ana trabalha à tarde e Caio, de manhã.",
                    "C) Ana trabalha à noite e Caio, de manhã.",
                    "D) Caio trabalha de manhã e Ana, à noite.",
                    "E) Não é possível determinar os turnos."
                ],
                "correta": 0,
                "comentario": "Bruno fica com a tarde. Ana não trabalha à noite, então fica com a manhã. Sobra a noite para Caio."
            },
            {
                "id": 2021,
                "enunciado": "Em uma operação, 120 veículos foram fiscalizados: 45 tinham irregularidade documental, 30 tinham irregularidade mecânica e 15 tinham ambas. Quantos veículos não tinham nenhuma irregularidade?",
                "opcoes": [
                    "A) 45",
                    "B) 90",
                    "C) 75",
                    "D) 30",
                    "E) 60"
                ],
                "correta": 4,
                "comentario": "Veículos com alguma irregularidade = 45 + 30 − 15 = 60. Sem irregularidade = 120 − 60 = 60."
            },
            {
                "id": 2022,
                "enunciado": "Em um curso de formação, 80 alunos fizeram ao menos uma das provas de tiro ou de direção. Sabe-se que 50 fizeram a de tiro e 45 a de direção. Quantos fizeram as duas?",
                "opcoes": [
                    "A) 5",
                    "B) 95",
                    "C) 15",
                    "D) 25",
                    "E) 35"
                ],
                "correta": 2,
                "comentario": "|A ∪ B| = |A| + |B| − |A ∩ B| → 80 = 50 + 45 − x → x = 15."
            },
            {
                "id": 2023,
                "enunciado": "Se A = {1, 2, 3, 4} e B = {3, 4, 5}, então A − B é:",
                "opcoes": [
                    "A) {1, 2, 5}",
                    "B) {1, 2}",
                    "C) {5}",
                    "D) {1, 2, 3, 4, 5}",
                    "E) {3, 4}"
                ],
                "correta": 1,
                "comentario": "A diferença A − B contém os elementos de A que não estão em B: {1, 2}."
            },
            {
                "id": 2024,
                "enunciado": "Uma placa no padrão Mercosul para automóveis tem 4 letras e 3 algarismos, na sequência LLLNLNN. Considerando 26 letras e 10 algarismos, com repetição, o número de placas possíveis é:",
                "opcoes": [
                    "A) 11.232.000",
                    "B) 175.760.000",
                    "C) 45.697.600",
                    "D) 1.757.600",
                    "E) 456.976.000"
                ],
                "correta": 4,
                "comentario": "São 4 posições de letras e 3 de algarismos: 26⁴ × 10³ = 456.976 × 1.000 = 456.976.000."
            },
            {
                "id": 2025,
                "enunciado": "De quantas maneiras 5 agentes podem ser dispostos em fila para uma formatura?",
                "opcoes": [
                    "A) 720",
                    "B) 60",
                    "C) 5",
                    "D) 120",
                    "E) 25"
                ],
                "correta": 3,
                "comentario": "Permutação de 5 elementos: 5! = 120."
            },
            {
                "id": 2026,
                "enunciado": "Uma equipe de abordagem com 3 agentes será formada a partir de 7 disponíveis, sem funções distintas. O número de equipes possíveis é:",
                "opcoes": [
                    "A) 343",
                    "B) 210",
                    "C) 42",
                    "D) 21",
                    "E) 35"
                ],
                "correta": 4,
                "comentario": "Como a ordem não importa, é combinação: C(7,3) = 7! / (3! × 4!) = 35."
            },
            {
                "id": 2027,
                "enunciado": "Dentre 6 agentes, serão escolhidos um motorista e um comandante para a viatura. O número de formas de escolha é:",
                "opcoes": [
                    "A) 30",
                    "B) 15",
                    "C) 12",
                    "D) 720",
                    "E) 36"
                ],
                "correta": 0,
                "comentario": "As funções são distintas, então a ordem importa: arranjo A(6,2) = 6 × 5 = 30."
            },
            {
                "id": 2028,
                "enunciado": "Quantos anagramas tem a palavra RADAR?",
                "opcoes": [
                    "A) 20",
                    "B) 120",
                    "C) 30",
                    "D) 60",
                    "E) 10"
                ],
                "correta": 2,
                "comentario": "RADAR tem 5 letras, com R e A repetidas duas vezes cada: 5! / (2! × 2!) = 120 / 4 = 30."
            },
            {
                "id": 2029,
                "enunciado": "Um posto da PRF tem 3 rotas de patrulhamento para o turno da manhã e 4 para o da tarde. Escolhendo uma rota para cada turno, o número de combinações de rotas é:",
                "opcoes": [
                    "A) 24",
                    "B) 16",
                    "C) 7",
                    "D) 81",
                    "E) 12"
                ],
                "correta": 4,
                "comentario": "Pelo princípio multiplicativo: 3 × 4 = 12."
            },
            {
                "id": 2030,
                "enunciado": "Em um lote de 20 veículos apreendidos, 5 são motocicletas. Escolhendo-se um ao acaso, a probabilidade de ser motocicleta é:",
                "opcoes": [
                    "A) 25%",
                    "B) 5%",
                    "C) 75%",
                    "D) 20%",
                    "E) 15%"
                ],
                "correta": 0,
                "comentario": "P = 5/20 = 1/4 = 25%."
            },
            {
                "id": 2031,
                "enunciado": "Em um teste, a probabilidade de um etilômetro apresentar falha é de 2%. Usando dois aparelhos independentes, a probabilidade de ambos falharem é:",
                "opcoes": [
                    "A) 4%",
                    "B) 1%",
                    "C) 0,4%",
                    "D) 2%",
                    "E) 0,04%"
                ],
                "correta": 4,
                "comentario": "Eventos independentes: P = 0,02 × 0,02 = 0,0004 = 0,04%."
            },
            {
                "id": 2032,
                "enunciado": "Uma urna tem 4 bolas vermelhas e 6 azuis. Retirando-se duas bolas, sem reposição, a probabilidade de ambas serem vermelhas é:",
                "opcoes": [
                    "A) 4/25",
                    "B) 3/25",
                    "C) 2/15",
                    "D) 1/5",
                    "E) 2/5"
                ],
                "correta": 2,
                "comentario": "Sem reposição: P = (4/10) × (3/9) = 12/90 = 2/15. Com reposição, seria (4/10)² = 4/25."
            },
            {
                "id": 2033,
                "enunciado": "Lançando-se uma moeda honesta três vezes, a probabilidade de obter pelo menos uma cara é:",
                "opcoes": [
                    "A) 3/4",
                    "B) 3/8",
                    "C) 1/2",
                    "D) 7/8",
                    "E) 1/8"
                ],
                "correta": 3,
                "comentario": "P(nenhuma cara) = (1/2)³ = 1/8. Logo, P(pelo menos uma) = 1 − 1/8 = 7/8."
            },
            {
                "id": 2034,
                "enunciado": "Na sequência 3, 7, 15, 31, 63, ..., o próximo termo é:",
                "opcoes": [
                    "A) 127",
                    "B) 131",
                    "C) 126",
                    "D) 99",
                    "E) 95"
                ],
                "correta": 0,
                "comentario": "Cada termo é o dobro do anterior mais 1: 63 × 2 + 1 = 127 (ou 2ⁿ − 1)."
            },
            {
                "id": 2035,
                "enunciado": "Na sequência 2, 6, 12, 20, 30, ..., o próximo termo é:",
                "opcoes": [
                    "A) 40",
                    "B) 44",
                    "C) 42",
                    "D) 36",
                    "E) 50"
                ],
                "correta": 2,
                "comentario": "As diferenças são 4, 6, 8, 10, 12. Logo, 30 + 12 = 42. Os termos também são n(n+1): 6 × 7 = 42."
            },
            {
                "id": 2036,
                "enunciado": "Na sequência de letras A, C, F, J, O, ..., a próxima letra (alfabeto de 26 letras) é:",
                "opcoes": [
                    "A) T",
                    "B) U",
                    "C) Q",
                    "D) S",
                    "E) V"
                ],
                "correta": 1,
                "comentario": "Os saltos são +2, +3, +4, +5: A(1), C(3), F(6), J(10), O(15). O próximo salto é +6: 15 + 6 = 21, que corresponde à letra U."
            },
            {
                "id": 2037,
                "enunciado": "Um veículo percorre 240 km em 3 horas. Sua velocidade média é:",
                "opcoes": [
                    "A) 60 km/h",
                    "B) 90 km/h",
                    "C) 80 km/h",
                    "D) 72 km/h",
                    "E) 720 km/h"
                ],
                "correta": 2,
                "comentario": "Velocidade média = distância ÷ tempo = 240 ÷ 3 = 80 km/h."
            },
            {
                "id": 2038,
                "enunciado": "Uma viatura consome 1 litro de combustível a cada 12 km. Para uma patrulha de 330 km, serão necessários:",
                "opcoes": [
                    "A) 22 litros",
                    "B) 30 litros",
                    "C) 25 litros",
                    "D) 27,5 litros",
                    "E) 3.960 litros"
                ],
                "correta": 3,
                "comentario": "Consumo = 330 ÷ 12 = 27,5 litros."
            },
            {
                "id": 2039,
                "enunciado": "O número de acidentes em um trecho caiu de 80 para 56 após uma campanha. A redução percentual foi de:",
                "opcoes": [
                    "A) 30%",
                    "B) 42,9%",
                    "C) 20%",
                    "D) 70%",
                    "E) 24%"
                ],
                "correta": 0,
                "comentario": "Redução = 80 − 56 = 24. Percentual = 24 ÷ 80 = 0,30 = 30%. A base é o valor inicial."
            },
            {
                "id": 2040,
                "enunciado": "Uma multa de R$ 293,47 é paga com desconto de 20%. O valor pago, aproximadamente, é:",
                "opcoes": [
                    "A) R$ 234,78",
                    "B) R$ 58,69",
                    "C) R$ 264,12",
                    "D) R$ 176,08",
                    "E) R$ 273,47"
                ],
                "correta": 0,
                "comentario": "Valor pago = 293,47 × 0,80 ≈ R$ 234,78."
            },
            {
                "id": 2041,
                "enunciado": "Duas viaturas partem do mesmo ponto, em sentidos opostos de uma rodovia, a 80 km/h e 100 km/h. Após 30 minutos, a distância entre elas é:",
                "opcoes": [
                    "A) 10 km",
                    "B) 90 km",
                    "C) 60 km",
                    "D) 45 km",
                    "E) 180 km"
                ],
                "correta": 1,
                "comentario": "Em sentidos opostos, as velocidades se somam: 180 km/h × 0,5 h = 90 km."
            },
            {
                "id": 2042,
                "enunciado": "Uma viatura a 90 km/h persegue um veículo que está 3 km à frente, a 75 km/h, no mesmo sentido. O tempo para alcançá-lo é:",
                "opcoes": [
                    "A) 20 minutos",
                    "B) 12 minutos",
                    "C) 2 minutos",
                    "D) 5 minutos",
                    "E) 30 minutos"
                ],
                "correta": 1,
                "comentario": "Velocidade relativa = 90 − 75 = 15 km/h. Tempo = 3 ÷ 15 = 0,2 h = 12 minutos."
            },
            {
                "id": 2043,
                "enunciado": "Em uma escala de 12 horas de trabalho por 36 horas de descanso, iniciando segunda-feira às 7h, o próximo plantão do agente começará:",
                "opcoes": [
                    "A) quinta-feira às 7h.",
                    "B) quarta-feira às 19h.",
                    "C) quarta-feira às 7h.",
                    "D) terça-feira às 7h.",
                    "E) terça-feira às 19h."
                ],
                "correta": 2,
                "comentario": "O plantão vai de segunda 7h às 19h. Somando 36 horas de descanso: 19h de segunda + 36h = 7h de quarta-feira."
            },
            {
                "id": 2044,
                "enunciado": "Se 4 agentes fiscalizam 200 veículos em 5 horas, quantos veículos 6 agentes fiscalizam em 8 horas, no mesmo ritmo?",
                "opcoes": [
                    "A) 360",
                    "B) 480",
                    "C) 300",
                    "D) 240",
                    "E) 600"
                ],
                "correta": 1,
                "comentario": "Regra de três composta: 200 × (6/4) × (8/5) = 200 × 1,5 × 1,6 = 480 veículos."
            },
            {
                "id": 2045,
                "enunciado": "A média de idade de 5 agentes é 34 anos. Com a chegada de um sexto agente, a média passou a 35 anos. A idade do novo agente é:",
                "opcoes": [
                    "A) 34 anos",
                    "B) 40 anos",
                    "C) 36 anos",
                    "D) 35 anos",
                    "E) 41 anos"
                ],
                "correta": 1,
                "comentario": "Soma inicial = 5 × 34 = 170. Nova soma = 6 × 35 = 210. Idade do novo agente = 210 − 170 = 40 anos."
            }
        ],
        "Informática": [
            {
                "id": 201,
                "enunciado": "Mensagens falsas que se passam por instituições para induzir a pessoa a fornecer dados pessoais configuram o ataque conhecido como:",
                "opcoes": [
                    "A) Sniffing",
                    "B) Defacement",
                    "C) Backdoor",
                    "D) Phishing",
                    "E) Spooling"
                ],
                "correta": 3,
                "comentario": "Phishing é a fraude que usa mensagens ou páginas falsas para obter dados da vítima."
            },
            {
                "id": 202,
                "enunciado": "Em uma planilha, as células A1, A2 e A3 contêm 10, 20 e 30. O resultado de =MÉDIA(A1:A3) é:",
                "opcoes": [
                    "A) 10",
                    "B) 30",
                    "C) 60",
                    "D) 15",
                    "E) 20"
                ],
                "correta": 4,
                "comentario": "(10 + 20 + 30) ÷ 3 = 20."
            },
            {
                "id": 203,
                "enunciado": "O protocolo HTTPS se diferencia do HTTP por:",
                "opcoes": [
                    "A) transferir arquivos apenas por FTP.",
                    "B) dispensar o uso de endereços IP.",
                    "C) estabelecer comunicação criptografada entre navegador e servidor.",
                    "D) ser exclusivo para envio de e-mails.",
                    "E) funcionar somente em redes locais."
                ],
                "correta": 2,
                "comentario": "O HTTPS é o HTTP sobre uma camada de segurança (TLS), que criptografa a comunicação."
            },
            {
                "id": 204,
                "enunciado": "A memória RAM é classificada como volátil porque:",
                "opcoes": [
                    "A) é mais lenta que o disco rígido.",
                    "B) perde seu conteúdo quando o computador é desligado.",
                    "C) só pode ser lida, nunca gravada.",
                    "D) armazena dados permanentemente.",
                    "E) é usada somente pelo sistema operacional."
                ],
                "correta": 1,
                "comentario": "Memória volátil precisa de energia para manter os dados; ao desligar, o conteúdo é perdido."
            },
            {
                "id": 205,
                "enunciado": "O recurso que filtra o tráfego entre redes com base em regras de segurança é o:",
                "opcoes": [
                    "A) firewall.",
                    "B) plotter.",
                    "C) compilador.",
                    "D) scanner.",
                    "E) driver."
                ],
                "correta": 0,
                "comentario": "O firewall permite ou bloqueia conexões de acordo com regras previamente definidas."
            },
            {
                "id": 206,
                "enunciado": "No Microsoft Word, o atalho de teclado usado para desfazer a última ação é:",
                "opcoes": [
                    "A) Ctrl + U",
                    "B) Ctrl + Y",
                    "C) Ctrl + Z",
                    "D) Ctrl + X",
                    "E) Ctrl + D"
                ],
                "correta": 2,
                "comentario": "Ctrl + Z desfaz; Ctrl + Y refaz a ação desfeita."
            },
            {
                "id": 3001,
                "enunciado": "O tipo de código malicioso que sequestra os dados do usuário, criptografando-os, e exige pagamento para liberar o acesso é o:",
                "opcoes": [
                    "A) worm.",
                    "B) ransomware.",
                    "C) spyware.",
                    "D) rootkit.",
                    "E) adware."
                ],
                "correta": 1,
                "comentario": "O ransomware torna os dados inacessíveis por criptografia e cobra resgate, geralmente em criptomoeda. Backups atualizados e isolados são a principal proteção."
            },
            {
                "id": 3002,
                "enunciado": "O programa malicioso capaz de se propagar automaticamente pelas redes, explorando vulnerabilidades e enviando cópias de si mesmo, sem precisar de um arquivo hospedeiro, é o:",
                "opcoes": [
                    "A) cavalo de Troia.",
                    "B) adware.",
                    "C) keylogger.",
                    "D) vírus.",
                    "E) worm."
                ],
                "correta": 4,
                "comentario": "O worm se replica sozinho pela rede. O vírus depende de um arquivo ou programa hospedeiro e da ação do usuário para se propagar."
            },
            {
                "id": 3003,
                "enunciado": "O cavalo de Troia (trojan) caracteriza-se por:",
                "opcoes": [
                    "A) apenas exibir propagandas indesejadas.",
                    "B) criptografar todos os arquivos e pedir resgate.",
                    "C) aparentar ser um programa legítimo, mas executar funções maliciosas ocultas.",
                    "D) propagar-se sozinho pela rede, sem interação.",
                    "E) ser um componente físico do computador."
                ],
                "correta": 2,
                "comentario": "O trojan engana o usuário com aparência legítima (jogo, utilitário) e, ao ser executado, abre portas, rouba dados ou instala outros malwares."
            },
            {
                "id": 3004,
                "enunciado": "O programa que captura e registra as teclas digitadas pelo usuário, podendo obter senhas, é o:",
                "opcoes": [
                    "A) antivírus.",
                    "B) proxy.",
                    "C) screenlogger.",
                    "D) keylogger.",
                    "E) firewall."
                ],
                "correta": 3,
                "comentario": "O keylogger registra o teclado. O screenlogger captura imagens da tela (útil contra teclados virtuais). O firewall e o antivírus são ferramentas de proteção."
            },
            {
                "id": 3005,
                "enunciado": "A autenticação em dois fatores (2FA) aumenta a segurança porque:",
                "opcoes": [
                    "A) exige, além da senha, outro elemento de verificação, como um código enviado ao celular ou um aplicativo autenticador.",
                    "B) criptografa automaticamente todos os arquivos.",
                    "C) substitui a senha por uma senha mais curta.",
                    "D) impede qualquer tipo de vírus no computador.",
                    "E) dispensa o uso de senha."
                ],
                "correta": 0,
                "comentario": "Com dois fatores (algo que você sabe + algo que você tem ou é), uma senha vazada não basta para invadir a conta."
            },
            {
                "id": 3006,
                "enunciado": "Os princípios básicos da segurança da informação — confidencialidade, integridade e disponibilidade — significam, respectivamente:",
                "opcoes": [
                    "A) informação sigilosa; informação antiga; informação temporária.",
                    "B) informação pública; informação criptografada; informação apagada.",
                    "C) informação acessível a todos; informação duplicada; informação off-line.",
                    "D) acesso rápido; informação compactada; informação em nuvem.",
                    "E) acesso apenas por autorizados; informação sem alterações indevidas; informação acessível quando necessária."
                ],
                "correta": 4,
                "comentario": "A tríade CID: confidencialidade (só quem pode vê), integridade (não foi alterada indevidamente) e disponibilidade (está acessível quando preciso)."
            },
            {
                "id": 3007,
                "enunciado": "O backup incremental copia:",
                "opcoes": [
                    "A) apenas os arquivos alterados desde o último backup completo, acumulando as alterações.",
                    "B) apenas arquivos de imagem e vídeo.",
                    "C) apenas os arquivos criados ou alterados desde o último backup (de qualquer tipo).",
                    "D) todos os arquivos, sempre.",
                    "E) somente os arquivos do sistema operacional."
                ],
                "correta": 2,
                "comentario": "O incremental copia o que mudou desde o último backup de qualquer tipo. O diferencial copia o que mudou desde o último backup completo, acumulando. O completo copia tudo."
            },
            {
                "id": 3008,
                "enunciado": "Ao receber um e-mail de um suposto banco solicitando a atualização de dados por meio de um link, a atitude mais segura é:",
                "opcoes": [
                    "A) clicar no link e informar os dados rapidamente.",
                    "B) baixar o anexo para conferir.",
                    "C) não clicar no link e acessar o site oficial do banco digitando o endereço ou usando o aplicativo oficial.",
                    "D) encaminhar o e-mail a todos os contatos.",
                    "E) responder ao e-mail com a senha."
                ],
                "correta": 2,
                "comentario": "Esse é o padrão do phishing. Bancos não pedem dados por links de e-mail. O acesso deve ser feito por canais oficiais."
            },
            {
                "id": 3009,
                "enunciado": "O firewall pessoal instalado em um computador tem como função principal:",
                "opcoes": [
                    "A) remover vírus de arquivos infectados.",
                    "B) controlar o tráfego de rede que entra e sai do computador, conforme regras definidas.",
                    "C) acelerar a conexão com a internet.",
                    "D) criptografar o disco rígido.",
                    "E) fazer cópias de segurança dos arquivos."
                ],
                "correta": 1,
                "comentario": "O firewall filtra conexões segundo regras, bloqueando acessos não autorizados. A remoção de vírus é função do antivírus."
            },
            {
                "id": 3010,
                "enunciado": "A engenharia social é uma técnica de ataque que:",
                "opcoes": [
                    "A) depende exclusivamente de falhas de hardware.",
                    "B) explora a confiança e o comportamento das pessoas para obter informações ou acesso.",
                    "C) consiste em quebrar senhas por força bruta.",
                    "D) utiliza apenas vírus anexados a e-mails.",
                    "E) é uma técnica de backup."
                ],
                "correta": 1,
                "comentario": "O atacante manipula a vítima — por telefone, e-mail ou pessoalmente — para que ela revele dados ou execute ações. A conscientização é a principal defesa."
            },
            {
                "id": 3011,
                "enunciado": "A criptografia assimétrica utiliza:",
                "opcoes": [
                    "A) um par de chaves: uma pública, que pode ser divulgada, e uma privada, mantida em sigilo.",
                    "B) nenhuma chave, apenas senhas.",
                    "C) duas chaves públicas idênticas.",
                    "D) uma única chave secreta compartilhada pelas partes.",
                    "E) a mesma chave para todos os usuários do sistema."
                ],
                "correta": 0,
                "comentario": "Na criptografia assimétrica, o que é cifrado com a chave pública só é decifrado com a privada correspondente, e vice-versa. É a base da assinatura digital e do HTTPS."
            },
            {
                "id": 3012,
                "enunciado": "A assinatura digital garante, entre outros aspectos:",
                "opcoes": [
                    "A) a compactação do arquivo.",
                    "B) o sigilo absoluto do conteúdo, sempre.",
                    "C) a autenticidade do autor e a integridade do documento.",
                    "D) a velocidade de envio do arquivo.",
                    "E) a disponibilidade do documento na nuvem."
                ],
                "correta": 2,
                "comentario": "A assinatura digital, feita com a chave privada, permite verificar quem assinou (autenticidade), se o documento foi alterado (integridade) e impede o autor de negar a autoria (não repúdio). Ela não cifra o conteúdo por si só."
            },
            {
                "id": 3013,
                "enunciado": "Uma senha considerada forte deve:",
                "opcoes": [
                    "A) ser a data de nascimento do usuário.",
                    "B) ser igual para todos os serviços, para facilitar a memorização.",
                    "C) conter apenas números em sequência.",
                    "D) ser o próprio nome de usuário.",
                    "E) ser longa e combinar letras maiúsculas, minúsculas, números e símbolos, sem dados pessoais."
                ],
                "correta": 4,
                "comentario": "Senhas longas e variadas resistem a ataques de força bruta e dicionário. Reutilizar senhas expõe todos os serviços se uma delas vazar."
            },
            {
                "id": 3014,
                "enunciado": "O serviço que traduz nomes de domínio, como 'gov.br', em endereços IP é o:",
                "opcoes": [
                    "A) FTP.",
                    "B) DHCP.",
                    "C) SMTP.",
                    "D) DNS.",
                    "E) HTTP."
                ],
                "correta": 3,
                "comentario": "O DNS (Domain Name System) resolve nomes em endereços IP. O DHCP atribui IPs automaticamente; FTP transfere arquivos; SMTP envia e-mails; HTTP transfere páginas web."
            },
            {
                "id": 3015,
                "enunciado": "O protocolo responsável pela atribuição automática de endereços IP aos dispositivos de uma rede é o:",
                "opcoes": [
                    "A) DHCP.",
                    "B) IMAP.",
                    "C) DNS.",
                    "D) POP3.",
                    "E) SSH."
                ],
                "correta": 0,
                "comentario": "O DHCP (Dynamic Host Configuration Protocol) distribui automaticamente IP, máscara, gateway e DNS aos dispositivos da rede."
            },
            {
                "id": 3016,
                "enunciado": "O protocolo utilizado para o envio de mensagens de correio eletrônico é o:",
                "opcoes": [
                    "A) POP3.",
                    "B) IMAP.",
                    "C) DNS.",
                    "D) SMTP.",
                    "E) FTP."
                ],
                "correta": 3,
                "comentario": "O SMTP envia e-mails. POP3 e IMAP são usados para receber; o IMAP mantém as mensagens sincronizadas no servidor."
            },
            {
                "id": 3017,
                "enunciado": "A principal diferença entre os protocolos IMAP e POP3 é que o IMAP:",
                "opcoes": [
                    "A) mantém as mensagens no servidor, sincronizando-as entre vários dispositivos.",
                    "B) apaga sempre as mensagens do servidor após o download.",
                    "C) é usado apenas para enviar mensagens.",
                    "D) funciona somente em redes locais.",
                    "E) não permite o uso de pastas."
                ],
                "correta": 0,
                "comentario": "O IMAP permite acessar a mesma caixa de e-mail em vários aparelhos, com tudo sincronizado. O POP3, por padrão, baixa as mensagens para um dispositivo."
            },
            {
                "id": 3018,
                "enunciado": "Uma rede que interliga computadores em uma área geográfica restrita, como um prédio ou um posto da PRF, é classificada como:",
                "opcoes": [
                    "A) MAN.",
                    "B) SAN, sempre.",
                    "C) LAN.",
                    "D) PAN.",
                    "E) WAN."
                ],
                "correta": 2,
                "comentario": "LAN (Local Area Network) cobre área restrita. MAN cobre uma cidade; WAN, grandes distâncias (como a internet); PAN, poucos metros (como o Bluetooth)."
            },
            {
                "id": 3019,
                "enunciado": "O endereço IPv4 é composto por:",
                "opcoes": [
                    "A) 32 bits, normalmente escritos em quatro números de 0 a 255 separados por pontos.",
                    "B) 128 bits, escritos em hexadecimal.",
                    "C) 64 bits, separados por dois-pontos.",
                    "D) 8 bits, em um único número.",
                    "E) 16 caracteres alfanuméricos aleatórios."
                ],
                "correta": 0,
                "comentario": "O IPv4 tem 32 bits (ex.: 192.168.0.1). O IPv6, com 128 bits em hexadecimal, foi criado diante do esgotamento de endereços IPv4."
            },
            {
                "id": 3020,
                "enunciado": "A intranet de um órgão público é:",
                "opcoes": [
                    "A) uma rede pública aberta a qualquer cidadão.",
                    "B) um tipo de vírus de computador.",
                    "C) um programa de edição de textos.",
                    "D) um sinônimo de internet.",
                    "E) uma rede privada que utiliza as mesmas tecnologias e protocolos da internet, de acesso restrito aos usuários autorizados."
                ],
                "correta": 4,
                "comentario": "A intranet usa os protocolos da internet (TCP/IP, HTTP), mas é restrita à organização. A extranet estende parte desse acesso a parceiros externos."
            },
            {
                "id": 3021,
                "enunciado": "A VPN (Virtual Private Network) permite:",
                "opcoes": [
                    "A) substituir o sistema operacional.",
                    "B) eliminar todos os vírus da rede.",
                    "C) dispensar o uso de senhas.",
                    "D) criar uma conexão segura e criptografada entre o usuário e uma rede, mesmo por meio da internet.",
                    "E) aumentar a velocidade de processamento do computador."
                ],
                "correta": 3,
                "comentario": "A VPN cria um 'túnel' criptografado, permitindo, por exemplo, que um servidor acesse a rede do órgão de forma segura fora do local de trabalho."
            },
            {
                "id": 3022,
                "enunciado": "Na URL 'https://www.gov.br/prf/pt-br', o trecho 'https' indica:",
                "opcoes": [
                    "A) o país do site.",
                    "B) o protocolo de comunicação, com conexão criptografada.",
                    "C) o nome do servidor.",
                    "D) o diretório do site.",
                    "E) a porta de acesso, obrigatoriamente 80."
                ],
                "correta": 1,
                "comentario": "A URL começa pelo protocolo (https), seguido do domínio (www.gov.br) e do caminho (/prf/pt-br). O HTTPS usa, por padrão, a porta 443."
            },
            {
                "id": 3023,
                "enunciado": "Os cookies, nos navegadores, são:",
                "opcoes": [
                    "A) pequenos arquivos que os sites armazenam no computador do usuário para guardar informações como preferências e sessões.",
                    "B) cópias de segurança automáticas do sistema.",
                    "C) atalhos de teclado do navegador.",
                    "D) vírus que danificam o navegador.",
                    "E) programas que aceleram a internet."
                ],
                "correta": 0,
                "comentario": "Cookies guardam dados de navegação (login, carrinho, preferências). Podem ser usados para rastreamento, e por isso navegadores permitem bloqueá-los ou apagá-los."
            },
            {
                "id": 3024,
                "enunciado": "A navegação anônima (ou privativa) dos navegadores:",
                "opcoes": [
                    "A) impede o provedor de internet de saber quais sites foram acessados.",
                    "B) oculta totalmente a identidade do usuário na internet.",
                    "C) criptografa todos os arquivos baixados.",
                    "D) não salva histórico, cookies e dados de formulários após o fechamento da janela, mas não torna o usuário invisível na rede.",
                    "E) protege contra qualquer tipo de vírus."
                ],
                "correta": 3,
                "comentario": "O modo anônimo apenas não guarda dados localmente. O provedor, a rede da empresa e os próprios sites ainda podem identificar o acesso."
            },
            {
                "id": 3025,
                "enunciado": "O armazenamento em nuvem (cloud storage) consiste em:",
                "opcoes": [
                    "A) gravar dados em CDs e DVDs.",
                    "B) guardar arquivos em servidores remotos, acessíveis pela internet.",
                    "C) salvar arquivos apenas na memória RAM.",
                    "D) manter arquivos exclusivamente no pen drive.",
                    "E) compactar arquivos no disco local."
                ],
                "correta": 1,
                "comentario": "Serviços como Google Drive e OneDrive armazenam dados em servidores na internet, permitindo acesso de vários dispositivos e compartilhamento."
            },
            {
                "id": 3026,
                "enunciado": "O modelo de computação em nuvem em que o usuário utiliza um software pronto pela internet, sem instalar nem gerenciar a infraestrutura, é o:",
                "opcoes": [
                    "A) PaaS (Platform as a Service).",
                    "B) BIOS as a Service.",
                    "C) IaaS (Infrastructure as a Service).",
                    "D) LAN as a Service.",
                    "E) SaaS (Software as a Service)."
                ],
                "correta": 4,
                "comentario": "SaaS: software pronto (ex.: webmail). PaaS: plataforma para desenvolver aplicações. IaaS: infraestrutura virtual (servidores, armazenamento)."
            },
            {
                "id": 3027,
                "enunciado": "No Windows, o atalho de teclado Windows + L é usado para:",
                "opcoes": [
                    "A) minimizar todas as janelas.",
                    "B) fazer captura de tela.",
                    "C) bloquear o computador.",
                    "D) abrir o Explorador de Arquivos.",
                    "E) abrir o Gerenciador de Tarefas."
                ],
                "correta": 2,
                "comentario": "Win + L bloqueia a sessão, útil ao se afastar do computador. Win + E abre o Explorador; Win + D mostra a área de trabalho; Ctrl + Shift + Esc abre o Gerenciador de Tarefas."
            },
            {
                "id": 3028,
                "enunciado": "No Windows, o atalho Ctrl + Shift + Esc abre o:",
                "opcoes": [
                    "A) Gerenciador de Tarefas.",
                    "B) menu Iniciar.",
                    "C) Prompt de Comando.",
                    "D) Painel de Controle.",
                    "E) Explorador de Arquivos."
                ],
                "correta": 0,
                "comentario": "O Gerenciador de Tarefas mostra programas e processos em execução, consumo de recursos e permite encerrar aplicativos travados."
            },
            {
                "id": 3029,
                "enunciado": "No Windows, ao excluir um arquivo com as teclas Shift + Delete:",
                "opcoes": [
                    "A) o arquivo é copiado para a área de transferência.",
                    "B) o arquivo é excluído sem passar pela Lixeira.",
                    "C) o arquivo vai para a Lixeira.",
                    "D) o arquivo é compactado.",
                    "E) o arquivo é renomeado."
                ],
                "correta": 1,
                "comentario": "Shift + Delete exclui permanentemente, sem enviar à Lixeira (o sistema pede confirmação). A tecla Delete sozinha envia o arquivo para a Lixeira."
            },
            {
                "id": 3030,
                "enunciado": "No sistema operacional Linux, o comando utilizado para listar o conteúdo de um diretório é:",
                "opcoes": [
                    "A) pwd",
                    "B) mkdir",
                    "C) rm",
                    "D) ls",
                    "E) cd"
                ],
                "correta": 3,
                "comentario": "'ls' lista arquivos e pastas; 'cd' muda de diretório; 'mkdir' cria diretório; 'rm' remove arquivos; 'pwd' mostra o diretório atual."
            },
            {
                "id": 3031,
                "enunciado": "No Linux, o usuário com privilégios totais de administração do sistema é o:",
                "opcoes": [
                    "A) user.",
                    "B) root.",
                    "C) admin, obrigatoriamente.",
                    "D) guest.",
                    "E) kernel."
                ],
                "correta": 1,
                "comentario": "O 'root' (superusuário) tem acesso irrestrito. Comandos administrativos costumam ser executados com 'sudo' por usuários autorizados."
            },
            {
                "id": 3032,
                "enunciado": "A extensão de arquivo .pdf indica, em geral, um arquivo:",
                "opcoes": [
                    "A) de planilha editável.",
                    "B) de documento portátil, que preserva a formatação em diferentes dispositivos.",
                    "C) executável do Windows.",
                    "D) de áudio compactado.",
                    "E) de banco de dados."
                ],
                "correta": 1,
                "comentario": "O PDF (Portable Document Format) mantém a aparência do documento em qualquer sistema. Executáveis no Windows usam .exe; planilhas, .xlsx; áudio, .mp3."
            },
            {
                "id": 3033,
                "enunciado": "Em uma planilha, a fórmula =SOMA(B2:B5) calcula:",
                "opcoes": [
                    "A) a soma dos valores das células B2, B3, B4 e B5.",
                    "B) a quantidade de células preenchidas entre B2 e B5.",
                    "C) a soma apenas de B2 e B5.",
                    "D) a média dos valores de B2 a B5.",
                    "E) o maior valor entre B2 e B5."
                ],
                "correta": 0,
                "comentario": "O operador ':' indica intervalo contínuo. Para somar só B2 e B5, usa-se ';' (ex.: =SOMA(B2;B5))."
            },
            {
                "id": 3034,
                "enunciado": "Em uma planilha, a célula A1 contém 80 e B1 contém 25. A fórmula =A1*(1-B1/100) resulta em:",
                "opcoes": [
                    "A) 55",
                    "B) 75",
                    "C) 105",
                    "D) 20",
                    "E) 60"
                ],
                "correta": 4,
                "comentario": "B1/100 = 0,25; 1 − 0,25 = 0,75; 80 × 0,75 = 60. A fórmula aplica um desconto de 25% sobre 80."
            },
            {
                "id": 3035,
                "enunciado": "Em uma planilha, a função =SE(C2>=7;\"Aprovado\";\"Reprovado\"), com C2 igual a 6,5, retorna:",
                "opcoes": [
                    "A) um erro, pois a função não aceita decimais",
                    "B) 6,5",
                    "C) Reprovado",
                    "D) VERDADEIRO",
                    "E) Aprovado"
                ],
                "correta": 2,
                "comentario": "A função SE testa a condição C2 >= 7. Como 6,5 não é maior ou igual a 7, retorna o valor se falso: 'Reprovado'."
            },
            {
                "id": 3036,
                "enunciado": "Em uma planilha, ao copiar a fórmula =A1+$B$1 da célula C1 para a célula C2, a fórmula em C2 será:",
                "opcoes": [
                    "A) =A1+$B$1",
                    "B) =A2+B2",
                    "C) =B2+$C$1",
                    "D) =A2+$B$2",
                    "E) =A2+$B$1"
                ],
                "correta": 4,
                "comentario": "A referência relativa (A1) se ajusta à nova linha (A2). A referência absoluta ($B$1), com cifrões, permanece fixa."
            },
            {
                "id": 3037,
                "enunciado": "A função de planilha que conta quantas células de um intervalo atendem a um critério, como =CONT.SE(A1:A50;\"Multado\"), é usada para:",
                "opcoes": [
                    "A) somar os valores das células com 'Multado'.",
                    "B) contar quantas células do intervalo contêm o texto 'Multado'.",
                    "C) localizar a primeira ocorrência de 'Multado'.",
                    "D) calcular a média do intervalo.",
                    "E) apagar as células com 'Multado'."
                ],
                "correta": 1,
                "comentario": "CONT.SE conta as células que satisfazem o critério. Para somar valores condicionados, usa-se SOMASE."
            },
            {
                "id": 3038,
                "enunciado": "Em uma planilha, a função PROCV é utilizada para:",
                "opcoes": [
                    "A) procurar um valor na primeira coluna de uma tabela e retornar um valor da mesma linha em outra coluna.",
                    "B) calcular a média de uma coluna.",
                    "C) proteger a planilha com senha.",
                    "D) contar células vazias.",
                    "E) criar gráficos automaticamente."
                ],
                "correta": 0,
                "comentario": "PROCV faz busca vertical: localiza a chave na primeira coluna e devolve o dado da coluna indicada. A função PROCX, mais recente, é mais flexível."
            },
            {
                "id": 3039,
                "enunciado": "Em uma planilha, o resultado de =MÁXIMO(4;9;2;7) é:",
                "opcoes": [
                    "A) 22",
                    "B) 4",
                    "C) 9",
                    "D) 5,5",
                    "E) 2"
                ],
                "correta": 2,
                "comentario": "MÁXIMO retorna o maior valor da lista: 9. MÍNIMO retornaria 2; SOMA, 22; MÉDIA, 5,5."
            },
            {
                "id": 3040,
                "enunciado": "No Microsoft Word, o recurso que permite registrar as alterações feitas por diferentes revisores em um documento, para aceitá-las ou rejeitá-las depois, é o:",
                "opcoes": [
                    "A) Hifenização.",
                    "B) Quebra de Página.",
                    "C) Mala Direta.",
                    "D) Sumário Automático.",
                    "E) Controlar Alterações."
                ],
                "correta": 4,
                "comentario": "Na guia Revisão, 'Controlar Alterações' marca inserções, exclusões e formatações feitas, permitindo revisá-las uma a uma."
            },
            {
                "id": 3041,
                "enunciado": "No Microsoft Word, o recurso que gera automaticamente várias cartas personalizadas a partir de uma lista de destinatários é a:",
                "opcoes": [
                    "A) Controlar Alterações.",
                    "B) Macro de Gráfico.",
                    "C) Proteção de Documento.",
                    "D) Mala Direta.",
                    "E) Tabela Dinâmica."
                ],
                "correta": 3,
                "comentario": "A Mala Direta combina um documento-modelo com uma fonte de dados (como uma planilha) para gerar documentos individualizados."
            },
            {
                "id": 3042,
                "enunciado": "No Word, o atalho Ctrl + B (na versão em português) é usado para:",
                "opcoes": [
                    "A) localizar texto.",
                    "B) imprimir o documento.",
                    "C) abrir um documento.",
                    "D) aplicar negrito.",
                    "E) salvar o documento."
                ],
                "correta": 4,
                "comentario": "Na versão em português do Word, Ctrl + B salva e Ctrl + N aplica negrito. Na versão em inglês, Ctrl + S salva e Ctrl + B aplica negrito."
            },
            {
                "id": 3043,
                "enunciado": "O componente responsável por executar as instruções dos programas e processar os dados em um computador é a:",
                "opcoes": [
                    "A) fonte de alimentação.",
                    "B) memória de massa (HD).",
                    "C) CPU (unidade central de processamento).",
                    "D) placa de som.",
                    "E) memória ROM."
                ],
                "correta": 2,
                "comentario": "A CPU (processador) executa as instruções. A memória ROM guarda instruções de inicialização; o HD/SSD armazena dados de forma permanente."
            },
            {
                "id": 3044,
                "enunciado": "Comparado ao HD (disco rígido) tradicional, o SSD apresenta como principal vantagem:",
                "opcoes": [
                    "A) volatilidade dos dados ao desligar o computador.",
                    "B) maior capacidade de armazenamento pelo mesmo preço, sempre.",
                    "C) necessidade de desfragmentação frequente.",
                    "D) maior velocidade de leitura e gravação, por não ter partes mecânicas móveis.",
                    "E) funcionamento por discos magnéticos giratórios."
                ],
                "correta": 3,
                "comentario": "O SSD usa memória flash, sem partes móveis, sendo mais rápido e resistente a impactos. O HD usa discos magnéticos giratórios. Ambos são memórias não voláteis."
            },
            {
                "id": 3045,
                "enunciado": "O ataque de negação de serviço distribuído (DDoS) tem como objetivo:",
                "opcoes": [
                    "A) corrigir falhas de segurança do sistema.",
                    "B) criptografar os arquivos do usuário e pedir resgate.",
                    "C) roubar senhas por meio de e-mails falsos.",
                    "D) tornar um serviço ou site indisponível, sobrecarregando-o com grande volume de requisições vindas de muitas máquinas.",
                    "E) registrar as teclas digitadas pelo usuário."
                ],
                "correta": 3,
                "comentario": "No DDoS, muitas máquinas (frequentemente uma botnet de computadores infectados) atacam ao mesmo tempo, esgotando os recursos do alvo e afetando sua disponibilidade."
            }
        ],
        "Física": [
            {
                "id": 301,
                "enunciado": "Um veículo a 72 km/h move-se com velocidade, em m/s, igual a:",
                "opcoes": [
                    "A) 10",
                    "B) 15",
                    "C) 25",
                    "D) 20",
                    "E) 30"
                ],
                "correta": 3,
                "comentario": "Para converter km/h em m/s divide-se por 3,6: 72 ÷ 3,6 = 20 m/s."
            },
            {
                "id": 302,
                "enunciado": "Um carro parte do repouso e atinge 20 m/s em 5 s, em movimento uniformemente variado. Sua aceleração, em m/s², é:",
                "opcoes": [
                    "A) 2",
                    "B) 5",
                    "C) 4",
                    "D) 10",
                    "E) 100"
                ],
                "correta": 2,
                "comentario": "a = Δv ÷ Δt = 20 ÷ 5 = 4 m/s²."
            },
            {
                "id": 303,
                "enunciado": "Qual a força resultante necessária para imprimir aceleração de 3 m/s² a um veículo de 1.000 kg?",
                "opcoes": [
                    "A) 300 N",
                    "B) 3.000 N",
                    "C) 1.000 N",
                    "D) 3.333 N",
                    "E) 30.000 N"
                ],
                "correta": 1,
                "comentario": "Segunda lei de Newton: F = m·a = 1.000 × 3 = 3.000 N."
            },
            {
                "id": 304,
                "enunciado": "A energia cinética de um veículo de 1.000 kg que se move a 10 m/s é de:",
                "opcoes": [
                    "A) 10.000 J",
                    "B) 100.000 J",
                    "C) 5.000 J",
                    "D) 50.000 J",
                    "E) 500.000 J"
                ],
                "correta": 3,
                "comentario": "Ec = m·v² ÷ 2 = 1.000 × 100 ÷ 2 = 50.000 J."
            },
            {
                "id": 305,
                "enunciado": "Um veículo a 20 m/s freia com desaceleração constante de 5 m/s² até parar. A distância percorrida na frenagem é de:",
                "opcoes": [
                    "A) 20 m",
                    "B) 60 m",
                    "C) 80 m",
                    "D) 100 m",
                    "E) 40 m"
                ],
                "correta": 4,
                "comentario": "Por Torricelli: v² = 2·a·d → 400 = 10·d → d = 40 m."
            },
            {
                "id": 306,
                "enunciado": "Um motorista percorre 60 km a 60 km/h e, em seguida, mais 60 km a 30 km/h. A velocidade média em todo o trajeto é:",
                "opcoes": [
                    "A) 40 km/h",
                    "B) 45 km/h",
                    "C) 50 km/h",
                    "D) 30 km/h",
                    "E) 35 km/h"
                ],
                "correta": 0,
                "comentario": "Tempos: 1 h + 2 h = 3 h para 120 km. Velocidade média = 120 ÷ 3 = 40 km/h."
            }
        ],
        "Legislação de Trânsito": [
            {
                "id": 401,
                "enunciado": "O Código de Trânsito Brasileiro (CTB) foi instituído pela Lei nº:",
                "opcoes": [
                    "A) 8.112, de 1990.",
                    "B) 9.503, de 1997.",
                    "C) 8.666, de 1993.",
                    "D) 10.406, de 2002.",
                    "E) 9.099, de 1995."
                ],
                "correta": 1,
                "comentario": "O CTB é a Lei nº 9.503, de 23 de setembro de 1997."
            },
            {
                "id": 402,
                "enunciado": "De acordo com o art. 259 do CTB, as infrações gravíssima, grave, média e leve somam, respectivamente:",
                "opcoes": [
                    "A) 6, 5, 4 e 3 pontos.",
                    "B) 7, 6, 5 e 4 pontos.",
                    "C) 5, 4, 3 e 2 pontos.",
                    "D) 8, 6, 4 e 2 pontos.",
                    "E) 7, 5, 4 e 3 pontos."
                ],
                "correta": 4,
                "comentario": "Art. 259: gravíssima = 7 pontos; grave = 5; média = 4; leve = 3."
            },
            {
                "id": 403,
                "enunciado": "Nos termos do art. 261 do CTB, para o condutor que não exerce atividade remunerada e que cometeu uma única infração gravíssima nos últimos 12 meses, o processo de suspensão do direito de dirigir é instaurado ao atingir:",
                "opcoes": [
                    "A) 20 pontos.",
                    "B) 40 pontos.",
                    "C) 15 pontos.",
                    "D) 50 pontos.",
                    "E) 30 pontos."
                ],
                "correta": 4,
                "comentario": "Limites no período de 12 meses (Lei nº 14.071/2020): 20 pontos com duas ou mais gravíssimas; 30 pontos com uma gravíssima; 40 pontos sem nenhuma gravíssima."
            },
            {
                "id": 404,
                "enunciado": "O órgão máximo normativo e consultivo do Sistema Nacional de Trânsito é o:",
                "opcoes": [
                    "A) CONTRAN.",
                    "B) DNIT.",
                    "C) DENATRAN.",
                    "D) CETRAN.",
                    "E) JARI."
                ],
                "correta": 0,
                "comentario": "Art. 7º, I, do CTB: o CONTRAN é o coordenador do Sistema e órgão máximo normativo e consultivo."
            },
            {
                "id": 405,
                "enunciado": "Segundo o art. 143 do CTB, a Categoria B de habilitação autoriza a condução de veículo motorizado cujo peso bruto total não exceda:",
                "opcoes": [
                    "A) 3.500 kg, com lotação de até oito lugares, excluído o do motorista.",
                    "B) 2.000 kg e cinco lugares.",
                    "C) 4.536 kg e dez lugares.",
                    "D) 6.000 kg, sem limite de lugares.",
                    "E) 3.500 kg e quatro lugares."
                ],
                "correta": 0,
                "comentario": "Art. 143, II: Categoria B — veículo cujo peso bruto total não exceda 3.500 kg e cuja lotação não exceda oito lugares, excluído o do motorista."
            },
            {
                "id": 406,
                "enunciado": "O CTB define acostamento como a:",
                "opcoes": [
                    "A) área de lazer às margens da rodovia.",
                    "B) parte da via diferenciada da pista de rolamento, destinada à parada ou estacionamento em caso de emergência e à circulação de pedestres e bicicletas quando não houver local apropriado.",
                    "C) parte da via destinada ao estacionamento prolongado de veículos de carga.",
                    "D) faixa exclusiva para ônibus.",
                    "E) área destinada à ultrapassagem de veículos lentos."
                ],
                "correta": 1,
                "comentario": "Definição do Anexo I do CTB: o acostamento é a parte da via diferenciada da pista de rolamento, usada em emergências e, quando não houver local apropriado, por pedestres e ciclistas."
            },
            {
                "id": 407,
                "enunciado": "Têm prioridade de trânsito e livre circulação, quando em serviço de urgência e identificados por alarme sonoro e iluminação vermelha intermitente:",
                "opcoes": [
                    "A) veículos de carga, em horário de pico.",
                    "B) apenas as ambulâncias, em qualquer situação.",
                    "C) qualquer veículo oficial, mesmo sem sinalização.",
                    "D) ambulâncias e veículos de polícia, de bombeiros e de fiscalização e operação de trânsito.",
                    "E) táxis e veículos de aplicativo em corrida."
                ],
                "correta": 3,
                "comentario": "Art. 29, VII, do CTB: veículos de socorro de incêndio e salvamento, de polícia, de fiscalização e operação de trânsito e ambulâncias, em serviço de urgência e devidamente identificados."
            },
            {
                "id": 408,
                "enunciado": "Sobre o uso do cinto de segurança, o CTB estabelece que:",
                "opcoes": [
                    "A) é facultativo para passageiros do banco traseiro.",
                    "B) é dispensado para todos os veículos de passeio.",
                    "C) é obrigatório para condutor e passageiros em todas as vias do território nacional, salvo em situações regulamentadas pelo CONTRAN.",
                    "D) é obrigatório apenas para o condutor, em rodovias.",
                    "E) é obrigatório apenas nas vias rurais."
                ],
                "correta": 2,
                "comentario": "Art. 65 do CTB: uso obrigatório para condutor e passageiros em todas as vias do território nacional, salvo situações regulamentadas pelo CONTRAN."
            },
            {
                "id": 5001,
                "enunciado": "Segundo o art. 20 do CTB, compete à Polícia Rodoviária Federal, no âmbito das rodovias e estradas federais:",
                "opcoes": [
                    "A) expedir a Carteira Nacional de Habilitação dos condutores residentes nas faixas de domínio.",
                    "B) realizar o registro e o licenciamento anual dos veículos que trafegam em rodovias federais.",
                    "C) realizar o patrulhamento ostensivo, aplicar e arrecadar multas por infrações de trânsito e efetuar o levantamento dos locais de acidentes.",
                    "D) estabelecer as normas regulamentares do CTB e as diretrizes da Política Nacional de Trânsito.",
                    "E) julgar os recursos interpostos contra penalidades aplicadas pelos órgãos municipais."
                ],
                "correta": 2,
                "comentario": "O art. 20 atribui à PRF o patrulhamento ostensivo, a aplicação e arrecadação de multas e medidas administrativas, e o levantamento de locais de acidentes, entre outras funções. Habilitação e licenciamento são do órgão executivo estadual (Detran); normas e diretrizes, do Contran."
            },
            {
                "id": 5002,
                "enunciado": "Compete às Juntas Administrativas de Recursos de Infrações (JARI):",
                "opcoes": [
                    "A) julgar os recursos interpostos pelos infratores.",
                    "B) elaborar normas sobre equipamentos obrigatórios dos veículos.",
                    "C) expedir a Permissão para Dirigir.",
                    "D) aplicar a penalidade de cassação do documento de habilitação.",
                    "E) fiscalizar o trânsito nas vias urbanas."
                ],
                "correta": 0,
                "comentario": "As JARI funcionam junto a cada órgão autuador e julgam, em primeira instância, os recursos contra penalidades (art. 17 do CTB). Também solicitam informações e encaminham dados para melhorar a fiscalização."
            },
            {
                "id": 5003,
                "enunciado": "O órgão máximo executivo de trânsito da União, integrante do Sistema Nacional de Trânsito, é atualmente denominado:",
                "opcoes": [
                    "A) Secretaria Nacional de Trânsito (Senatran).",
                    "B) Departamento Estadual de Trânsito (Detran).",
                    "C) Conselho Estadual de Trânsito (Cetran).",
                    "D) Conselho Nacional de Trânsito (Contran).",
                    "E) Junta Administrativa de Recursos de Infrações (JARI)."
                ],
                "correta": 0,
                "comentario": "O antigo Denatran passou a se chamar Senatran em 2021. O Contran é o órgão máximo normativo e consultivo; Detran e Cetran são estaduais; as JARI julgam recursos."
            },
            {
                "id": 5004,
                "enunciado": "Compete ao órgão executivo de trânsito dos Estados (Detran), entre outras atribuições:",
                "opcoes": [
                    "A) estabelecer a Política Nacional de Trânsito.",
                    "B) julgar em última instância os recursos contra multas da União.",
                    "C) realizar o patrulhamento ostensivo nas rodovias federais.",
                    "D) implantar a sinalização nas vias municipais.",
                    "E) vistoriar, inspecionar, registrar e licenciar veículos, e expedir o documento de habilitação."
                ],
                "correta": 4,
                "comentario": "O art. 22 do CTB atribui ao Detran registro e licenciamento de veículos, habilitação de condutores, vistoria e inspeção, entre outras tarefas. A sinalização das vias municipais cabe ao órgão municipal."
            },
            {
                "id": 5005,
                "enunciado": "Para exercer as competências de trânsito previstas no art. 24 do CTB, os Municípios devem:",
                "opcoes": [
                    "A) obter autorização do Departamento de Polícia Rodoviária Federal.",
                    "B) aguardar a delegação expressa do Detran.",
                    "C) criar um Tribunal de Trânsito municipal.",
                    "D) integrar-se ao Sistema Nacional de Trânsito, conforme o art. 333 do CTB.",
                    "E) celebrar convênio obrigatório com a Polícia Militar."
                ],
                "correta": 3,
                "comentario": "O art. 24, §2º, do CTB condiciona o exercício das competências municipais à integração ao SNT, por meio de órgão ou entidade executivos de trânsito e de rodovias."
            },
            {
                "id": 5006,
                "enunciado": "Os órgãos e entidades executivos de trânsito podem celebrar convênio entre si para delegar atribuições, com vistas a:",
                "opcoes": [
                    "A) dispensar a aplicação das penalidades previstas no CTB.",
                    "B) isentar os condutores de recursos administrativos.",
                    "C) maior eficiência e segurança para os usuários da via.",
                    "D) transferir a competência legislativa sobre trânsito.",
                    "E) aumentar o valor das multas arrecadadas."
                ],
                "correta": 2,
                "comentario": "O art. 25 do CTB permite convênios de delegação de atividades previstas no Código, buscando eficiência e segurança. A competência para legislar sobre trânsito é privativa da União (art. 22, XI, da CF) e não se delega por convênio."
            },
            {
                "id": 5007,
                "enunciado": "A competência para legislar sobre trânsito e transporte, segundo a Constituição Federal, é:",
                "opcoes": [
                    "A) privativa da União.",
                    "B) comum a todos os entes federativos.",
                    "C) residual dos Estados.",
                    "D) exclusiva dos Municípios.",
                    "E) concorrente entre União, Estados e Distrito Federal."
                ],
                "correta": 0,
                "comentario": "O art. 22, XI, da CF atribui à União a competência privativa para legislar sobre trânsito e transporte. Lei complementar pode autorizar os Estados a legislar sobre questões específicas (parágrafo único do art. 22)."
            },
            {
                "id": 5008,
                "enunciado": "Segundo o Anexo I do CTB, via é a superfície por onde transitam veículos, pessoas e animais, compreendendo:",
                "opcoes": [
                    "A) a pista, a calçada, o acostamento, a ilha e o canteiro central.",
                    "B) somente a pista de rolamento.",
                    "C) a pista e o acostamento, excluídas as calçadas.",
                    "D) apenas as áreas sinalizadas pelo órgão de trânsito.",
                    "E) a pista, a faixa de domínio e os lotes lindeiros."
                ],
                "correta": 0,
                "comentario": "A definição de via abrange pista, calçada, acostamento, ilha e canteiro central. Os lotes lindeiros são propriedades vizinhas à via, e não parte dela."
            },
            {
                "id": 5009,
                "enunciado": "De acordo com o CTB, a imobilização do veículo com a finalidade e pelo tempo estritamente necessário para efetuar embarque ou desembarque de passageiros denomina-se:",
                "opcoes": [
                    "A) estacionamento.",
                    "B) operação de carga e descarga.",
                    "C) retenção.",
                    "D) parada.",
                    "E) remoção."
                ],
                "correta": 3,
                "comentario": "Parada é a imobilização breve para embarque ou desembarque. Estacionamento é a imobilização por tempo superior a esse. Retenção e remoção são medidas administrativas."
            },
            {
                "id": 5010,
                "enunciado": "Segundo o CTB, ciclomotor é o veículo de duas ou três rodas, com motor de combustão de cilindrada não superior a 50 cm³ (ou elétrico de até 4 kW), cuja velocidade máxima de fabricação não exceda:",
                "opcoes": [
                    "A) 25 km/h",
                    "B) 30 km/h",
                    "C) 80 km/h",
                    "D) 50 km/h",
                    "E) 60 km/h"
                ],
                "correta": 3,
                "comentario": "O Anexo I define ciclomotor com cilindrada de até 50 cm³ (ou motor elétrico de até 4 kW) e velocidade máxima de fabricação de até 50 km/h. Para conduzi-lo é exigida a ACC ou a categoria A."
            },
            {
                "id": 5011,
                "enunciado": "Peso Bruto Total (PBT), segundo o CTB, é:",
                "opcoes": [
                    "A) o peso máximo que cada eixo pode transmitir ao pavimento.",
                    "B) apenas o peso da carga transportada.",
                    "C) o peso do veículo vazio, sem combustível.",
                    "D) o peso do veículo trator somado ao do reboque, sem a carga.",
                    "E) o peso máximo que o veículo transmite ao pavimento, constituído da soma da tara mais a lotação."
                ],
                "correta": 4,
                "comentario": "PBT = tara (peso próprio do veículo com equipamentos, combustível etc.) + lotação (carga útil máxima, incluindo condutor e passageiros). O limite por eixo é outro conceito."
            },
            {
                "id": 5012,
                "enunciado": "Segundo o CTB, a via rural pavimentada denomina-se:",
                "opcoes": [
                    "A) via de trânsito rápido.",
                    "B) via arterial.",
                    "C) estrada.",
                    "D) rodovia.",
                    "E) via coletora."
                ],
                "correta": 3,
                "comentario": "As vias rurais dividem-se em rodovias (pavimentadas) e estradas (não pavimentadas). Arterial, coletora, local e de trânsito rápido são classificações das vias urbanas."
            },
            {
                "id": 5013,
                "enunciado": "A via urbana caracterizada por acessos especiais com trânsito livre, sem interseções em nível, sem acessibilidade direta aos lotes lindeiros e sem travessia de pedestres em nível é a:",
                "opcoes": [
                    "A) via de trânsito rápido.",
                    "B) via coletora.",
                    "C) via local.",
                    "D) estrada.",
                    "E) via arterial."
                ],
                "correta": 0,
                "comentario": "A via de trânsito rápido não tem cruzamentos em nível nem acesso direto aos lotes. A arterial tem interseções em nível, geralmente semaforizadas; a coletora distribui o trânsito; a local dá acesso a áreas restritas."
            },
            {
                "id": 5014,
                "enunciado": "Canteiro central, segundo o CTB, é:",
                "opcoes": [
                    "A) o obstáculo físico construído como separador de duas pistas de rolamento.",
                    "B) a sinalização pintada que separa fluxos opostos.",
                    "C) a área destinada exclusivamente à circulação de pedestres.",
                    "D) a faixa lateral destinada à parada de veículos em emergência.",
                    "E) o espaço entre a pista e a faixa de domínio."
                ],
                "correta": 0,
                "comentario": "O canteiro central é um separador físico entre pistas, podendo ser substituído por marcas viárias (canteiro fictício). A faixa para emergência é o acostamento; a área de pedestres, a calçada."
            },
            {
                "id": 5015,
                "enunciado": "Em um cruzamento não sinalizado entre duas vias urbanas comuns, sem rotatória, tem preferência de passagem, segundo o art. 29, III, do CTB:",
                "opcoes": [
                    "A) o veículo que vier pela esquerda do condutor.",
                    "B) o veículo de maior porte.",
                    "C) o veículo que chegar ao cruzamento por último.",
                    "D) o veículo que estiver em maior velocidade.",
                    "E) o veículo que vier pela direita do condutor."
                ],
                "correta": 4,
                "comentario": "Sem sinalização, a preferência é: de quem circula pela rodovia, no encontro com outra via; de quem circula pela rotatória; nos demais casos, de quem vem pela direita."
            },
            {
                "id": 5016,
                "enunciado": "Em uma rotatória sem sinalização específica, a preferência de passagem é:",
                "opcoes": [
                    "A) do veículo de transporte de carga.",
                    "B) de quem sinalizar primeiro com a buzina.",
                    "C) do veículo que vier pela direita, sempre.",
                    "D) do veículo que pretende entrar na rotatória.",
                    "E) do veículo que estiver circulando por ela."
                ],
                "correta": 4,
                "comentario": "O art. 29, III, 'b', do CTB dá preferência a quem já está na rotatória. A regra da direita só vale para os demais casos não sinalizados."
            },
            {
                "id": 5017,
                "enunciado": "Sobre a ultrapassagem, o CTB estabelece como regra que ela deve ser feita:",
                "opcoes": [
                    "A) por qualquer lado, desde que com o uso da buzina.",
                    "B) pela direita, sempre que houver espaço suficiente no acostamento.",
                    "C) pela esquerda, obedecida a sinalização regulamentar e as demais normas, exceto quando o veículo a ser ultrapassado sinalizar que vai entrar à esquerda.",
                    "D) pela direita em rodovias e pela esquerda em vias urbanas.",
                    "E) somente em vias de trânsito rápido."
                ],
                "correta": 2,
                "comentario": "O art. 29, IX, determina a ultrapassagem pela esquerda. Quando o veículo da frente indicar que vai entrar à esquerda, a ultrapassagem pode ser feita pela direita."
            },
            {
                "id": 5018,
                "enunciado": "Segundo o art. 32 do CTB, em vias de duplo sentido e pista única, é proibido ultrapassar, salvo sinalização que permita:",
                "opcoes": [
                    "A) em curvas e aclives sem visibilidade suficiente, em passagens de nível, pontes, viadutos e travessias de pedestres.",
                    "B) em qualquer trecho de rodovia federal, durante o dia.",
                    "C) em retas com boa visibilidade e sinalização de faixa seccionada.",
                    "D) veículos que trafeguem abaixo da velocidade máxima da via.",
                    "E) veículos de duas rodas, em qualquer situação."
                ],
                "correta": 0,
                "comentario": "O art. 32 lista os locais de risco onde a ultrapassagem é proibida. Em retas com visibilidade e faixa seccionada, a ultrapassagem é permitida, com cuidado."
            },
            {
                "id": 5019,
                "enunciado": "O veículo que vai ser ultrapassado deve, segundo o CTB:",
                "opcoes": [
                    "A) acelerar para concluir rapidamente a manobra do outro veículo.",
                    "B) frear bruscamente para facilitar a ultrapassagem.",
                    "C) sinalizar com farol alto para autorizar a ultrapassagem.",
                    "D) manter-se na sua faixa, sem acelerar a marcha, e, se estiver na faixa da esquerda, deslocar-se para a da direita.",
                    "E) deslocar-se para o acostamento em qualquer situação."
                ],
                "correta": 3,
                "comentario": "O art. 30 do CTB obriga o condutor ultrapassado a não acelerar e, se estiver na faixa da esquerda, a se deslocar para a direita, facilitando a manobra."
            },
            {
                "id": 5020,
                "enunciado": "Em relação ao uso dos faróis, o CTB determina que o condutor mantenha a luz baixa acesa:",
                "opcoes": [
                    "A) durante o dia, em qualquer via urbana iluminada.",
                    "B) somente quando o veículo estiver parado.",
                    "C) apenas nas vias urbanas sem iluminação pública.",
                    "D) apenas em veículos de carga.",
                    "E) à noite e, mesmo durante o dia, em túneis e sob chuva, neblina ou cerração."
                ],
                "correta": 4,
                "comentario": "O art. 40, I, do CTB exige farol baixo à noite e, de dia, em túneis e sob chuva, neblina ou cerração. Após a Lei 14.071/2020, nas rodovias de pista simples fora do perímetro urbano, a exigência diurna vale para veículos sem luz de rodagem diurna (DRL)."
            },
            {
                "id": 5021,
                "enunciado": "Segundo o art. 41 do CTB, o condutor de veículo só poderá fazer uso de buzina:",
                "opcoes": [
                    "A) livremente entre 22h e 6h.",
                    "B) em toque breve, como advertência necessária para evitar acidentes, e fora das áreas e horários proibidos.",
                    "C) sempre que o semáforo ficar verde.",
                    "D) para cumprimentar outros condutores.",
                    "E) em toque longo, para apressar o veículo da frente."
                ],
                "correta": 1,
                "comentario": "A buzina deve ser usada em toque breve, apenas para advertências necessárias, sendo proibida entre 22h e 6h e em locais sinalizados."
            },
            {
                "id": 5022,
                "enunciado": "Quando o veículo ficar imobilizado temporariamente na via em situação de emergência, o condutor deve, segundo o CTB:",
                "opcoes": [
                    "A) acionar a buzina continuamente.",
                    "B) providenciar a imediata sinalização de advertência, conforme estabelecido pelo Contran.",
                    "C) empurrar o veículo para a contramão.",
                    "D) manter apenas o pisca-alerta desligado para economizar bateria.",
                    "E) abandonar o veículo e procurar ajuda, sem sinalizar."
                ],
                "correta": 1,
                "comentario": "O art. 46 exige sinalização de advertência (como o triângulo e o pisca-alerta) sempre que o veículo for imobilizado na via em emergência."
            },
            {
                "id": 5023,
                "enunciado": "Segundo o art. 58 do CTB, a circulação de bicicletas, em vias urbanas e rurais de pista dupla sem ciclovia, ciclofaixa ou acostamento, deve ocorrer:",
                "opcoes": [
                    "A) na faixa da esquerda, para maior visibilidade.",
                    "B) nas calçadas, em qualquer situação.",
                    "C) nos bordos da pista, no mesmo sentido de circulação regulamentado para a via, com preferência sobre os veículos automotores.",
                    "D) apenas durante o dia e no acostamento de outra via.",
                    "E) no centro da pista, em sentido contrário ao dos veículos."
                ],
                "correta": 2,
                "comentario": "A bicicleta circula pelos bordos da pista, no mesmo sentido da via, e tem preferência sobre veículos automotores quando não houver ciclovia, ciclofaixa ou acostamento."
            },
            {
                "id": 5024,
                "enunciado": "Nas vias rurais sem acostamento, a circulação de pedestres na pista de rolamento, segundo o art. 68 do CTB, deve ser feita:",
                "opcoes": [
                    "A) em grupo, lado a lado, no sentido dos veículos.",
                    "B) pelo centro da pista, no mesmo sentido dos veículos.",
                    "C) pelos bordos da pista, em fila única, em sentido contrário ao deslocamento de veículos.",
                    "D) pelo canteiro central, em qualquer caso.",
                    "E) somente durante a noite."
                ],
                "correta": 2,
                "comentario": "Andar em sentido contrário ao dos veículos permite ao pedestre ver quem se aproxima. A circulação é em fila única, pelos bordos, salvo em locais proibidos pela sinalização."
            },
            {
                "id": 5025,
                "enunciado": "Os pedestres que estiverem atravessando a via sobre as faixas delimitadas para esse fim terão prioridade de passagem, segundo o art. 70 do CTB:",
                "opcoes": [
                    "A) somente durante o período noturno.",
                    "B) exceto nos locais com sinalização semafórica, onde devem ser respeitadas as indicações das luzes.",
                    "C) apenas em vias rurais.",
                    "D) em qualquer local, inclusive com o semáforo vermelho para o pedestre.",
                    "E) somente se forem idosos ou pessoas com deficiência."
                ],
                "correta": 1,
                "comentario": "Na faixa sem semáforo, o pedestre tem prioridade. Onde há semáforo, valem as indicações das luzes, para pedestres e veículos."
            },
            {
                "id": 5026,
                "enunciado": "De acordo com o art. 64 do CTB, crianças com idade inferior a 10 anos que não tenham atingido 1,45 m de altura devem ser transportadas:",
                "opcoes": [
                    "A) no banco dianteiro, apenas em trajetos curtos.",
                    "B) no colo de um adulto, no banco traseiro.",
                    "C) em qualquer banco, desde que haja airbag.",
                    "D) no banco dianteiro, sempre com cinto de três pontos.",
                    "E) nos bancos traseiros, em dispositivo de retenção adequado ao peso e à altura, salvo exceções regulamentadas pelo Contran."
                ],
                "correta": 4,
                "comentario": "A Lei 14.071/2020 incorporou ao CTB o critério de idade (até 10 anos) e altura (1,45 m) para o uso do dispositivo de retenção no banco traseiro. Transportar crianças sem observar essas regras é infração gravíssima (art. 168)."
            },
            {
                "id": 5027,
                "enunciado": "Segundo o art. 89 do CTB, a ordem de prevalência da sinalização é:",
                "opcoes": [
                    "A) normas de circulação, placas e semáforo.",
                    "B) indicações do semáforo, ordens do agente e placas.",
                    "C) ordens do agente de trânsito, indicações do semáforo e demais sinais, nessa ordem, sobre as normas de circulação.",
                    "D) marcas viárias, placas e ordens do agente.",
                    "E) placas de regulamentação, semáforo e ordens do agente."
                ],
                "correta": 2,
                "comentario": "As ordens do agente prevalecem sobre as normas de circulação e outros sinais; as indicações do semáforo, sobre os demais sinais; e os sinais, sobre as demais normas de trânsito."
            },
            {
                "id": 5028,
                "enunciado": "As placas de regulamentação, como regra geral, têm formato:",
                "opcoes": [
                    "A) circular, com fundo amarelo e orla preta.",
                    "B) triangular, com fundo azul.",
                    "C) quadrado, com fundo amarelo e diagonal vertical.",
                    "D) circular, com fundo branco e orla vermelha, exceto as placas 'Parada obrigatória' (octogonal) e 'Dê a preferência' (triangular).",
                    "E) retangular, com fundo verde."
                ],
                "correta": 3,
                "comentario": "Regulamentação: circulares, fundo branco e orla vermelha (com as duas exceções de forma). Advertência: quadradas com diagonal na vertical e fundo amarelo. Indicação: retangulares, em cores diversas."
            },
            {
                "id": 5029,
                "enunciado": "A placa de 'Parada obrigatória' (R-1) tem formato:",
                "opcoes": [
                    "A) circular, com fundo branco.",
                    "B) retangular, com fundo azul.",
                    "C) octogonal, com fundo vermelho.",
                    "D) quadrado, com fundo amarelo.",
                    "E) triangular, com o vértice para baixo."
                ],
                "correta": 2,
                "comentario": "O formato octogonal é exclusivo da R-1, para que seja reconhecida mesmo de costas ou coberta. A R-2 ('Dê a preferência') é triangular, com o vértice para baixo."
            },
            {
                "id": 5030,
                "enunciado": "Nas marcas viárias longitudinais, a cor amarela é utilizada para:",
                "opcoes": [
                    "A) separar fluxos de sentidos opostos.",
                    "B) indicar áreas de estacionamento regulamentado.",
                    "C) delimitar ciclofaixas.",
                    "D) separar fluxos de mesmo sentido.",
                    "E) indicar faixas exclusivas de ônibus no mesmo sentido."
                ],
                "correta": 0,
                "comentario": "Pela regulamentação do Contran, a cor amarela separa movimentos opostos; a branca, movimentos de mesmo sentido, além de delimitar áreas de circulação."
            },
            {
                "id": 5031,
                "enunciado": "Em uma via de mão dupla, a linha dupla contínua amarela no centro da pista indica que:",
                "opcoes": [
                    "A) a ultrapassagem é permitida apenas para veículos leves.",
                    "B) a ultrapassagem é permitida para os dois sentidos.",
                    "C) o estacionamento é permitido no centro da pista.",
                    "D) é proibida a ultrapassagem e o deslocamento lateral para os dois sentidos.",
                    "E) a via é de sentido único."
                ],
                "correta": 3,
                "comentario": "A linha dupla contínua proíbe a transposição nos dois sentidos. Ultrapassar transpondo essa marcação é infração gravíssima com multa multiplicada por cinco (art. 203, V)."
            },
            {
                "id": 5032,
                "enunciado": "Segundo o Anexo II do CTB, o gesto do agente de trânsito com o braço levantado verticalmente e a palma da mão para a frente significa:",
                "opcoes": [
                    "A) ordem de diminuir a velocidade.",
                    "B) ordem de parada para todos os veículos, exceto os que já estiverem no cruzamento.",
                    "C) ordem de seguir para os veículos que vêm de frente.",
                    "D) permissão para conversão à esquerda.",
                    "E) ordem de parada apenas para pedestres."
                ],
                "correta": 1,
                "comentario": "O braço levantado verticalmente, com a palma para a frente, determina parada a todos os veículos que venham de direções que cortem o trânsito, salvo os que já estejam no cruzamento."
            },
            {
                "id": 5033,
                "enunciado": "Nos sinais sonoros emitidos pelo apito do agente de trânsito, dois silvos breves significam:",
                "opcoes": [
                    "A) pare.",
                    "B) acenda as lanternas.",
                    "C) diminua a marcha.",
                    "D) siga.",
                    "E) estacione."
                ],
                "correta": 0,
                "comentario": "Pelo Anexo II do CTB: um silvo breve significa 'siga'; dois silvos breves, 'pare'; um silvo longo, 'diminua a marcha'."
            },
            {
                "id": 5034,
                "enunciado": "Onde não existir sinalização regulamentadora, a velocidade máxima permitida para automóveis em rodovias de pista simples é de:",
                "opcoes": [
                    "A) 80 km/h",
                    "B) 90 km/h",
                    "C) 100 km/h",
                    "D) 120 km/h",
                    "E) 110 km/h"
                ],
                "correta": 2,
                "comentario": "Pelo art. 61 do CTB (redação da Lei 13.281/2016), em rodovias de pista simples o limite é de 100 km/h para automóveis, camionetas e motocicletas e de 90 km/h para os demais veículos. Em pista dupla, 110 e 90 km/h."
            },
            {
                "id": 5035,
                "enunciado": "Onde não existir sinalização regulamentadora, a velocidade máxima permitida em uma via urbana arterial é de:",
                "opcoes": [
                    "A) 80 km/h",
                    "B) 50 km/h",
                    "C) 60 km/h",
                    "D) 30 km/h",
                    "E) 40 km/h"
                ],
                "correta": 2,
                "comentario": "Em vias urbanas: 80 km/h nas de trânsito rápido, 60 km/h nas arteriais, 40 km/h nas coletoras e 30 km/h nas locais (art. 61, §1º, I)."
            },
            {
                "id": 5036,
                "enunciado": "Em uma estrada (via rural não pavimentada), sem sinalização regulamentadora, a velocidade máxima é de:",
                "opcoes": [
                    "A) 100 km/h",
                    "B) 60 km/h",
                    "C) 80 km/h",
                    "D) 90 km/h",
                    "E) 40 km/h"
                ],
                "correta": 1,
                "comentario": "O art. 61, §1º, II, 'b', do CTB fixa 60 km/h para as estradas."
            },
            {
                "id": 5037,
                "enunciado": "Segundo o art. 62 do CTB, a velocidade mínima em uma via não poderá ser inferior a:",
                "opcoes": [
                    "A) 80% da velocidade máxima da via.",
                    "B) 40 km/h em qualquer via.",
                    "C) um terço da velocidade máxima da via.",
                    "D) 30 km/h nas rodovias.",
                    "E) metade da velocidade máxima estabelecida, respeitadas as condições operacionais de trânsito e da via."
                ],
                "correta": 4,
                "comentario": "Transitar abaixo da metade da velocidade máxima, salvo condições adversas, atrapalha o fluxo e é infração média (art. 219)."
            },
            {
                "id": 5038,
                "enunciado": "Um condutor foi flagrado a 95 km/h em uma rodovia cuja velocidade máxima é 80 km/h. A infração cometida é de natureza:",
                "opcoes": [
                    "A) gravíssima, com suspensão do direito de dirigir.",
                    "B) gravíssima, por exceder em mais de 50%.",
                    "C) média, por exceder em até 20% a velocidade máxima.",
                    "D) grave, por exceder entre 20% e 50%.",
                    "E) leve, por exceder em menos de 10 km/h."
                ],
                "correta": 2,
                "comentario": "O excesso foi de 15 km/h sobre 80 km/h, ou seja, 18,75%, dentro da faixa de até 20%: infração média (art. 218, I). Entre 20% e 50% é grave; acima de 50%, gravíssima com multa x3 e suspensão."
            },
            {
                "id": 5039,
                "enunciado": "O condutor que transitar em velocidade superior à máxima permitida em mais de 50% comete infração:",
                "opcoes": [
                    "A) grave, apenas com multa.",
                    "B) gravíssima, com multa simples e sem suspensão.",
                    "C) gravíssima, com multa multiplicada por três e suspensão do direito de dirigir.",
                    "D) leve, com retenção do veículo.",
                    "E) média, com advertência por escrito."
                ],
                "correta": 2,
                "comentario": "O art. 218, III, do CTB prevê infração gravíssima, multa (três vezes) e suspensão imediata do direito de dirigir para excessos acima de 50%."
            },
            {
                "id": 5040,
                "enunciado": "Segundo o art. 140 do CTB, para se habilitar o candidato deve preencher, entre outros, os requisitos de:",
                "opcoes": [
                    "A) ter residência no mesmo município do Detran.",
                    "B) comprovar renda mínima.",
                    "C) possuir veículo registrado em seu nome.",
                    "D) ter ensino médio completo e ser maior de 21 anos.",
                    "E) ser penalmente imputável, saber ler e escrever e possuir documento de identidade."
                ],
                "correta": 4,
                "comentario": "Os três requisitos do art. 140 são: imputabilidade penal (18 anos), saber ler e escrever e possuir carteira de identidade ou equivalente."
            },
            {
                "id": 5041,
                "enunciado": "A Permissão para Dirigir é conferida ao candidato aprovado nos exames de habilitação e tem validade de:",
                "opcoes": [
                    "A) cinco anos.",
                    "B) dez anos.",
                    "C) seis meses.",
                    "D) um ano.",
                    "E) dois anos."
                ],
                "correta": 3,
                "comentario": "O art. 148, §2º, do CTB fixa validade de um ano. Ao final, o condutor recebe a CNH definitiva, se cumprir os requisitos do §3º."
            },
            {
                "id": 5042,
                "enunciado": "Ao término do prazo da Permissão para Dirigir, o condutor receberá a CNH desde que:",
                "opcoes": [
                    "A) tenha cometido no máximo duas infrações gravíssimas.",
                    "B) não tenha cometido nenhuma infração de qualquer natureza.",
                    "C) tenha feito curso de direção defensiva adicional.",
                    "D) tenha pago todas as multas, independentemente da natureza.",
                    "E) não tenha cometido nenhuma infração de natureza grave ou gravíssima, nem seja reincidente em infração média."
                ],
                "correta": 4,
                "comentario": "O art. 148, §3º, admite apenas infrações leves ou uma única média durante a permissão. Caso contrário, o candidato precisa reiniciar o processo de habilitação (§4º)."
            },
            {
                "id": 5043,
                "enunciado": "A categoria de habilitação exigida para conduzir veículo de transporte de passageiros cuja lotação exceda oito lugares, excluído o motorista, é a:",
                "opcoes": [
                    "A) D",
                    "B) E apenas",
                    "C) A",
                    "D) C",
                    "E) B"
                ],
                "correta": 0,
                "comentario": "Pelo art. 143, a categoria D destina-se ao transporte de passageiros com lotação acima de oito lugares, excluído o motorista. A categoria E abrange combinações de veículos."
            },
            {
                "id": 5044,
                "enunciado": "Para se habilitar na categoria D, o condutor deve, entre outros requisitos, ser maior de 21 anos e estar habilitado:",
                "opcoes": [
                    "A) no mínimo há dois anos na categoria B, ou no mínimo há um ano na categoria C.",
                    "B) há qualquer tempo em qualquer categoria.",
                    "C) no mínimo há cinco anos na categoria B.",
                    "D) no mínimo há seis meses na categoria C.",
                    "E) no mínimo há um ano na categoria A."
                ],
                "correta": 0,
                "comentario": "O art. 145, II, 'a', exige dois anos na B ou um ano na C para a categoria D; para a E, um ano na C. Também é exigido curso especializado e de treinamento de prática veicular."
            },
            {
                "id": 5045,
                "enunciado": "A categoria de habilitação que permite conduzir combinação de veículos em que a unidade acoplada tenha 6.000 kg ou mais de peso bruto total é a:",
                "opcoes": [
                    "A) A",
                    "B) E",
                    "C) B",
                    "D) C",
                    "E) D"
                ],
                "correta": 1,
                "comentario": "A categoria E (art. 143, V) abrange combinações em que a unidade acoplada, reboque, semirreboque, trailer ou articulada tenha 6.000 kg ou mais de PBT, ou lotação superior a oito lugares."
            },
            {
                "id": 5046,
                "enunciado": "Segundo o art. 147, §2º, do CTB (redação da Lei 14.071/2020), o exame de aptidão física e mental do condutor com idade inferior a 50 anos deve ser renovado a cada:",
                "opcoes": [
                    "A) 3 anos",
                    "B) 5 anos",
                    "C) 2 anos",
                    "D) 8 anos",
                    "E) 10 anos"
                ],
                "correta": 4,
                "comentario": "A validade é de 10 anos para menores de 50 anos, 5 anos para quem tem de 50 a menos de 70 anos e 3 anos para quem tem 70 anos ou mais."
            },
            {
                "id": 5047,
                "enunciado": "Um condutor de 72 anos deve renovar o exame de aptidão física e mental a cada:",
                "opcoes": [
                    "A) 10 anos",
                    "B) 3 anos",
                    "C) 2 anos",
                    "D) 1 ano",
                    "E) 5 anos"
                ],
                "correta": 1,
                "comentario": "Para condutores com 70 anos ou mais, a renovação é a cada 3 anos (art. 147, §2º, III, do CTB)."
            },
            {
                "id": 5048,
                "enunciado": "O exame toxicológico de larga janela de detecção, previsto no art. 148-A do CTB, é exigido dos condutores das categorias:",
                "opcoes": [
                    "A) somente D.",
                    "B) B, C e D.",
                    "C) A e B.",
                    "D) C, D e E.",
                    "E) todas as categorias."
                ],
                "correta": 3,
                "comentario": "O exame é obrigatório para obtenção e renovação nas categorias C, D e E, e periodicamente (a cada 2 anos e 6 meses) para condutores com menos de 70 anos nessas categorias."
            },
            {
                "id": 5049,
                "enunciado": "A Autorização para Conduzir Ciclomotor (ACC) habilita o condutor a dirigir:",
                "opcoes": [
                    "A) triciclos de qualquer cilindrada.",
                    "B) motocicletas de até 125 cm³.",
                    "C) automóveis de até 3.500 kg.",
                    "D) quadriciclos e motonetas acima de 50 cm³.",
                    "E) ciclomotores."
                ],
                "correta": 4,
                "comentario": "A ACC é exclusiva para ciclomotores (até 50 cm³ ou elétricos de até 4 kW e 50 km/h). A categoria A também permite conduzi-los, mas a ACC não permite motocicletas."
            },
            {
                "id": 5050,
                "enunciado": "Segundo o CTB, o condutor que dirigir veículo sem possuir Carteira Nacional de Habilitação, Permissão para Dirigir ou Autorização para Conduzir Ciclomotor comete infração:",
                "opcoes": [
                    "A) gravíssima, com cassação imediata do direito de dirigir.",
                    "B) grave, com multa simples.",
                    "C) leve, sem medida administrativa.",
                    "D) média, com advertência por escrito.",
                    "E) gravíssima, com multa multiplicada por três, e o veículo fica retido até a apresentação de condutor habilitado."
                ],
                "correta": 4,
                "comentario": "O art. 162, I, prevê infração gravíssima com multa x3 e retenção do veículo. Se a conduta gerar perigo de dano, também pode configurar o crime do art. 309."
            },
            {
                "id": 5051,
                "enunciado": "Aquele que permite, confia ou entrega a direção de veículo a pessoa não habilitada fica sujeito, administrativamente:",
                "opcoes": [
                    "A) somente a curso de reciclagem.",
                    "B) às mesmas penalidades e medidas administrativas previstas para quem dirige sem habilitação.",
                    "C) apenas a advertência por escrito.",
                    "D) a nenhuma penalidade, pois não estava dirigindo.",
                    "E) a multa leve."
                ],
                "correta": 1,
                "comentario": "O art. 163 do CTB remete às penalidades do art. 162. Além disso, a conduta pode configurar o crime do art. 310 do CTB."
            },
            {
                "id": 5052,
                "enunciado": "A cassação do documento de habilitação ocorre, entre outras hipóteses, quando o condutor:",
                "opcoes": [
                    "A) cometer uma infração média pela primeira vez.",
                    "B) deixar de renovar o exame médico no prazo.",
                    "C) atingir 20 pontos sem nenhuma infração gravíssima.",
                    "D) estiver com o direito de dirigir suspenso e conduzir qualquer veículo.",
                    "E) receber advertência por escrito."
                ],
                "correta": 3,
                "comentario": "O art. 263 prevê cassação quando o condutor suspenso dirige, quando reincide em 12 meses em infrações específicas (como as dos arts. 165, 173, 174 e 175) e quando é condenado por crime de trânsito."
            },
            {
                "id": 5053,
                "enunciado": "Decorridos dois anos da cassação da CNH, o infrator poderá requerer sua reabilitação, submetendo-se:",
                "opcoes": [
                    "A) somente ao curso de reciclagem.",
                    "B) a nenhum exame, bastando requerer.",
                    "C) somente ao pagamento das multas pendentes.",
                    "D) a todos os exames necessários à habilitação, na forma estabelecida pelo Contran.",
                    "E) apenas ao exame médico."
                ],
                "correta": 3,
                "comentario": "O art. 263, §2º, exige que o reabilitando refaça os exames de habilitação após o prazo de dois anos."
            },
            {
                "id": 5054,
                "enunciado": "O porte da Permissão para Dirigir ou da CNH é obrigatório quando o condutor estiver à direção do veículo. A CNH Digital, emitida pelos meios oficiais:",
                "opcoes": [
                    "A) não é aceita em rodovias federais.",
                    "B) tem o mesmo valor jurídico do documento físico e pode ser apresentada à fiscalização.",
                    "C) serve apenas como comprovante provisório por 30 dias.",
                    "D) só vale acompanhada da versão em papel.",
                    "E) só é válida para a categoria B."
                ],
                "correta": 1,
                "comentario": "A CNH Digital, emitida pela Senatran nos aplicativos oficiais, tem o mesmo valor do documento físico. A Lei 15.428/2026 reforçou a opção pela versão física ou digital, com fé pública."
            },
            {
                "id": 5055,
                "enunciado": "Segundo o CTB, todo veículo automotor, elétrico, articulado, reboque ou semirreboque, para transitar na via, deverá ser licenciado:",
                "opcoes": [
                    "A) a cada dois anos, pela PRF.",
                    "B) somente no ano da compra.",
                    "C) a cada cinco anos, pela Senatran.",
                    "D) apenas quando for transferido de proprietário.",
                    "E) anualmente, pelo órgão executivo de trânsito do Estado ou do Distrito Federal onde estiver registrado."
                ],
                "correta": 4,
                "comentario": "O licenciamento é anual (art. 130 do CTB) e comprova que o veículo está em condições legais de circular. Conduzir veículo não licenciado é infração gravíssima, com remoção (art. 230, V)."
            },
            {
                "id": 5056,
                "enunciado": "O extintor de incêndio, segundo a regulamentação do Contran vigente desde 2015, é:",
                "opcoes": [
                    "A) obrigatório para todos os veículos, inclusive motocicletas.",
                    "B) proibido em automóveis de passeio.",
                    "C) facultativo para automóveis, utilitários, camionetas, caminhonetes e triciclos de cabine fechada.",
                    "D) obrigatório apenas para automóveis com mais de dez anos.",
                    "E) facultativo para caminhões e ônibus."
                ],
                "correta": 2,
                "comentario": "A Resolução Contran nº 556/2015 tornou o extintor facultativo para esses veículos. Ele continua obrigatório para caminhões, ônibus, micro-ônibus e veículos de transporte de produtos perigosos, entre outros."
            },
            {
                "id": 5057,
                "enunciado": "São equipamentos obrigatórios dos automóveis, entre outros:",
                "opcoes": [
                    "A) GPS e câmera de ré.",
                    "B) extintor de incêndio e kit de primeiros socorros.",
                    "C) rádio comunicador e sirene.",
                    "D) cinto de segurança, triângulo de sinalização, macaco e chave de roda (salvo veículos com pneus que dispensem estepe).",
                    "E) faróis de neblina e engate."
                ],
                "correta": 3,
                "comentario": "Cinto, triângulo, macaco, chave de roda e estepe (ou pneus run flat) estão entre os itens obrigatórios. Câmera de ré, GPS e faróis de neblina não são exigidos para automóveis em geral."
            },
            {
                "id": 5058,
                "enunciado": "Em caso de transferência de propriedade, o novo proprietário deve adotar as providências para a expedição do novo Certificado de Registro de Veículo no prazo de:",
                "opcoes": [
                    "A) 90 dias.",
                    "B) 60 dias.",
                    "C) 1 ano.",
                    "D) 30 dias.",
                    "E) 10 dias."
                ],
                "correta": 3,
                "comentario": "O art. 123, §1º, do CTB fixa 30 dias. Deixar de fazê-lo é infração grave, com retenção do veículo para regularização (art. 233)."
            },
            {
                "id": 5059,
                "enunciado": "O condutor que exerce atividade remunerada ao veículo terá o direito de dirigir suspenso, pelo sistema de pontos, ao atingir:",
                "opcoes": [
                    "A) 50 pontos no período de 24 meses.",
                    "B) 10 pontos por mês.",
                    "C) 40 pontos no período de 12 meses, independentemente da natureza das infrações.",
                    "D) 20 pontos, se tiver duas infrações gravíssimas.",
                    "E) 30 pontos, em qualquer caso."
                ],
                "correta": 2,
                "comentario": "Após a Lei 14.071/2020, os limites são 20, 30 ou 40 pontos conforme o número de infrações gravíssimas. Para quem exerce atividade remunerada, o limite é de 40 pontos, qualquer que seja a natureza das infrações (art. 261, §5º)."
            },
            {
                "id": 5060,
                "enunciado": "A suspensão do direito de dirigir por atingir o limite de pontos será aplicada, para condutores não reincidentes no período de 12 meses, pelo prazo de:",
                "opcoes": [
                    "A) 1 a 3 meses.",
                    "B) 8 meses a 2 anos.",
                    "C) 30 dias, fixo.",
                    "D) 6 meses a 1 ano.",
                    "E) 2 a 5 anos."
                ],
                "correta": 3,
                "comentario": "O art. 261, I, prevê suspensão de 6 meses a 1 ano. No caso de reincidência no período de 12 meses, o prazo é de 8 meses a 2 anos."
            },
            {
                "id": 5061,
                "enunciado": "Segundo o art. 256 do CTB, NÃO constitui penalidade de trânsito:",
                "opcoes": [
                    "A) a advertência por escrito.",
                    "B) a frequência obrigatória em curso de reciclagem.",
                    "C) a retenção do veículo.",
                    "D) a suspensão do direito de dirigir.",
                    "E) a multa."
                ],
                "correta": 2,
                "comentario": "A retenção do veículo é medida administrativa (art. 269). As penalidades do art. 256 são advertência por escrito, multa, suspensão do direito de dirigir, cassação da CNH, cassação da Permissão para Dirigir e frequência obrigatória em curso de reciclagem."
            },
            {
                "id": 5062,
                "enunciado": "A penalidade de apreensão do veículo, que constava do art. 256 do CTB:",
                "opcoes": [
                    "A) aplica-se apenas a motocicletas.",
                    "B) continua aplicável a todas as infrações gravíssimas.",
                    "C) foi substituída pela cassação da CNH.",
                    "D) só pode ser aplicada pela PRF.",
                    "E) foi revogada pela Lei nº 13.281/2016."
                ],
                "correta": 4,
                "comentario": "A Lei 13.281/2016 revogou a penalidade de apreensão. Hoje existe a medida administrativa de remoção do veículo ao depósito, que é diferente."
            },
            {
                "id": 5063,
                "enunciado": "Segundo o art. 267 do CTB (redação da Lei 14.071/2020), a penalidade de advertência por escrito deverá ser imposta:",
                "opcoes": [
                    "A) somente a pedido do infrator, após pagar a multa.",
                    "B) à infração leve ou média, punível com multa, caso o infrator não tenha cometido nenhuma outra infração nos últimos 12 meses.",
                    "C) a infrações graves de condutores profissionais.",
                    "D) a qualquer infração gravíssima cometida pela primeira vez.",
                    "E) a infrações cometidas por pedestres, exclusivamente."
                ],
                "correta": 1,
                "comentario": "A Lei 14.071/2020 tornou a advertência obrigatória ('deverá ser imposta') nas infrações leves e médias, desde que não haja outra infração nos 12 meses anteriores."
            },
            {
                "id": 5064,
                "enunciado": "Dirigir o veículo segurando ou manuseando telefone celular configura, segundo o art. 252, parágrafo único, do CTB, infração:",
                "opcoes": [
                    "A) gravíssima com multa multiplicada por dez.",
                    "B) leve.",
                    "C) grave.",
                    "D) gravíssima.",
                    "E) média."
                ],
                "correta": 3,
                "comentario": "Desde a Lei 13.281/2016, segurar ou manusear o celular ao dirigir é infração gravíssima (7 pontos). Usar fones de ouvido conectados a aparelho de som ou celular continua sendo infração média."
            },
            {
                "id": 5065,
                "enunciado": "Deixar de dar preferência de passagem a pedestre que se encontre na faixa a ele destinada constitui infração:",
                "opcoes": [
                    "A) grave.",
                    "B) gravíssima.",
                    "C) média.",
                    "D) leve.",
                    "E) não é infração, apenas recomendação."
                ],
                "correta": 1,
                "comentario": "O art. 214, I, do CTB classifica como gravíssima a conduta de não dar preferência ao pedestre na faixa de travessia."
            },
            {
                "id": 5066,
                "enunciado": "Avançar o sinal vermelho do semáforo ou o de parada obrigatória constitui infração:",
                "opcoes": [
                    "A) gravíssima com multa multiplicada por cinco.",
                    "B) média.",
                    "C) grave.",
                    "D) gravíssima.",
                    "E) leve."
                ],
                "correta": 3,
                "comentario": "O art. 208 do CTB prevê infração gravíssima, com multa simples. Não há multiplicador nessa infração."
            },
            {
                "id": 5067,
                "enunciado": "Transitar com o veículo em calçadas, passeios, ciclovias, ciclofaixas, ilhas, refúgios, canteiros centrais, gramados, jardins públicos ou acostamentos é infração:",
                "opcoes": [
                    "A) grave, com retenção do veículo.",
                    "B) gravíssima, com multa multiplicada por três.",
                    "C) média.",
                    "D) leve.",
                    "E) gravíssima com suspensão do direito de dirigir."
                ],
                "correta": 1,
                "comentario": "O art. 193 do CTB prevê infração gravíssima com multa x3 para quem transita nesses locais."
            },
            {
                "id": 5068,
                "enunciado": "Ultrapassar pela contramão outro veículo em curvas, aclives ou declives sem visibilidade suficiente, em faixa de pedestres, pontes, viadutos ou onde houver linha dupla contínua é infração:",
                "opcoes": [
                    "A) média, com advertência por escrito.",
                    "B) grave, com multa simples.",
                    "C) leve, com retenção do veículo.",
                    "D) gravíssima, com multa multiplicada por cinco, e multa em dobro em caso de reincidência no período de 12 meses.",
                    "E) gravíssima, com multa multiplicada por dez e cassação imediata."
                ],
                "correta": 3,
                "comentario": "O art. 203 do CTB (redação da Lei 12.971/2014) prevê infração gravíssima, multa x5 e aplicação em dobro na reincidência em 12 meses, dado o alto risco de colisão frontal."
            },
            {
                "id": 5069,
                "enunciado": "Transitar pela contramão de direção em via com sinalização de regulamentação de sentido único de circulação é infração:",
                "opcoes": [
                    "A) gravíssima.",
                    "B) não é infração se não houver outro veículo.",
                    "C) leve.",
                    "D) média.",
                    "E) grave."
                ],
                "correta": 0,
                "comentario": "O art. 186 do CTB diferencia: contramão em via de duplo sentido é grave (inciso I); em via de sentido único sinalizado é gravíssima (inciso II)."
            },
            {
                "id": 5070,
                "enunciado": "Disputar corrida (racha) em via pública constitui infração:",
                "opcoes": [
                    "A) gravíssima, com multa multiplicada por dez, suspensão do direito de dirigir, recolhimento do documento de habilitação e remoção do veículo.",
                    "B) gravíssima, com multa multiplicada por três, apenas.",
                    "C) média, com advertência.",
                    "D) leve, se não houver vítimas.",
                    "E) grave, com multa simples."
                ],
                "correta": 0,
                "comentario": "O art. 173 do CTB prevê as sanções mais severas do Código. Em caso de reincidência em 12 meses, a multa é aplicada em dobro. Se houver risco à segurança, também pode configurar o crime do art. 308."
            },
            {
                "id": 5071,
                "enunciado": "Utilizar-se de veículo para demonstrar ou exibir manobra perigosa, mediante arrancada brusca, derrapagem ou frenagem com deslizamento ou arrastamento de pneus, é infração:",
                "opcoes": [
                    "A) média, com retenção do veículo.",
                    "B) grave, com multa simples.",
                    "C) gravíssima, com multa multiplicada por dez e suspensão do direito de dirigir.",
                    "D) leve, com advertência.",
                    "E) gravíssima, com multa simples e sem suspensão."
                ],
                "correta": 2,
                "comentario": "O art. 175 do CTB pune as manobras perigosas com o mesmo rigor do racha: multa x10, suspensão, recolhimento da CNH e remoção do veículo."
            },
            {
                "id": 5072,
                "enunciado": "O condutor envolvido em acidente com vítima que deixa de prestar ou providenciar socorro, podendo fazê-lo, comete infração:",
                "opcoes": [
                    "A) média, com advertência.",
                    "B) não comete infração administrativa, apenas crime.",
                    "C) grave, apenas com multa.",
                    "D) gravíssima, com multa multiplicada por cinco e suspensão do direito de dirigir.",
                    "E) leve, se a vítima for socorrida por terceiros."
                ],
                "correta": 3,
                "comentario": "O art. 176 do CTB prevê infração gravíssima, multa x5 e suspensão. A omissão também pode configurar o crime do art. 304."
            },
            {
                "id": 5073,
                "enunciado": "Deixar o condutor ou o passageiro de usar o cinto de segurança constitui infração:",
                "opcoes": [
                    "A) média, com recolhimento da CNH.",
                    "B) grave, com retenção do veículo até a colocação do cinto pelo infrator.",
                    "C) leve, sem medida administrativa.",
                    "D) grave, com remoção do veículo.",
                    "E) gravíssima, com multa multiplicada por três."
                ],
                "correta": 1,
                "comentario": "O art. 167 do CTB prevê infração grave e a medida administrativa de retenção do veículo até que o cinto seja colocado."
            },
            {
                "id": 5074,
                "enunciado": "Transportar criança em veículo automotor sem observar as normas de segurança especiais estabelecidas no CTB é infração:",
                "opcoes": [
                    "A) gravíssima, com remoção do veículo ao depósito.",
                    "B) grave, sem medida administrativa.",
                    "C) média, com advertência.",
                    "D) leve.",
                    "E) gravíssima, com retenção do veículo até que a irregularidade seja sanada."
                ],
                "correta": 4,
                "comentario": "O art. 168 do CTB prevê infração gravíssima e retenção do veículo até a regularização (por exemplo, colocar a criança no dispositivo de retenção adequado)."
            },
            {
                "id": 5075,
                "enunciado": "Conduzir motocicleta sem usar capacete de segurança constitui infração:",
                "opcoes": [
                    "A) leve, se o trajeto for curto.",
                    "B) gravíssima, apenas com multa.",
                    "C) gravíssima, com suspensão do direito de dirigir e recolhimento do documento de habilitação.",
                    "D) média, com advertência.",
                    "E) grave, com multa simples."
                ],
                "correta": 2,
                "comentario": "O art. 244, I, do CTB prevê infração gravíssima, multa e suspensão do direito de dirigir, com recolhimento do documento de habilitação. Transportar passageiro sem capacete tem as mesmas sanções (inciso II)."
            },
            {
                "id": 5076,
                "enunciado": "Dirigir sem atenção ou sem os cuidados indispensáveis à segurança é infração de natureza:",
                "opcoes": [
                    "A) leve.",
                    "B) grave.",
                    "C) gravíssima.",
                    "D) média.",
                    "E) gravíssima com multa multiplicada por três."
                ],
                "correta": 0,
                "comentario": "O art. 169 do CTB classifica essa conduta como leve (3 pontos)."
            },
            {
                "id": 5077,
                "enunciado": "Estacionar o veículo nas vagas reservadas às pessoas com deficiência ou aos idosos, sem credencial que comprove tal condição, é infração:",
                "opcoes": [
                    "A) não é infração em estacionamentos públicos.",
                    "B) gravíssima, com remoção do veículo.",
                    "C) média, com advertência.",
                    "D) leve.",
                    "E) grave, sem medida administrativa."
                ],
                "correta": 1,
                "comentario": "Desde a Lei 13.281/2016, o art. 181, XX, do CTB considera essa conduta gravíssima, com remoção do veículo."
            },
            {
                "id": 5078,
                "enunciado": "Estacionar o veículo nas esquinas e a menos de cinco metros do bordo do alinhamento da via transversal é infração:",
                "opcoes": [
                    "A) gravíssima.",
                    "B) média, com remoção do veículo.",
                    "C) grave.",
                    "D) leve, apenas com advertência.",
                    "E) não é infração se houver pisca-alerta ligado."
                ],
                "correta": 1,
                "comentario": "O art. 181, I, do CTB prevê infração média e remoção. O estacionamento perto da esquina reduz a visibilidade de quem cruza."
            },
            {
                "id": 5079,
                "enunciado": "Parar o veículo sobre a faixa de pedestres na mudança de sinal luminoso é infração:",
                "opcoes": [
                    "A) gravíssima com multa multiplicada por três.",
                    "B) grave.",
                    "C) gravíssima.",
                    "D) leve.",
                    "E) média."
                ],
                "correta": 4,
                "comentario": "O art. 183 do CTB prevê infração média. A parada sobre a faixa obriga o pedestre a desviar para a pista."
            },
            {
                "id": 5080,
                "enunciado": "Transpor, sem autorização, bloqueio viário policial constitui infração:",
                "opcoes": [
                    "A) gravíssima, com suspensão do direito de dirigir.",
                    "B) não é infração, apenas desobediência.",
                    "C) média.",
                    "D) leve.",
                    "E) grave, com multa simples."
                ],
                "correta": 0,
                "comentario": "O art. 210 do CTB prevê infração gravíssima e suspensão do direito de dirigir, com medidas de remoção do veículo e recolhimento do documento de habilitação."
            },
            {
                "id": 5081,
                "enunciado": "Conduzir veículo que não esteja devidamente licenciado constitui infração:",
                "opcoes": [
                    "A) não é infração se o IPVA estiver pago.",
                    "B) média, com retenção.",
                    "C) grave, sem medida administrativa.",
                    "D) leve, com advertência.",
                    "E) gravíssima, com remoção do veículo."
                ],
                "correta": 4,
                "comentario": "O art. 230, V, do CTB prevê infração gravíssima com remoção do veículo. O pagamento do IPVA, por si só, não substitui o licenciamento."
            },
            {
                "id": 5082,
                "enunciado": "Deixar de manter acesa a luz baixa durante a noite configura infração:",
                "opcoes": [
                    "A) gravíssima.",
                    "B) grave.",
                    "C) média.",
                    "D) não é infração em vias iluminadas.",
                    "E) leve."
                ],
                "correta": 2,
                "comentario": "O art. 250, I, 'a', do CTB classifica como média a conduta de não manter acesa a luz baixa à noite, mesmo em vias iluminadas."
            },
            {
                "id": 5083,
                "enunciado": "Usar o pisca-alerta com o veículo em movimento, exceto em imobilizações ou situações de emergência, constitui infração:",
                "opcoes": [
                    "A) não é infração.",
                    "B) gravíssima.",
                    "C) média.",
                    "D) leve.",
                    "E) grave."
                ],
                "correta": 2,
                "comentario": "O art. 251, I, do CTB proíbe o uso do pisca-alerta em movimento, salvo nas situações previstas, como paradas de emergência e quando a regulamentação permitir."
            },
            {
                "id": 5084,
                "enunciado": "Conduzir o veículo com o braço do lado de fora é infração:",
                "opcoes": [
                    "A) gravíssima.",
                    "B) média.",
                    "C) leve.",
                    "D) grave.",
                    "E) não é infração em vias rurais."
                ],
                "correta": 1,
                "comentario": "O art. 252, I, do CTB prevê infração média para quem dirige com o braço do lado de fora."
            },
            {
                "id": 5085,
                "enunciado": "Recusar-se a ser submetido a teste, exame clínico, perícia ou outro procedimento que permita certificar influência de álcool ou outra substância psicoativa constitui:",
                "opcoes": [
                    "A) infração leve, com advertência.",
                    "B) crime de desobediência, apenas.",
                    "C) infração média, sem suspensão.",
                    "D) infração gravíssima, com as mesmas penalidades do art. 165 (multa x10 e suspensão do direito de dirigir por 12 meses).",
                    "E) direito do condutor, sem consequência administrativa."
                ],
                "correta": 3,
                "comentario": "O art. 165-A do CTB pune a recusa com multa x10 e suspensão por 12 meses, além de recolhimento do documento e retenção do veículo. A recusa não configura, por si, crime."
            },
            {
                "id": 5086,
                "enunciado": "Dirigir sob a influência de álcool ou de qualquer outra substância psicoativa que determine dependência constitui infração:",
                "opcoes": [
                    "A) leve, se a concentração for baixa.",
                    "B) grave, com multa multiplicada por três.",
                    "C) gravíssima, com multa simples e suspensão por 1 mês.",
                    "D) gravíssima, com multa multiplicada por dez e suspensão do direito de dirigir por 12 meses.",
                    "E) média, com retenção do veículo."
                ],
                "correta": 3,
                "comentario": "O art. 165 do CTB prevê multa x10, suspensão por 12 meses, recolhimento do documento de habilitação e retenção do veículo. Na reincidência em 12 meses, a multa é aplicada em dobro."
            },
            {
                "id": 5087,
                "enunciado": "Segundo o art. 276 do CTB, sujeita o condutor às penalidades do art. 165:",
                "opcoes": [
                    "A) somente a embriaguez visível.",
                    "B) qualquer concentração de álcool por litro de sangue ou por litro de ar alveolar.",
                    "C) somente concentração acima de 0,3 mg/L de ar alveolar.",
                    "D) apenas concentração acima de 6 dg/L de sangue.",
                    "E) apenas a concentração que cause acidente."
                ],
                "correta": 1,
                "comentario": "Na esfera administrativa vale a 'tolerância zero': qualquer concentração configura a infração, respeitadas as margens de tolerância metrológica do Contran. As concentrações de 0,3 mg/L de ar ou 6 dg/L de sangue são referências para o crime do art. 306."
            },
            {
                "id": 5088,
                "enunciado": "Segundo o art. 277 do CTB, a infração de dirigir sob influência de álcool poderá ser caracterizada, além de testes e exames, mediante:",
                "opcoes": [
                    "A) somente o resultado do etilômetro.",
                    "B) apenas exame de sangue em hospital público.",
                    "C) imagem, vídeo, constatação de sinais que indiquem alteração da capacidade psicomotora ou produção de quaisquer outras provas em direito admitidas.",
                    "D) somente a palavra de duas testemunhas.",
                    "E) exclusivamente a confissão do condutor."
                ],
                "correta": 2,
                "comentario": "O §2º do art. 277 admite diversos meios de prova, como sinais de alteração psicomotora constatados pelo agente, conforme regulamentação do Contran."
            },
            {
                "id": 5089,
                "enunciado": "Segundo o art. 269 do CTB, constitui medida administrativa:",
                "opcoes": [
                    "A) a multa.",
                    "B) o recolhimento do documento de habilitação.",
                    "C) a advertência por escrito.",
                    "D) a cassação da Permissão para Dirigir.",
                    "E) a suspensão do direito de dirigir."
                ],
                "correta": 1,
                "comentario": "São medidas administrativas, entre outras: retenção e remoção do veículo, recolhimento do documento de habilitação e do CRLV, transbordo do excesso de carga e teste de alcoolemia. Multa, advertência, suspensão e cassação são penalidades."
            },
            {
                "id": 5090,
                "enunciado": "A medida administrativa de retenção do veículo consiste em:",
                "opcoes": [
                    "A) manter o veículo no local da fiscalização até que a irregularidade seja sanada, quando possível.",
                    "B) leiloar o veículo após 30 dias.",
                    "C) levar o veículo ao depósito do órgão de trânsito.",
                    "D) transferir a propriedade do veículo ao Estado.",
                    "E) cassar o licenciamento do veículo."
                ],
                "correta": 0,
                "comentario": "Na retenção (art. 270), o veículo fica no local até a regularização. Se não for possível sanar no local, o veículo pode ser liberado a condutor habilitado ou removido. Levar ao depósito é a remoção (art. 271)."
            },
            {
                "id": 5091,
                "enunciado": "Segundo o art. 269, §1º, do CTB, as medidas administrativas e coercitivas adotadas pelas autoridades de trânsito têm como objetivo prioritário:",
                "opcoes": [
                    "A) a fluidez do trânsito acima de tudo.",
                    "B) a punição exemplar do infrator.",
                    "C) a proteção à vida e à incolumidade física da pessoa.",
                    "D) a arrecadação de recursos para o Estado.",
                    "E) a manutenção do patrimônio público."
                ],
                "correta": 2,
                "comentario": "O CTB orienta toda a fiscalização pela proteção à vida e à integridade física. É um princípio frequente em provas."
            },
            {
                "id": 5092,
                "enunciado": "Segundo o art. 281, parágrafo único, II, do CTB, o auto de infração será arquivado e seu registro julgado insubsistente se a notificação da autuação não for expedida no prazo máximo de:",
                "opcoes": [
                    "A) 90 dias.",
                    "B) 15 dias.",
                    "C) 60 dias.",
                    "D) 30 dias.",
                    "E) 180 dias."
                ],
                "correta": 3,
                "comentario": "A autoridade tem 30 dias, contados da infração, para expedir a notificação de autuação. Ultrapassado esse prazo, o auto é arquivado."
            },
            {
                "id": 5093,
                "enunciado": "Não sendo imediata a identificação do infrator, o proprietário do veículo terá, para apresentá-lo, o prazo de:",
                "opcoes": [
                    "A) 15 dias, contados da infração.",
                    "B) 90 dias.",
                    "C) 5 dias úteis.",
                    "D) 60 dias, contados da infração.",
                    "E) 30 dias, contados da notificação da autuação."
                ],
                "correta": 4,
                "comentario": "A Lei 14.071/2020 ampliou o prazo de 15 para 30 dias (art. 257, §7º). Se o condutor não for identificado, o proprietário é considerado responsável pela infração."
            },
            {
                "id": 5094,
                "enunciado": "O infrator que optar pelo sistema de notificação eletrônica e não apresentar defesa prévia nem recurso, reconhecendo o cometimento da infração, poderá pagar a multa com desconto de:",
                "opcoes": [
                    "A) 20% do valor.",
                    "B) 60% do valor.",
                    "C) 50% do valor.",
                    "D) 10% do valor.",
                    "E) 40% do valor."
                ],
                "correta": 4,
                "comentario": "O art. 284, §1º, do CTB prevê desconto de 40% nessa hipótese. O pagamento até a data do vencimento, fora dessa condição, tem desconto de 20%."
            },
            {
                "id": 5095,
                "enunciado": "Contra a imposição de penalidade de trânsito, o infrator pode interpor recurso, em primeira instância, para:",
                "opcoes": [
                    "A) a Polícia Federal.",
                    "B) a JARI do órgão ou entidade que aplicou a penalidade.",
                    "C) o Supremo Tribunal Federal.",
                    "D) o Contran, diretamente.",
                    "E) o Ministério Público."
                ],
                "correta": 1,
                "comentario": "O recurso de primeira instância é julgado pela JARI (art. 285). Da decisão da JARI cabe recurso de segunda instância ao colegiado competente (como Cetran, Contrandife ou colegiado especial, conforme o caso)."
            },
            {
                "id": 5096,
                "enunciado": "Segundo o art. 280 do CTB, ocorrendo infração de trânsito, será lavrado auto de infração, do qual constará, entre outros dados:",
                "opcoes": [
                    "A) somente a assinatura do infrator, que é obrigatória para a validade.",
                    "B) apenas o nome do condutor e o valor da multa.",
                    "C) a cópia do documento de habilitação do proprietário.",
                    "D) a opinião do agente sobre o caráter do condutor.",
                    "E) tipificação da infração, local, data e hora, caracteres da placa e identificação do órgão e do agente autuador."
                ],
                "correta": 4,
                "comentario": "O auto deve conter os elementos que permitam identificar a infração e o veículo. A assinatura do infrator, quando possível, vale como notificação, mas sua falta não invalida o auto."
            },
            {
                "id": 5097,
                "enunciado": "A frequência obrigatória em curso de reciclagem será aplicada, entre outras hipóteses, quando o infrator:",
                "opcoes": [
                    "A) for suspenso do direito de dirigir.",
                    "B) renovar a CNH no prazo.",
                    "C) trocar de categoria.",
                    "D) pagar a multa com desconto.",
                    "E) receber advertência por escrito."
                ],
                "correta": 0,
                "comentario": "O art. 268 do CTB prevê o curso de reciclagem, entre outros casos, para o condutor suspenso, para o envolvido em acidente grave para o qual tenha contribuído e para o condenado judicialmente por delito de trânsito."
            },
            {
                "id": 5098,
                "enunciado": "A remoção do veículo ao depósito, medida administrativa prevista no CTB, tem como consequência:",
                "opcoes": [
                    "A) a liberação imediata, sem custos, a qualquer pessoa.",
                    "B) a cassação automática do licenciamento.",
                    "C) a perda definitiva do veículo em 24 horas.",
                    "D) a transferência do veículo para o agente autuador.",
                    "E) a restituição do veículo somente após o pagamento das despesas de remoção e estada e a regularização exigida."
                ],
                "correta": 4,
                "comentario": "O art. 271 condiciona a liberação ao pagamento de multas vencidas, despesas de remoção e estada e à regularização. Veículos não retirados podem ser levados a leilão após prazo legal."
            },
            {
                "id": 5099,
                "enunciado": "A pena para o crime de homicídio culposo na direção de veículo automotor (art. 302 do CTB), em sua forma simples, é de:",
                "opcoes": [
                    "A) detenção de 6 meses a 1 ano, ou multa.",
                    "B) detenção de 2 a 4 anos, e suspensão ou proibição de se obter a permissão ou a habilitação para dirigir.",
                    "C) apenas multa e suspensão da CNH.",
                    "D) reclusão de 6 a 20 anos.",
                    "E) reclusão de 1 a 3 anos."
                ],
                "correta": 1,
                "comentario": "O art. 302 prevê detenção de 2 a 4 anos. Se o condutor estiver sob influência de álcool ou outra substância psicoativa, a pena passa a reclusão de 5 a 8 anos (§3º)."
            },
            {
                "id": 5100,
                "enunciado": "Se o homicídio culposo na direção de veículo automotor for praticado por condutor sob a influência de álcool, a pena é de:",
                "opcoes": [
                    "A) reclusão de 2 a 5 anos.",
                    "B) reclusão de 5 a 8 anos.",
                    "C) reclusão de 12 a 30 anos.",
                    "D) detenção de 6 meses a 3 anos.",
                    "E) detenção de 2 a 4 anos."
                ],
                "correta": 1,
                "comentario": "O §3º do art. 302, incluído pela Lei 13.546/2017, qualifica o crime com pena de reclusão de 5 a 8 anos, além da suspensão ou proibição de dirigir."
            },
            {
                "id": 5101,
                "enunciado": "A pena do crime de lesão corporal culposa na direção de veículo automotor (art. 303 do CTB), na forma simples, é de:",
                "opcoes": [
                    "A) reclusão de 1 a 4 anos.",
                    "B) detenção de 2 a 4 anos.",
                    "C) reclusão de 2 a 5 anos.",
                    "D) apenas multa.",
                    "E) detenção de 6 meses a 2 anos, e suspensão ou proibição de dirigir."
                ],
                "correta": 4,
                "comentario": "O art. 303 prevê detenção de 6 meses a 2 anos. Se houver influência de álcool e a lesão for grave ou gravíssima, a pena é de reclusão de 2 a 5 anos (§2º)."
            },
            {
                "id": 5102,
                "enunciado": "Segundo o art. 306 do CTB, configura o crime de embriaguez ao volante conduzir veículo automotor com capacidade psicomotora alterada, o que pode ser constatado por concentração igual ou superior a:",
                "opcoes": [
                    "A) 6 decigramas de álcool por litro de sangue ou 0,3 miligrama por litro de ar alveolar.",
                    "B) 0,05 mg por litro de ar alveolar.",
                    "C) 10 decigramas por litro de sangue ou 0,5 mg por litro de ar.",
                    "D) qualquer concentração de álcool.",
                    "E) 2 decigramas por litro de sangue ou 0,1 mg por litro de ar."
                ],
                "correta": 0,
                "comentario": "O §1º do art. 306 adota esses índices ou sinais que indiquem alteração da capacidade psicomotora. A pena é de detenção de 6 meses a 3 anos, multa e suspensão ou proibição de dirigir."
            },
            {
                "id": 5103,
                "enunciado": "A pena prevista para o crime de embriaguez ao volante (art. 306 do CTB) é de:",
                "opcoes": [
                    "A) detenção de 2 a 4 anos.",
                    "B) detenção de 6 meses a 3 anos, multa e suspensão ou proibição de se obter a permissão ou a habilitação.",
                    "C) apenas multa administrativa.",
                    "D) reclusão de 1 a 2 anos, sem multa.",
                    "E) reclusão de 5 a 8 anos."
                ],
                "correta": 1,
                "comentario": "O art. 306 prevê detenção de 6 meses a 3 anos, cumulada com multa e suspensão ou proibição de dirigir."
            },
            {
                "id": 5104,
                "enunciado": "Segundo o art. 301 do CTB, ao condutor de veículo envolvido em acidente de trânsito com vítima:",
                "opcoes": [
                    "A) será exigida fiança, mesmo que preste socorro.",
                    "B) não se imporá a prisão em flagrante, nem se exigirá fiança, se prestar pronto e integral socorro à vítima.",
                    "C) a prisão em flagrante só é dispensada se a vítima morrer.",
                    "D) será sempre imposta a prisão em flagrante.",
                    "E) não se aplica nenhuma consequência penal, em qualquer caso."
                ],
                "correta": 1,
                "comentario": "O art. 301 incentiva o socorro: quem presta pronto e integral socorro não é preso em flagrante nem precisa pagar fiança. Isso não impede o processo pelo crime eventualmente cometido."
            },
            {
                "id": 5105,
                "enunciado": "O crime de omissão de socorro previsto no art. 304 do CTB é atribuído:",
                "opcoes": [
                    "A) apenas ao condutor que causou o acidente dolosamente.",
                    "B) ao proprietário do veículo, mesmo que não estivesse presente.",
                    "C) ao agente de trânsito que atender a ocorrência.",
                    "D) a qualquer pedestre que passe pelo local.",
                    "E) ao condutor do veículo que, na ocasião do acidente, deixar de prestar imediato socorro à vítima, ou de solicitar auxílio da autoridade pública, se não puder prestá-lo diretamente."
                ],
                "correta": 4,
                "comentario": "O art. 304 pune com detenção de 6 meses a 1 ano, ou multa, o condutor envolvido que não socorre nem pede auxílio. A pena incide ainda que a omissão seja suprida por terceiros ou que a vítima tenha morte instantânea ou ferimentos leves (parágrafo único)."
            },
            {
                "id": 5106,
                "enunciado": "Afastar-se o condutor do local do acidente para fugir à responsabilidade penal ou civil que lhe possa ser atribuída é crime previsto no art. 305 do CTB. Sobre ele, o STF decidiu que:",
                "opcoes": [
                    "A) é constitucional, pois não viola o direito de não produzir prova contra si mesmo.",
                    "B) só se aplica a condutores profissionais.",
                    "C) é inconstitucional e não pode ser aplicado.",
                    "D) foi revogado pela Lei 14.071/2020.",
                    "E) só se configura se houver vítima fatal."
                ],
                "correta": 0,
                "comentario": "No julgamento do RE 971.959 (Tema 907), o STF declarou constitucional o art. 305. A pena é de detenção de 6 meses a 1 ano, ou multa."
            },
            {
                "id": 5107,
                "enunciado": "Participar, na direção de veículo automotor, em via pública, de corrida, disputa ou competição não autorizada, gerando situação de risco à incolumidade pública ou privada, é crime punido com:",
                "opcoes": [
                    "A) multa simples.",
                    "B) reclusão de 12 a 30 anos.",
                    "C) apenas infração administrativa.",
                    "D) detenção de 6 meses a 3 anos, multa e suspensão ou proibição de dirigir.",
                    "E) detenção de 15 dias a 1 mês."
                ],
                "correta": 3,
                "comentario": "O art. 308 do CTB prevê detenção de 6 meses a 3 anos. Se resultar lesão corporal grave, reclusão de 3 a 6 anos; se resultar morte, reclusão de 5 a 10 anos."
            },
            {
                "id": 5108,
                "enunciado": "Dirigir veículo automotor, em via pública, sem a devida permissão ou habilitação, gerando perigo de dano, é crime previsto no art. 309 do CTB, com pena de:",
                "opcoes": [
                    "A) reclusão de 1 a 4 anos.",
                    "B) apenas multa administrativa.",
                    "C) detenção de 6 meses a 1 ano, ou multa.",
                    "D) reclusão de 5 a 8 anos.",
                    "E) detenção de 2 a 4 anos."
                ],
                "correta": 2,
                "comentario": "O crime exige perigo concreto de dano (Súmula 720 do STF). Sem perigo, há apenas a infração administrativa do art. 162."
            },
            {
                "id": 5109,
                "enunciado": "Permitir, confiar ou entregar a direção de veículo automotor a pessoa não habilitada, com habilitação cassada ou suspensa, ou a quem não esteja em condições de conduzi-lo com segurança, é crime previsto no art. 310 do CTB. Segundo o STJ (Súmula 575):",
                "opcoes": [
                    "A) só se aplica ao proprietário que é pai do condutor.",
                    "B) exige prova de perigo concreto de dano.",
                    "C) é crime de perigo abstrato, não sendo exigida a ocorrência de lesão ou de perigo de dano concreto.",
                    "D) não é crime, apenas infração administrativa.",
                    "E) só se configura se houver acidente com vítima."
                ],
                "correta": 2,
                "comentario": "A Súmula 575 do STJ dispensa a demonstração de perigo concreto para o crime do art. 310, diferentemente do art. 309."
            },
            {
                "id": 5110,
                "enunciado": "Segundo o art. 293 do CTB, a penalidade de suspensão ou de proibição de se obter a permissão ou a habilitação para dirigir veículo automotor, aplicada em processo criminal, tem a duração de:",
                "opcoes": [
                    "A) 6 meses a 1 ano.",
                    "B) 2 meses a 5 anos.",
                    "C) 1 a 3 meses.",
                    "D) 5 a 10 anos.",
                    "E) prazo indeterminado."
                ],
                "correta": 1,
                "comentario": "O art. 293 fixa a duração de 2 meses a 5 anos para essa pena, que pode ser aplicada isolada ou cumulativamente com outras."
            },
            {
                "id": 5111,
                "enunciado": "Segundo o art. 312-B do CTB, incluído pela Lei 14.071/2020, aos crimes de homicídio culposo e de lesão corporal culposa grave ou gravíssima praticados sob influência de álcool:",
                "opcoes": [
                    "A) aplica-se obrigatoriamente a pena restritiva de direitos.",
                    "B) não se aplica a substituição da pena privativa de liberdade por pena restritiva de direitos.",
                    "C) aplica-se a transação penal da Lei 9.099/1995.",
                    "D) não se aplica nenhuma pena privativa de liberdade.",
                    "E) aplica-se o perdão judicial automático."
                ],
                "correta": 1,
                "comentario": "A Lei 14.071/2020 vedou a substituição prevista no art. 44 do Código Penal para os crimes dos arts. 302, §3º, e 303, §2º."
            },
            {
                "id": 5112,
                "enunciado": "São circunstâncias que sempre agravam as penalidades dos crimes de trânsito, segundo o art. 298 do CTB, ter o condutor do veículo cometido a infração:",
                "opcoes": [
                    "A) dirigindo veículo de sua propriedade.",
                    "B) em via urbana com sinalização adequada.",
                    "C) sem possuir Permissão para Dirigir ou Carteira de Habilitação, ou com veículo sem placas ou com placas falsas.",
                    "D) com veículo licenciado e documentos em dia.",
                    "E) durante o dia, com tempo bom."
                ],
                "correta": 2,
                "comentario": "O art. 298 lista agravantes como: dano potencial para duas ou mais pessoas, veículo sem placas ou com placas falsas, falta de habilitação, categoria diferente, profissão de condutor e conduzir sobre faixa de pedestres."
            },
            {
                "id": 5113,
                "enunciado": "Segundo o art. 291, §1º, do CTB, aos crimes de lesão corporal culposa de trânsito aplicam-se os institutos da Lei 9.099/1995 (composição civil, transação penal e representação), EXCETO se o agente estiver:",
                "opcoes": [
                    "A) sob influência de álcool, participando de racha ou trafegando a mais de 50 km/h acima da velocidade máxima permitida.",
                    "B) com documentos em atraso.",
                    "C) conduzindo veículo de terceiros.",
                    "D) dirigindo em rodovia federal.",
                    "E) acompanhado de passageiros."
                ],
                "correta": 0,
                "comentario": "Nessas três hipóteses, o §1º afasta os benefícios da Lei 9.099/1995 e determina a instauração de inquérito policial (§2º)."
            },
            {
                "id": 5114,
                "enunciado": "Trafegar em velocidade incompatível com a segurança nas proximidades de escolas, hospitais, estações de embarque e desembarque de passageiros, logradouros estreitos ou onde haja grande movimentação de pessoas, gerando perigo de dano, é crime punido com:",
                "opcoes": [
                    "A) reclusão de 5 a 8 anos.",
                    "B) detenção de 2 a 4 anos.",
                    "C) detenção de 6 meses a 1 ano, ou multa.",
                    "D) reclusão de 2 a 5 anos.",
                    "E) apenas infração leve."
                ],
                "correta": 2,
                "comentario": "É o crime do art. 311 do CTB, que exige perigo de dano."
            },
            {
                "id": 5115,
                "enunciado": "Violar a suspensão ou a proibição de se obter a permissão ou a habilitação para dirigir imposta com fundamento no CTB é crime punido com:",
                "opcoes": [
                    "A) detenção de 6 meses a 1 ano e multa, com nova imposição adicional de idêntico prazo de suspensão ou proibição.",
                    "B) perda definitiva do veículo.",
                    "C) apenas advertência por escrito.",
                    "D) reclusão de 5 a 8 anos.",
                    "E) multa administrativa simples."
                ],
                "correta": 0,
                "comentario": "É o crime do art. 307 do CTB. Administrativamente, dirigir com o direito suspenso também leva à cassação da CNH (art. 263, I)."
            },
            {
                "id": 5116,
                "enunciado": "Inovar artificiosamente, em caso de acidente automobilístico com vítima, na pendência do procedimento policial ou do processo penal, o estado de lugar, de coisa ou de pessoa, a fim de induzir a erro o agente policial, o perito ou o juiz, é crime previsto no:",
                "opcoes": [
                    "A) art. 302 do CTB.",
                    "B) art. 312 do CTB.",
                    "C) art. 165 do CTB.",
                    "D) art. 309 do CTB.",
                    "E) art. 121 do Código Penal."
                ],
                "correta": 1,
                "comentario": "O art. 312 do CTB (fraude processual em acidente de trânsito) prevê detenção de 6 meses a 1 ano, ou multa."
            },
            {
                "id": 5117,
                "enunciado": "Nos crimes de trânsito, a ação penal relativa à lesão corporal culposa simples, quando ausentes as exceções do art. 291, §1º, do CTB, é:",
                "opcoes": [
                    "A) privada exclusiva.",
                    "B) pública incondicionada, sempre.",
                    "C) dispensada, por ser infração administrativa.",
                    "D) privada subsidiária, sempre.",
                    "E) pública condicionada à representação da vítima."
                ],
                "correta": 4,
                "comentario": "Aplicando-se o art. 88 da Lei 9.099/1995 por força do art. 291, §1º, a lesão culposa simples depende de representação. Nas exceções (álcool, racha, excesso de 50 km/h), a ação é pública incondicionada."
            },
            {
                "id": 5118,
                "enunciado": "Em uma fiscalização, um condutor é flagrado dirigindo com concentração de 0,25 mg de álcool por litro de ar alveolar, sem sinais de alteração psicomotora. Nessa situação, segundo o CTB:",
                "opcoes": [
                    "A) comete apenas infração leve.",
                    "B) deve ser liberado sem nenhuma medida.",
                    "C) comete o crime do art. 306, pois qualquer índice configura crime.",
                    "D) responde pela infração administrativa do art. 165, mas o índice, isoladamente, não alcança o patamar de 0,3 mg/L do crime do art. 306.",
                    "E) não comete infração, pois está abaixo de 0,3 mg/L."
                ],
                "correta": 3,
                "comentario": "Na esfera administrativa vale qualquer concentração (art. 276), observadas as tolerâncias do Contran. O crime do art. 306 exige 0,3 mg/L ou mais, ou sinais de alteração psicomotora."
            },
            {
                "id": 5119,
                "enunciado": "Um condutor flagrado sob influência de álcool não tem outra pessoa habilitada para assumir a direção. Nesse caso, quanto ao veículo, o agente deverá:",
                "opcoes": [
                    "A) liberá-lo para o próprio condutor, após a multa.",
                    "B) destruí-lo imediatamente.",
                    "C) liberá-lo a qualquer passageiro, mesmo não habilitado.",
                    "D) retê-lo e, não havendo condutor habilitado para recebê-lo, providenciar sua remoção.",
                    "E) apreendê-lo definitivamente em nome da União."
                ],
                "correta": 3,
                "comentario": "A medida de retenção (art. 270) prevê a liberação a condutor habilitado; não havendo, o veículo é removido ao depósito."
            },
            {
                "id": 5120,
                "enunciado": "Um veículo é flagrado transitando a 170 km/h em rodovia de pista dupla com velocidade máxima de 110 km/h. Considerando a faixa de excesso, a infração é:",
                "opcoes": [
                    "A) média, pois o excesso é inferior a 20%.",
                    "B) gravíssima com multa multiplicada por dez.",
                    "C) gravíssima, com multa multiplicada por três e suspensão do direito de dirigir, pois o excesso supera 50%.",
                    "D) grave, pois o excesso está entre 20% e 50%.",
                    "E) leve, por se tratar de rodovia de pista dupla."
                ],
                "correta": 2,
                "comentario": "O excesso foi de 60 km/h sobre 110 km/h, cerca de 54,5%, acima de 50%: infração gravíssima, multa x3 e suspensão (art. 218, III). Atenção: a lei exige excesso superior a 50%; a exatamente 165 km/h (50%), a infração seria grave."
            },
            {
                "id": 5121,
                "enunciado": "Segundo o art. 218 do CTB, o condutor que trafega a 70 km/h em via cuja velocidade máxima é 50 km/h comete infração:",
                "opcoes": [
                    "A) grave, pois o excesso está entre 20% e 50%.",
                    "B) média, pois o excesso é de até 20%.",
                    "C) gravíssima, pois o excesso é superior a 50%.",
                    "D) gravíssima, com suspensão imediata.",
                    "E) leve, pois a via é urbana."
                ],
                "correta": 0,
                "comentario": "O excesso foi de 20 km/h sobre 50 km/h, ou seja, 40%. Entre 20% e 50%, a infração é grave (art. 218, II)."
            },
            {
                "id": 5122,
                "enunciado": "Durante uma fiscalização em rodovia federal, o agente da PRF constata que o condutor está com a CNH vencida há mais de 30 dias. Nessa situação, segundo o CTB, trata-se de:",
                "opcoes": [
                    "A) infração leve, com advertência por escrito.",
                    "B) crime de falsificação de documento.",
                    "C) infração gravíssima, com recolhimento do documento de habilitação e retenção do veículo até a apresentação de condutor habilitado.",
                    "D) infração média, sem medida administrativa.",
                    "E) situação regular, pois a CNH vencida continua válida por 1 ano."
                ],
                "correta": 2,
                "comentario": "O art. 162, V, do CTB prevê infração gravíssima para quem dirige com validade da CNH vencida há mais de 30 dias, com recolhimento do documento e retenção do veículo."
            },
            {
                "id": 5123,
                "enunciado": "Ao abordar um veículo, o agente constata que o motorista transporta passageiros no compartimento de carga de um caminhão, sem autorização. Segundo o CTB, a conduta é:",
                "opcoes": [
                    "A) permitida se os passageiros forem empregados da empresa.",
                    "B) infração leve, sem medida administrativa.",
                    "C) apenas crime de trânsito.",
                    "D) permitida em rodovias federais.",
                    "E) infração gravíssima, com retenção do veículo para o transbordo."
                ],
                "correta": 4,
                "comentario": "O art. 230, II, do CTB prevê infração gravíssima para quem transporta passageiros em compartimento de carga, salvo exceções autorizadas, com retenção do veículo para transbordo."
            },
            {
                "id": 5124,
                "enunciado": "Segundo o CTB, a fiscalização do excesso de peso dos veículos nas rodovias federais é feita com base no:",
                "opcoes": [
                    "A) número de passageiros do veículo.",
                    "B) ano de fabricação do veículo.",
                    "C) tipo de combustível utilizado.",
                    "D) Peso Bruto Total ou Peso Bruto Total Combinado e nos limites de peso por eixo, com tolerâncias definidas pelo Contran.",
                    "E) valor de mercado do veículo."
                ],
                "correta": 3,
                "comentario": "O art. 231, V, do CTB pune quem transita com excesso de peso, aferido por balança ou nota fiscal, considerando os limites de PBT/PBTC e por eixo. A medida administrativa é a retenção para transbordo do excesso."
            },
            {
                "id": 5125,
                "enunciado": "Deixar o condutor, envolvido em acidente sem vítima, de adotar providências para remover o veículo do local, quando necessário para assegurar a segurança e a fluidez do trânsito, constitui infração:",
                "opcoes": [
                    "A) média.",
                    "B) não é infração.",
                    "C) leve.",
                    "D) grave.",
                    "E) gravíssima."
                ],
                "correta": 0,
                "comentario": "O art. 178 do CTB prevê infração média. Nos acidentes sem vítima, o condutor deve retirar o veículo do local quando isso for necessário à segurança e à fluidez."
            },
            {
                "id": 5126,
                "enunciado": "Ao conduzir veículo, o condutor que deixar de reduzir a velocidade do veículo de forma compatível com a segurança do trânsito ao ultrapassar ciclista comete infração:",
                "opcoes": [
                    "A) gravíssima com multa multiplicada por três.",
                    "B) média.",
                    "C) leve.",
                    "D) grave.",
                    "E) não é infração."
                ],
                "correta": 3,
                "comentario": "O art. 220, XIII, do CTB classifica como grave a conduta de não reduzir a velocidade ao ultrapassar ciclista. O art. 201 também exige distância lateral de 1,5 m ao passar por bicicleta (infração média)."
            },
            {
                "id": 5127,
                "enunciado": "Segundo o art. 201 do CTB, ao passar ou ultrapassar bicicleta, o condutor deve guardar distância lateral de, no mínimo:",
                "opcoes": [
                    "A) 1,5 metro.",
                    "B) 1 metro.",
                    "C) 3 metros.",
                    "D) 0,5 metro.",
                    "E) 2,5 metros."
                ],
                "correta": 0,
                "comentario": "Deixar de guardar a distância lateral de 1,5 m ao passar ou ultrapassar bicicleta é infração média (art. 201)."
            },
            {
                "id": 5128,
                "enunciado": "Segundo o art. 263, II, do CTB, é causa de cassação do documento de habilitação a reincidência, no prazo de 12 meses, na infração de:",
                "opcoes": [
                    "A) dirigir sob influência de álcool (art. 165).",
                    "B) dirigir sem atenção.",
                    "C) usar buzina entre 22h e 6h.",
                    "D) deixar de usar o cinto de segurança.",
                    "E) estacionar em local proibido."
                ],
                "correta": 0,
                "comentario": "A cassação por reincidência em 12 meses alcança as infrações dos arts. 162, III, 163, 164, 165, 173, 174 e 175 (álcool, racha, competições e manobras perigosas, entre outras)."
            },
            {
                "id": 5129,
                "enunciado": "Após a Lei 14.071/2020, deixar de manter acesa a luz baixa durante o dia ao conduzir motocicleta, motoneta ou ciclomotor passou a ser infração:",
                "opcoes": [
                    "A) gravíssima, com suspensão do direito de dirigir.",
                    "B) não é mais infração.",
                    "C) leve, apenas com advertência.",
                    "D) grave, com recolhimento da CNH.",
                    "E) média."
                ],
                "correta": 4,
                "comentario": "A Lei 14.071/2020 (em vigor desde abril de 2021) revogou o inciso IV do art. 244, que tornava a conduta gravíssima e autossuspensiva. Hoje ela é infração média (4 pontos), como as demais faltas de uso de luz baixa."
            },
            {
                "id": 5130,
                "enunciado": "Segundo o art. 280, §1º, do CTB, o agente de trânsito, ao lavrar o auto de infração:",
                "opcoes": [
                    "A) deve fazê-lo mesmo que o infrator se recuse a assinar, registrando o fato no auto.",
                    "B) deve dispensar a autuação se o infrator pedir desculpas.",
                    "C) pode cobrar a multa em dinheiro no próprio local.",
                    "D) deve obter autorização prévia do Ministério Público.",
                    "E) só pode lavrar o auto com a assinatura do infrator."
                ],
                "correta": 0,
                "comentario": "A assinatura do infrator não é requisito de validade do auto. A cobrança de multa em dinheiro no local da infração é proibida."
            }
        ],
        "Direito Constitucional": [
            {
                "id": 501,
                "enunciado": "De acordo com o art. 144 da Constituição Federal, a Polícia Rodoviária Federal destina-se, na forma da lei, ao:",
                "opcoes": [
                    "A) exercício da polícia judiciária da União.",
                    "B) policiamento marítimo e de fronteiras.",
                    "C) patrulhamento ostensivo das rodovias federais.",
                    "D) policiamento ostensivo das rodovias estaduais.",
                    "E) patrulhamento ostensivo das ferrovias federais."
                ],
                "correta": 2,
                "comentario": "Art. 144, § 2º: a PRF destina-se ao patrulhamento ostensivo das rodovias federais. O das ferrovias federais cabe à Polícia Ferroviária Federal."
            },
            {
                "id": 502,
                "enunciado": "Nos termos do art. 5º da Constituição Federal, são gratuitas as ações de:",
                "opcoes": [
                    "A) mandado de segurança e ação popular.",
                    "B) habeas data e mandado de segurança.",
                    "C) habeas corpus e habeas data.",
                    "D) mandado de injunção e ação civil pública.",
                    "E) ação rescisória e revisão criminal."
                ],
                "correta": 2,
                "comentario": "Art. 5º, LXXVII: são gratuitas as ações de habeas corpus e habeas data, e, na forma da lei, os atos necessários ao exercício da cidadania."
            },
            {
                "id": 503,
                "enunciado": "NÃO constitui fundamento da República Federativa do Brasil, previsto no art. 1º da Constituição Federal:",
                "opcoes": [
                    "A) a dignidade da pessoa humana.",
                    "B) o pluralismo político.",
                    "C) a cidadania.",
                    "D) a erradicação da pobreza e da marginalização.",
                    "E) a soberania."
                ],
                "correta": 3,
                "comentario": "Erradicar a pobreza e a marginalização é objetivo fundamental (art. 3º), não fundamento (art. 1º)."
            },
            {
                "id": 504,
                "enunciado": "Segundo a Constituição, a casa é asilo inviolável do indivíduo. Nela se pode penetrar sem consentimento do morador, a qualquer hora, em caso de:",
                "opcoes": [
                    "A) simples suspeita policial.",
                    "B) cumprimento de mandado administrativo.",
                    "C) cumprimento de mandado judicial, mesmo à noite.",
                    "D) denúncia anônima.",
                    "E) flagrante delito, desastre ou para prestar socorro."
                ],
                "correta": 4,
                "comentario": "Art. 5º, XI: flagrante delito, desastre ou para prestar socorro; por determinação judicial, somente durante o dia."
            },
            {
                "id": 505,
                "enunciado": "Segundo o art. 5º, LXI, da Constituição Federal, ninguém será preso senão em flagrante delito ou por ordem escrita e fundamentada de:",
                "opcoes": [
                    "A) membro do Ministério Público.",
                    "B) autoridade judiciária competente.",
                    "C) qualquer autoridade policial.",
                    "D) autoridade administrativa.",
                    "E) comissão parlamentar de inquérito."
                ],
                "correta": 1,
                "comentario": "Ressalvam-se os casos de transgressão militar ou crime propriamente militar, definidos em lei."
            },
            {
                "id": 506,
                "enunciado": "A Constituição Federal estabelece que a prática do racismo constitui crime:",
                "opcoes": [
                    "A) inafiançável e imprescritível.",
                    "B) inafiançável e prescritível.",
                    "C) afiançável e prescritível.",
                    "D) sujeito apenas a pena de multa.",
                    "E) afiançável e imprescritível."
                ],
                "correta": 0,
                "comentario": "Art. 5º, XLII: a prática do racismo é crime inafiançável e imprescritível, sujeito à pena de reclusão."
            }
        ],
        "Direito Penal": [
            {
                "id": 601,
                "enunciado": "Pelo princípio da legalidade, previsto no art. 1º do Código Penal:",
                "opcoes": [
                    "A) a pena pode ser fixada sem previsão legal.",
                    "B) a lei penal sempre retroage.",
                    "C) a analogia em prejuízo do réu é admitida.",
                    "D) o costume pode criar crimes.",
                    "E) não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal."
                ],
                "correta": 4,
                "comentario": "Art. 1º do CP: não há crime sem lei anterior que o defina, nem pena sem prévia cominação legal."
            },
            {
                "id": 602,
                "enunciado": "NÃO é causa de exclusão da ilicitude, nos termos do art. 23 do Código Penal:",
                "opcoes": [
                    "A) o exercício regular de direito.",
                    "B) a legítima defesa.",
                    "C) o estado de necessidade.",
                    "D) a coação moral irresistível.",
                    "E) o estrito cumprimento de dever legal."
                ],
                "correta": 3,
                "comentario": "A coação moral irresistível exclui a culpabilidade (inexigibilidade de conduta diversa), não a ilicitude."
            },
            {
                "id": 603,
                "enunciado": "Para os efeitos penais (art. 327 do Código Penal), considera-se funcionário público:",
                "opcoes": [
                    "A) quem presta serviços privados a particulares.",
                    "B) quem exerce cargo, emprego ou função pública, ainda que transitoriamente ou sem remuneração.",
                    "C) apenas os membros dos três Poderes.",
                    "D) apenas quem ocupa cargo efetivo e é remunerado.",
                    "E) somente o servidor estável."
                ],
                "correta": 1,
                "comentario": "O conceito penal de funcionário público é amplo e alcança quem exerce função pública, ainda que transitoriamente ou sem remuneração."
            },
            {
                "id": 604,
                "enunciado": "O funcionário público que se apropria de dinheiro público de que tem a posse em razão do cargo pratica o crime de:",
                "opcoes": [
                    "A) peculato.",
                    "B) prevaricação.",
                    "C) corrupção passiva.",
                    "D) concussão.",
                    "E) advocacia administrativa."
                ],
                "correta": 0,
                "comentario": "Art. 312 do CP: peculato é apropriar-se de dinheiro, valor ou bem móvel de que o funcionário tem a posse em razão do cargo."
            },
            {
                "id": 605,
                "enunciado": "O funcionário público que retarda indevidamente ato de ofício para satisfazer interesse ou sentimento pessoal pratica o crime de:",
                "opcoes": [
                    "A) condescendência criminosa.",
                    "B) concussão.",
                    "C) prevaricação.",
                    "D) peculato.",
                    "E) corrupção passiva."
                ],
                "correta": 2,
                "comentario": "Art. 319 do CP: prevaricação é retardar ou deixar de praticar, indevidamente, ato de ofício, para satisfazer interesse ou sentimento pessoal."
            },
            {
                "id": 606,
                "enunciado": "A pena prevista no caput do art. 121 do Código Penal (homicídio simples) é de:",
                "opcoes": [
                    "A) reclusão, de 4 a 12 anos.",
                    "B) detenção, de 1 a 3 anos.",
                    "C) reclusão, de 8 a 16 anos.",
                    "D) reclusão, de 6 a 20 anos.",
                    "E) reclusão, de 12 a 30 anos."
                ],
                "correta": 3,
                "comentario": "Homicídio simples: reclusão, de 6 a 20 anos. O homicídio qualificado tem pena de 12 a 30 anos."
            }
        ],
        "Direito Processual Penal": [],
        "Direito Administrativo": [
            {
                "id": 701,
                "enunciado": "Os princípios expressos no caput do art. 37 da Constituição Federal são:",
                "opcoes": [
                    "A) legalidade, razoabilidade, finalidade, motivação e eficiência.",
                    "B) legalidade, supremacia do interesse público, moralidade, publicidade e economicidade.",
                    "C) legalidade, impessoalidade, moralidade, publicidade e eficiência.",
                    "D) impessoalidade, proporcionalidade, moralidade, publicidade e eficiência.",
                    "E) legalidade, isonomia, moralidade, publicidade e razoabilidade."
                ],
                "correta": 2,
                "comentario": "Art. 37, caput: legalidade, impessoalidade, moralidade, publicidade e eficiência (LIMPE)."
            },
            {
                "id": 702,
                "enunciado": "O poder que a Administração tem de condicionar e restringir o uso de bens e o exercício de direitos em benefício do interesse coletivo, como na fiscalização de trânsito, é o poder:",
                "opcoes": [
                    "A) hierárquico.",
                    "B) regulamentar.",
                    "C) disciplinar.",
                    "D) de polícia.",
                    "E) vinculado."
                ],
                "correta": 3,
                "comentario": "Poder de polícia: limita direitos individuais em favor do interesse público (art. 78 do CTN)."
            },
            {
                "id": 703,
                "enunciado": "O atributo do ato administrativo segundo o qual se presume que ele foi praticado conforme a lei, até prova em contrário, é a:",
                "opcoes": [
                    "A) autoexecutoriedade.",
                    "B) tipicidade.",
                    "C) imperatividade.",
                    "D) exigibilidade.",
                    "E) presunção de legitimidade."
                ],
                "correta": 4,
                "comentario": "A presunção de legitimidade (ou de veracidade) é relativa: admite prova em contrário."
            },
            {
                "id": 704,
                "enunciado": "Nos termos do art. 41 da Constituição Federal, o servidor nomeado para cargo de provimento efetivo em virtude de concurso público adquire estabilidade após:",
                "opcoes": [
                    "A) 1 ano de efetivo exercício.",
                    "B) 2 anos de efetivo exercício.",
                    "C) 5 anos de efetivo exercício.",
                    "D) 10 anos de efetivo exercício.",
                    "E) 3 anos de efetivo exercício."
                ],
                "correta": 4,
                "comentario": "São necessários três anos de efetivo exercício, além da avaliação especial de desempenho por comissão instituída para essa finalidade."
            },
            {
                "id": 705,
                "enunciado": "NÃO é modalidade de licitação prevista na Lei nº 14.133/2021:",
                "opcoes": [
                    "A) Pregão.",
                    "B) Tomada de preços.",
                    "C) Leilão.",
                    "D) Diálogo competitivo.",
                    "E) Concorrência."
                ],
                "correta": 1,
                "comentario": "A Lei nº 14.133/2021 prevê pregão, concorrência, concurso, leilão e diálogo competitivo. A tomada de preços e o convite deixaram de existir."
            },
            {
                "id": 706,
                "enunciado": "A autarquia, entidade da Administração Indireta, caracteriza-se por ser:",
                "opcoes": [
                    "A) pessoa jurídica de direito público, criada por lei específica, para executar atividades típicas da Administração.",
                    "B) pessoa jurídica de direito privado, criada por autorização legislativa.",
                    "C) empresa que explora atividade econômica.",
                    "D) entidade sem fins lucrativos instituída por particulares.",
                    "E) órgão sem personalidade jurídica."
                ],
                "correta": 0,
                "comentario": "As autarquias são pessoas jurídicas de direito público, criadas por lei específica, para atividades típicas de Estado."
            }
        ],
        "Direitos Humanos": []
    }
});
