// Simulado Polícia Rodoviária Federal (PRF) — questões originais de treino (não são cópias de provas oficiais).
// Confira sempre a legislação vigente antes de estudar. "correta": 0 = A, 1 = B, 2 = C, 3 = D, 4 = E.
registrarConcurso("PRF", {
    "title": "Polícia Rodoviária Federal (PRF)",
    "banca": "Cebraspe",
    "emoji": "🚓",
    "tempo": 240,
    "estrutura": [
        {
            "nome": "Língua Portuguesa",
            "limite": 5
        },
        {
            "nome": "Raciocínio Lógico",
            "limite": 4
        },
        {
            "nome": "Informática",
            "limite": 4
        },
        {
            "nome": "Física",
            "limite": 4
        },
        {
            "nome": "Legislação de Trânsito",
            "limite": 6
        },
        {
            "nome": "Direito Constitucional",
            "limite": 4
        },
        {
            "nome": "Direito Penal",
            "limite": 4
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
        ]
    }
});
