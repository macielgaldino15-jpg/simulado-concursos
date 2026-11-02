// Questões do simulado Polícia Civil
// Estrutura com 100 questões divididas entre as principais disciplinas cobradas em concursos de Polícia Civil.
// "correta" é a posição da alternativa certa: 0 = A, 1 = B, 2 = C, 3 = D, 4 = E.
registrarConcurso("PC", {
    title: "Polícia Civil - Simulado Completo",
    banca: "Diversas (Vunesp / Cebraspe / FGV)",
    emoji: "🕵️",
    tempo: 240,
    estrutura: [
        { nome: "Língua Portuguesa", limite: 20 },
        { nome: "Direito Penal", limite: 20 },
        { nome: "Direito Processual Penal", limite: 20 },
        { nome: "Direito Constitucional", limite: 15 },
        { nome: "Direito Administrativo", limite: 15 },
        { nome: "Noções de Informática", limite: 10 }
    ],
    questoes: {
        "Língua Portuguesa": [
            {
                id: 1,
                enunciado: "Assinale a alternativa em que a regência do verbo 'aspirar' está empregada em conformidade com a norma-padrão da língua escrita, no sentido de almejar, desejar.",
                opcoes: ["A) O policial civil aspirava ao cargo de delegado com muita dedicação.", "B) Todos aspiravam o distintivo brilhante da corporação.", "C) O investigador aspirava para a promoção de classe.", "D) A equipe policial aspirava contra a corrupção na cidade.", "E) Os agentes aspiravam o ar puro da serra durante a diligência."],
                correta: 0,
                comentario: "No sentido de almejar/desejar, o verbo 'aspirar' é transitivo indireto e exige a preposição 'a' (aspirar a algo)."
            },
            {
                id: 2,
                enunciado: "Em relação à concordância verbal, assinale a alternativa correta de acordo com a norma-padrão.",
                opcoes: ["A) Faltou detalhes cruciais no relatório da ocorrência policial.", "B) Devem haver muitas testemunhas oculares do crime.", "C) Fazem muitos anos que a delegacia regional não passa por reformas.", "D) Devem existir várias linhas de investigação para este homicídio.", "E) Houveram muitos protestos na porta da delegacia."],
                correta: 3,
                comentario: "'Existir' é verbo pessoal e concorda com o sujeito ('várias linhas de investigação'). 'Faltaram', 'Faz' (tempo decorrido) e 'Houve' (existir) estariam incorretos nas demais opções."
            },
            {
                id: 3,
                enunciado: "Assinale a alternativa em que o uso do acento indicativo de crase está correto.",
                opcoes: ["A) Os peritos dirigiram-se à cena do crime às pressas.", "B) O delegado entregou o inquérito à autoridade superior.", "C) A equipe chegou à uma conclusão precipitada.", "D) O plantão policial estendeu-se de segunda à sexta-feira.", "E) Os policiais foram à pé realizar a campana."],
                correta: 0,
                comentario: "Em 'às pressas' temos locução adverbial feminina. Em 'à uma' antes de numeral indefinido sem artigo não há crase. Em 'segunda à sexta' sem artigo antes de segunda não leva crase. 'À pé' não leva crase por ser palavra masculina."
            },
            {
                id: 4,
                enunciado: "No trecho 'O delegado analisou o documento **que** foi entregue pelo escrivão', a palavra destacada classifica-se morfologicamente como:",
                opcoes: ["A) Conjunção integrante.", "B) Pronome relativo.", "C) Conjunção subordinativa causal.", "D) Preposição essencial.", "E) Pronome demonstrativo."],
                correta: 1,
                comentario: "O 'que' substitui 'o documento' e introduz uma oração subordinada adjetiva, funcionando como pronome relativo."
            },
            {
                id: 5,
                enunciado: "Assinale a alternativa em que todas as palavras estão grafadas corretamente.",
                opcoes: ["A) Exceção, requesito, excesso.", "B) Ascensão, prolabore, discrição.", "C) Extensão, escárnio, excessão.", "D) Exceção, ascensão, excesso.", "E) Requisito, excessão, discrição."],
                correta: 3,
                comentario: "A forma correta é 'exceção', 'ascensão' e 'excesso'. 'Requisito' (sem e) e 'exceção' são pegadinhas clássicas."
            },
            {
                id: 6,
                enunciado: "Indique a alternativa que apresenta a pontuação correta para a frase:",
                opcoes: ["A) O delegado, convocou a equipe, para esclarecer o caso.", "B) O delegado convocou a equipe para esclarecer o caso.", "C) O delegado convocou, a equipe para esclarecer o caso.", "D) O delegado convocou a equipe, para esclarecer o caso.", "E) O delegado convocou a equipe para, esclarecer o caso."],
                correta: 1,
                comentario: "Não se separa o sujeito do predicado, nem o verbo de seus complementos diretos com vírgula. A estrutura direta (Sujeito + Verbo + Objeto + Adjunto adverbial) não exige pontuação."
            },
            {
                id: 7,
                enunciado: "A frase que apresenta sentido ambíguo (duplo sentido), indesejado na redação policial técnica, é:",
                opcoes: ["A) O policial encontrou o suspeito em sua própria casa.", "B) O delegado leu o relatório do caso com atenção.", "C) Os agentes efetuaram a prisão em flagrante na madrugada.", "D) O perito criminal recolheu todas as evidências balísticas.", "E) A testemunha reconheceu o autor do delito na delegacia."],
                correta: 0,
                comentario: "A expressão 'sua própria casa' pode referir-se à casa do policial ou à casa do suspeito, gerando ambiguidade."
            },
            {
                id: 8,
                enunciado: "Assinale a alternativa em que a regência do verbo 'implicar' (no sentido de acarretar, resultar) está correta.",
                opcoes: ["A) O crime implica em punição severa.", "B) A conduta do policial implicou na sua exoneração.", "C) A falta injustificada implica punição disciplinar.", "D) O inquérito implicou com o investigado.", "E) A investigação implicou aos suspeitos no crime."],
                correta: 2,
                comentario: "No sentido de acarretar, 'implicar' é transitivo direto (não exige preposição 'em'). Logo: 'A falta implica punição disciplinar'."
            },
            {
                id: 9,
                enunciado: "Assinale a alternativa correta quanto à colocação pronominal (norma-padrão).",
                opcoes: ["A) Me empreste sua arma de fogo, colega.", "B) Nunca disseram-me a verdade sobre o álibi.", "C) O suspeito evadiu-se assim que viu a viatura.", "D) Me contaram que houve um assalto a banco.", "E) Se recusaram a prestar depoimento sem advogado."],
                correta: 2,
                comentario: "Não se inicia frase com pronome oblíquo átono ('Me empreste', 'Me contaram'). Pronomes encabeçando orações exigem próclise ('Nunca me disseram', 'Se recusaram' após vírgula/oração subordinada, mas 'evadiu-se' está correto por enclise em início absoluto)."
            },
            {
                id: 10,
                enunciado: "Assinale a alternativa em que a palavra destacada tem valor restritivo.",
                opcoes: ["A) O perito criminal, **que** é especialista em balística, analisou a arma.", "B) O policial civil, **cujo** distintivo foi furtado, registrou boletim.", "C) Os suspeitos, **que** fugiram em um carro preto, foram capturados.", "D) O delegado, **que** coordenou a operação, foi elogiado.", "E) Os investigadores **que** participaram da operação receberam medalha."],
                correta: 4,
                comentario: "A oração sem vírgulas ('que participaram da operação') restringe o universo dos investigadores aos que participaram da ação específica. As demais são explicativas (isoladas por vírgulas)."
            },
            {
                id: 11,
                enunciado: "Assinale a opção em que o vocábulo destacado exerce a função de agente da passiva.",
                opcoes: ["A) O inquérito foi concluído **pelo delegado** titular.", "B) O criminoso feriu **o policial** com uma faca.", "C) O perito entregou **o laudo** ao juiz.", "D) A viatura colidiu **com o poste** na avenida.", "E) O plantão policial permaneceu **tranquilo** durante a noite."],
                correta: 0,
                comentario: "'pelo delegado' é o agente da ação na voz passiva analítica ('foi concluído')."
            },
            {
                id: 12,
                enunciado: "Assinale a alternativa correta quanto à flexão de plural dos nomes compostos.",
                opcoes: ["A) Pé-de-moleques", "B) Guarda-chuvas", "C) Tenente-coronéis", "D) Decreto-leis", "E) Almirante-esquadras"],
                correta: 2,
                comentario: "Em 'tenente-coronel', ambos os substantivos variam (tenentes-coronéis). Guarda-chuva varia o segundo termo (guarda-chuvas). Decreto-lei varia o segundo (decretos-lei ou decretos-leis, mas a regra padrão cobra preferencialmente o segundo). Pé-de-moleque tem o último elemento invariável (pés-de-moleque)."
            },
            {
                id: 13,
                enunciado: "Assinale a alternativa que apresenta um período composto por coordenação sindética adversativa.",
                opcoes: ["A) O investigador analisou as provas e concluiu o inquérito.", "B) O suspeito tentou fugir, mas foi detido pelos policiais.", "C) Ou o meliante se entrega, ou a polícia invadirá o local.", "D) O perito examinou o local, portanto o laudo será emitido logo.", "E) Estude muito, porque o concurso da Polícia Civil é concorrido."],
                correta: 1,
                comentario: "A conjunção 'mas' liga orações coordenadas exprimindo oposição (adversativa)."
            },
            {
                id: 14,
                enunciado: "No trecho 'O suspeito confessou **que** participou do furto', a oração introduzida pela conjunção integrante classifica-se como:",
                opcoes: ["A) Oração subordinada substantiva objetiva direta.", "B) Oração subordinada adjetiva restritiva.", "C) Oração subordinada adverbial causal.", "D) Oração principal.", "E) Oração subordinada substantiva subjetiva."],
                correta: 0,
                comentario: "Completa o sentido do verbo transitivo direto 'confessou' sem preposição, exercendo papel de objeto direto."
            },
            {
                id: 15,
                enunciado: "Assinale a alternativa em que a concordância nominal está incorreta.",
                opcoes: ["A) É proibido entrada de estranhos na sala de interrogatório.", "B) Seguem anensos os relatórios da investigação.", "C) A delegada mesma assinou o mandado de busca.", "D) Obrigada, disse a testemunha ao investigador.", "E) Meio quilo de drogas foi apreendido na operação."],
                correta: 0,
                comentario: "O correto seria 'É proibido entrada' se houvesse artigo ('É proibida a entrada'). Sem artigo, permanece invariável 'proibido'. No entanto, 'proibido entrada' sem artigo exige feminino se houver determinante ('É proibida entrada...'). A alternativa A está incorreta no uso sem o artigo feminino concordando."
            },
            {
                id: 16,
                enunciado: "Assinale a alternativa que apresenta uma figura de linguagem de comparação implícita (metáfora).",
                opcoes: ["A) O delegado é como uma águia na investigação.", "B) O policial agiu corajosamente no confronto.", "C) Aquele inspetor é uma verdadeira raposa astuta.", "D) O réu chorou rios de lágrimas na audiência.", "E) A sirene da viatura gemia na madrugada."],
                correta: 2,
                comentario: "'Aquele inspetor é uma raposa' atribui uma característica de forma direta (metáfora). A opção A usa 'como' (comparação explícita/símile)."
            },
            {
                id: 17,
                enunciado: "Dentre as opções abaixo, assinale aquela em que todas as palavras são acentuadas pela mesma regra de acentuação gráfica (oxítonas).",
                opcoes: ["A) Polícia, fósforo, caqui", "B) Café, parabéns, cajá", "C) Índio, sótão, álbum", "D) Vintém, caráter, jacaré", "E) Açaí, armazém, hífen"],
                correta: 1,
                comentario: "Café, parabéns e cajá são todas palavras oxítonas terminadas em 'e', 'em' e 'a', acentuadas pelas regras das oxítonas."
            },
            {
                id: 18,
                enunciado: "Assinale a alternativa em que o pronome relativo está empregado incorretamente quanto ao regime ou forma.",
                opcoes: ["A) Este é o delegado a cujo gabinete comparecemos.", "B) A testemunha que falei com ela está protegida.", "C) O distrito policial em que trabalho é movimentado.", "D) O inquérito a que me refiro foi arquivado.", "E) A arma com que o crime foi cometido foi apreendida."],
                correta: 1,
                comentario: "O verbo 'falar' rege a preposição 'com' (com quem falei). O pronome relativo correto seria 'com quem' ou 'de quem', nunca 'que... com ela'."
            },
            {
                id: 19,
                enunciado: "Assinale a opção correta quanto ao emprego dos porquês.",
                opcoes: ["A) Porquê os policiais correram atrás do suspeito?", "B) O investigador não explicou o porquê da diligência.", "C) Os bandidos fugiram porque a viatura demorou.", "D) Por que razão vocês prenderam o suspeito? (Incorreto por redundância? Não, 'por que' separado está certo, mas vamos analisar o contexto de uso). Vamos olhar a C: 'porque' junto e sem acento indica causa e está perfeita."],
                correta: 2,
                comentario: "'Porque' junto e sem acento é conjunção explicativa/causal, perfeitamente empregado na alternativa C."
            },
            {
                id: 20,
                enunciado: "Assinale a alternativa em que a troca da oração reduzida por desenvolvida altera o sentido ou está gramaticalmente incorreta.",
                opcoes: ["A) Ao chegar à delegacia, o delegado iniciou o plantão. (Quando chegou à delegacia...)", "B) Sabendo da operação, os agentes prepararam as armas. (Como sabiam da operação...)", "C) Estudando para o concurso da Polícia Civil, a aprovação virá. (Caso estude... / Se estudar...)", "D) O suspeito foi preso por ter furtado o veículo. (porque furtou o veículo)", "E) Terminado o interrogatório, o réu assinou o termo. (Depois que terminou...)"],
                correta: 2,
                comentario: "A oração 'Estudando para o concurso...' expressa condição (Se estudar), mas a equivalência condicional exige conectivo condicional adequado, sendo a conversão condicional coerente, porém gerúndios isolados podem gerar ambiguidades de valor adverbial."
            }
        ],
        "Direito Penal": [
            {
                id: 21,
                enunciado: "No que tange aos princípios do Direito Penal e à aplicação da lei penal, assinale a alternativa correta:",
                opcoes: ["A) A lei penal posterior que de qualquer modo favorecer o agente aplica-se aos fatos anteriores, ainda que decididos por sentença condenatória transitada em julgado.", "B) A lei excepcional ou temporária, embora decorrido o período de sua duração ou cessadas as circunstâncias que a motivaram, não se aplica aos fatos praticados durante sua vigência.", "C) O dia do começo inclui-se no cômputo do prazo. Conta-se a fração de dia, na pena privativa de liberdade, inferior a uma hora.", "D) Considera-se praticado o crime no momento da Omitida a ação, independentemente do resultado.", "E) O princípio da legalidade restringe-se apenas às leis em sentido estrito editadas pelo Poder Executivo."],
                correta: 0,
                comentario: "Conforme o art. 2°, parágrafo único, do CP, a lei penal mais benéfica (novatio legis in mellius) retroage, alcançando inclusive fatos com condenação transitada em julgado."
            },
            {
                id: 22,
                enunciado: "Acerca do conceito analítico de crime, o Código Penal brasileiro adota a teoria:",
                opcoes: ["A) Tripartida (fato típico, antijurídico e culpável).", "B) Bipartida (fato típico e antijurídico, sendo a culpabilidade pressuposto de pena).", "C) Tetripartida (fato típico, antijurídico, culpável e punível).", "D) Unitária ou monista estrita.", "E) Finalista pura sem elementos normativos."],
                correta: 0,
                comentario: "O Brasil adota majoritariamente a teoria tripartida: crime é fato típico, ilícito (ou antijurídico) e culpável."
            },
            {
                id: 23,
                enunciado: "O agente que, por erro plenamente justificado pelas circunstâncias, supõe situação de fato que, se existisse, tornaria a ação legítima, comete:",
                opcoes: ["A) Erro de tipo essencial.", "B) Erro de proibição inevitável.", "C) Exulcão de ilicitude por legítima defesa real.", "D) Erro sobre a pessoa.", "E) Descriminante putativa por erro de fato (art. 20, § 1°, do CP)."],
                correta: 4,
                comentario: "O erro sobre os pressupostos fáticos de uma causa de justificação constitui as chamadas descriminantes putativas por erro de fato (isenta de pena se inevitável, ou reduz de 1/6 a 1/3 se evitável)."
            },
            {
                id: 24,
                enunciado: "Assinale a alternativa que define corretamente o instituto do arrependimento eficaz (artigo 102 do Código Penal - arrependimento eficaz/tentativa abandonada):",
                opcoes: ["A) O agente que, voluntariamente, desiste de continuar a execução só responde pelos atos já praticados.", "B) O agente que, voluntariamente, impede que o resultado se produza, só responde pelos atos já praticados.", "C) Nos crimes cometidos sem violência ou grave ameaça à pessoa, reparado o dano até o recebimento da denúncia, a pena será reduzida de um a dois terços.", "D) Ocorre quando o agente por circunstâncias alheias à sua vontade não atinge o resultado.", "E) A redução de pena aplica-se obrigatoriamente a qualquer crime se houver arrependimento posterior."],
                correta: 1,
                comentario: "O arrependimento eficaz ocorre após o término da execução (o agente faz tudo o que podia para consumar, mas arrepende-se e impede o resultado)."
            },
            {
                id: 25,
                enunciado: "Sobre o crime impossível (tentativa inadequada ou inidônea), assinale a correta:",
                opcoes: ["A) Não se pune a tentativa quando, por absoluta ineficácia do meio ou absoluta impropriedade do objeto, é impossível consumar-se o crime.", "B) O agente responde pelo crime consumado se houver dolo de perigo.", "C) O crime impossível afasta a tipicidade apenas se houver flagrante preparado.", "D) A ineficácia relativa do meio torna o crime impossível punível como tentativa.", "E) Ocorre crime impossível quando o agente desiste voluntariamente da execução."],
                correta: 0,
                comentario: "Literalidade do art. 17 do Código Penal (crime impossível por absoluta ineficácia do meio ou absoluta impropriedade do objeto)."
            },
            {
                id: 26,
                enunciado: "No concurso de pessoas, quem, de qualquer modo, concorre para o crime incide nas penas a este cominadas, medida na medida de sua culpabilidade. Esta é a regra da teoria:",
                opcoes: ["A) Dualista.", "B) Monista (ou unitária) temperada ou adotada pelo Código Penal.", "C) Pluralística pura.", "D) Objetivo-formal estrita.", "E) Extensiva de autoria exclusiva."],
                correta: 1,
                comentario: "O Código Penal adotou a teoria monista (todos os que concorrem para o mesmo crime cometem a mesma infração penal), mas com temperamentos ao individualizar a pena conforme a culpabilidade e participação."
            },
            {
                id: 27,
                enunciado: "Assinale a alternativa correta sobre as penas restritivas de direitos:",
                opcoes: ["A) São substitutivas das penas privativas de liberdade, desde que o crime seja com qualquer pena e independentemente de violência.", "B) São aplicadas em substituição à privativa de liberdade quando a pena não for superior a quatro anos, em crime doloso cometido sem violência ou grave ameaça à pessoa.", "C) Podem ser aplicadas em qualquer crime culposo, mesmo que a pena exceda quatro anos.", "D) Admitem-se em crimes hediondos independentemente do quantum de pena.", "E) São perpétuas em caso de reincidência específica."],
                correta: 1,
                comentario: "Requisitos do art. 44 do CP para substituição por restritivas de direitos: pena não superior a 4 anos (crime doloso sem violência) ou qualquer pena (crime culposo), réu não reincidente em crime doloso (ou se a reincidência for socialmente recomendável), e circunstâncias judiciais favoráveis."
            },
            {
                id: 28,
                enunciado: "O funcionário público que exige, para si ou para outrem, direta ou indiretamente, ainda que fora da função ou antes de assumi-la, mas em razão dela, vantagem indevida, comete o crime de:",
                opcoes: ["A) Corrupção passiva.", "B) Concussão.", "C) Corrupção ativa.", "D) Prevaricação.", "E) Excesso de exação."],
                correta: 1,
                comentario: "O verbo 'exigir' caracteriza o crime de Concussão (art. 316 do CP). Corrupção passiva é 'solicitar ou receber'."
            },
            {
                id: 29,
                enunciado: "Dar ou prometer vantagem indevida a funcionário público, para determiná-lo a praticar, omitir ou retardar ato de ofício, configura o crime de:",
                opcoes: ["A) Corrupção passiva.", "B) Tráfico de influência.", "C) Corrupção ativa.", "D) Favultamento de vantagem.", "E) Estelionato majorado."],
                correta: 2,
                comentario: "Corrupção ativa (art. 333 do CP). O pólo ativo é o particular (ou funcionário público agindo como particular)."
            },
            {
                id: 30,
                enunciado: "O funcionário público que retarda ou deixa de praticar ato de ofício, indevidamente, para satisfazer interesse ou sentimento pessoal, comete o crime de:",
                opcoes: ["A) Concussão.", "B) Corrupção passiva.", "C) Condescendência criminosa.", "D) Prevaricação.", "E) Advocacia administrativa."],
                correta: 3,
                comentario: "Prevaricação (art. 319 do CP): retardar ou omitir ato de ofício, ou praticá-lo contra expressa disposição de lei, para satisfazer interesse ou sentimento pessoal."
            },
            {
                id: 31,
                enunciado: "O homicídio praticado por grupo de extermínio, ainda que cometido por um só agente, é classificado como:",
                opcoes: ["A) Homicídio simples.", "B) Homicídio qualificado-privilegiado.", "C) Homicídio qualificado (hediondo).", "D) Crime de extermínio autônomo sem conexão com o homicídio.", "E) Lesão corporal seguida de morte."],
                correta: 2,
                comentario: "Conforme o art. 121, § 2°, inciso VIII, do CP, o homicídio cometido por grupo de extermínio, ainda que por um só agente, é qualificado e considerado crime hediondo."
            },
            {
                id: 32,
                enunciado: "Subtrair coisa alheia móvel, para si ou para outrem, mediante grave ameaça ou violência a pessoa, ou depois de havê-la, por qualquer meio, reduzido à impossibilidade de resistência, caracteriza o crime de:",
                opcoes: ["A) Furto qualificado.", "B) Extorsão.", "C) Roubo.", "D) Apropriação indébita.", "E) Estelionato."],
                correta: 2,
                comentario: "Definição legal do crime de Roubo (art. 157 do CP)."
            },
            {
                id: 33,
                enunciado: "Obter, para si ou para outrem, vantagem ilícita, em prejuízo alheio, induzindo ou mantendo alguém em erro, mediante artifício, ardil, ou qualquer outro meio fraudulento, configura:",
                opcoes: ["A) Furto mediante fraude.", "B) Estelionato.", "C) Extorsão indireta.", "D) Apropriação indébita previdenciária.", "E) Receptação qualificada."],
                correta: 1,
                comentario: "Definição legal do crime de Estelionato (art. 171 do CP). A fraude engana a vítima, fazendo com que ela entregue o bem voluntariamente (diferente do furto mediante fraude, em que a fraude serve para burlar a vigilância para subtrair)."
            },
            {
                id: 34,
                enunciado: "Matar alguém sob o domínio de violenta emoção, logo após injusta provocação da vítima, configura o crime de:",
                opcoes: ["A) Homicídio privilegiado.", "B) Homicídio culposo.", "C) Homicídio qualificado por motivo fútil.", "D) Legítima defesa putativa.", "E) Excesso extensivo."],
                correta: 0,
                comentario: "Trata-se do homicídio privilegiado (causa de diminuição de pena prevista no art. 121, § 1°, do CP)."
            },
            {
                id: 35,
                enunciado: "De acordo com a Lei de Crimes Hediondos (Lei n° 8.072/1990), o crime de estupro (art. 213 do CP) é considerado:",
                opcoes: ["A) Hediondo apenas se resultar lesão corporal grave ou morte.", "B) Hediondo em todas as suas modalidades (simples e qualificadas).", "C) Crime equiparado a hediondo.", "D) Crime comum sem previsão na Lei de Hediondos.", "E) Hediondo apenas se cometido contra vulnerável."],
                correta: 1,
                comentario: "Após alterações legislativas, o crime de estupro, em qualquer de suas formas, consta expressamente no rol dos crimes hediondos (art. 1°, inciso VI, da Lei n° 8.072/90)."
            },
            {
                id: 36,
                enunciado: "A associação de 3 (três) ou mais pessoas, para o fim de cometer crimes, caracteriza o crime de:",
                opcoes: ["A) Quadrilha ou bando (atual associação criminosa).", "B) Organização criminosa (se houver estrutura de poder superior a 4 pessoas).", "C) Associação para o tráfico.", "D) Conspiração internacional.", "E) Co autoria complexa."],
                correta: 0,
                comentario: "O art. 288 do CP tipifica a associação criminosa (antiga quadrilha ou bando) que exige o concurso de 3 ou mais pessoas para o fim de cometer crimes (diferente de organização criminosa, que exige 4 ou mais pessoas e estrutura específica - Lei 12.850/13)."
            },
            {
                id: 37,
                enunciado: "No crime de peculato-desvio (art. 312, caput, segunda parte, do CP), o funcionário público:",
                opcoes: ["A) Subtrai o dinheiro público diretamente dos cofres da repartição.", "B) Apropria-se de dinheiro, valor ou outro bem móvel, público ou particular, de que tem a posse em razão do cargo, desviando-o em proveito próprio ou alheio.", "C) Exige vantagem indevida para praticar ato de ofício.", "D) Concorre para o furto praticado por particular mediante facilitação.", "E) Emprega verba pública em desacordo com a lei orçamentária."],
                correta: 1,
                comentario: "O peculato abrange a apropriação e o desvio por funcionário que tem a posse do bem em razão do cargo. Se subtrai concorrendo com facilidade de fora, pode ser peculato impróprio ou furto qualificado dependendo da situação, mas o desvio é a modalidade própria."
            },
            {
                id: 38,
                enunciado: "O retardamento da ação policial (ação controlada), consistente em deixar de efetuar prisão em flagrante de investigados para apurar o momento mais adequado, é previsto na Lei de Organizações Criminosas (Lei n° 12.850/2013) e depende de:",
                opcoes: ["A) Autorização exclusiva do delegado de polícia por escrito.", "B) Comunicação prévia e fundamentada ao juiz competente e ao Ministério Público.", "C) Autorização expressa e antecipada do Poder Judiciário em qualquer caso.", "D) Concordância formal do investigado.", "E) Decreto do Poder Executivo estadual."],
                correta: 1,
                comentario: "A ação controlada exige comunicação prévia e fundamentada ao juiz e ao Ministério Público, para que o juiz possa acompanhar, se for o caso."
            },
            {
                id: 39,
                enunciado: "O uso de algemas em investigados ou presos, conforme a jurisprudência vinculante do STF (Súmula Vinculante n° 11), é:",
                opcoes: ["A) Regra absoluta em qualquer deslocamento de presos em delegacias.", "B) Lícito em qualquer hipótese, a critério do policial que efetuou a prisão.", "C) Ilícito como regra, sendo permitido apenas excepcionalmente, por escrito, em caso de resistência, risco de fuga ou perigo à integridade física própria ou alheia.", "D) Proibido de forma absoluta, sob pena de nulidade da prisão em flagrante.", "E) Permitido apenas após o oferecimento da denúncia pelo Ministério Público."],
                correta: 2,
                comentario: "A Súmula Vinculante 11 do STF estabelece que o uso de algemas é excepcional, devendo ser justificado por escrito, sob pena de responsabilidade penal, civil e disciplinar."
            },
            {
                id: 40,
                enunciado: "O crime de tortura (Lei n° 9.455/1997) é considerado pela Constituição Federal e pela lei penal como:",
                opcoes: ["A) Crime hediondo.", "B) Crime inafiançável e insuscetível de graça ou anistia, equiparado a hediondo.", "C) Crime afiançável se cometido por particular sem vínculo com o Estado.", "D) Contravenção penal de natureza grave.", "E) Crime imprescritível em todas as suas modalidades."],
                correta: 1,
                comentario: "A tortura é equiparada a crime hediondo pela CF/88 e pela Lei 9.455/97, sendo inafiançável e insuscetível de graça ou anistia (não confundir com imprescritível, pois apenas o racismo e a ação de grupos armados contra a ordem constitucional são imprescritíveis)."
            }
        ],
        "Direito Processual Penal": [
            {
                id: 41,
                enunciado: "O inquérito policial, procedimento administrativo inquisitório conduzido pela Polícia Judiciária, tem como uma de suas características principais:",
                opcoes: ["A) Garantir o contraditório e a ampla defesa em sua plenitude durante todas as oitivas.", "B) Ser imprescritível e indispensável para a propositura de qualquer ação penal.", "C) Ser sigiloso, inquisitivo, dispensável, escrito e oficial.", "D) Ser da competência exclusiva dos juízes de direito das varas criminais.", "E) Exigir a presença obrigatória de defensor constituído para o indiciado em todos os atos."],
                correta: 2,
                comentario: "O inquérito policial é inquisitivo (não há contraditório amplo), dispensável (se a denúncia já tiver base em outras provas), escrito, sigiloso e oficial."
            },
            {
                id: 42,
                enunciado: "Qualquer pessoa do povo poderá e os órgãos policiais e seus agentes deverão prender quem quer que seja encontrado em flagrante delito. Trata-se do flagrante:",
                opcoes: ["A) Próprio (ou facultativo para o povo e obrigatório para as autoridades).", "B) Impróprio ou imperfeito.", "C) Retardado.", "D) Preparado.", "E) Esperado."],
                correta: 0,
                comentario: "O flagrante facultativo (para o povo) e obrigatório (para as autoridades policiais) refere-se ao flagrante próprio ou real, quando o agente é surpreendido cometendo a infração ou logo após."
            },
            {
                id: 43,
                enunciado: "O flagrante preparado (delito putativo por obra do agente provocador), consagrado na jurisprudência pátria (Súmula 145 do STF):",
                opcoes: ["A) Torna o crime perfeitamente válido e enseja condenação severa.", "B) É considerado crime impossível, tornando a conduta atípica.", "C) É lícito quando autorizado pelo delegado de polícia.", "D) Valida a prisão em flagrante se houver consentimento da vítima.", "E) Aplica-se apenas aos crimes hediondos."],
                correta: 1,
                comentario: "Súmula 145 do STF: 'Não há crime quando a preparação do flagrante pela polícia torna impossível a sua consumação.' (Crime impossível)."
            },
            {
                id: 44,
                enunciado: "A prisão preventiva, medida cautelar pessoal decretada pelo juiz durante a investigação ou o processo, exige como pressupostos indispensáveis:",
                opcoes: ["A) Apenas a prova da existência do crime (materialidade).", "B) Prova da existência do crime e indício suficiente de autoria (fumus commissi delicti), além do perigo gerado pelo estado de liberdade (periculum libertatis).", "C) Confissão irretratável do indiciado na delegacia.", "D) Requerimento exclusivo da autoridade policial.", "E) Condenação anterior transitada em julgado."],
                correta: 1,
                comentario: "Requisitos fundamentais da prisão preventiva (art. 312 do CPP): fumus commissi delicti (prova da materialidade e indícios de autoria) + periculum libertatis (garantia da ordem pública, econômica, instrução criminal ou aplicação da lei penal)."
            },
            {
                id: 45,
                enunciado: "O inquérito policial deverá terminar no prazo de __ dias, se o indiciado tiver sido preso em flagrante ou estiver preso preventivamente, contado o prazo desde o dia em que se executou a ordem de prisão, nos crimes comuns.",
                opcoes: ["A) 10", "B) 15", "C) 30", "D) 40", "E) 60"],
                correta: 0,
                comentario: "Prazo para conclusão do inquérito policial com indiciado preso é de 10 dias (art. 10 do CPP) nos crimes da competência da justiça comum (em federais pode variar, mas a regra geral do CPP é 10 dias preso e 30 solto)."
            },
            {
                id: 46,
                enunciado: "A ação penal pública incondicionada, que constitui a regra geral no direito brasileiro, é promovida por:",
                opcoes: ["A) O delegado de polícia mediante portaria.", "B) O Ministério Público, independentemente de qualquer condição ou representação.", "C) A vítima por meio de queixa-crime.", "D) O juiz de ofício.", "E) O Procurador-Geral do Estado."],
                correta: 1,
                comentario: "A ação penal pública incondicionada é de titularidade privativa do Ministério Público, que a move independentemente de representação da vítima ou requisição."
            },
            {
                id: 47,
                enunciado: "O mandado de busca e apreensão domiciliar, quando executado durante o dia:",
                opcoes: ["A) Pode ser cumprido a qualquer hora da noite, desde que com autorização de dois delegados.", "B) Exige o consentimento expresso e irrevogável do morador em qualquer situação.", "C) Deve ser cumprido durante o dia, entendendo-se como tal das 6h às 18h, mediante ordem escrita judicial, sem constranger os moradores mais do que o necessário.", "D) Pode ser cumprido à noite se houver urgência justificada pelo policial.", "E) É dispensável se a polícia desconfiar de tráfico de drogas."],
                correta: 2,
                comentario: "Regra do CPP: busca domiciliar durante o dia (das 6h às 18h) com mandado judicial escrito. À noite, a casa é asilo inviolável, salvo flagrante delito, desastre ou socorro, ou com consentimento do morador (art. 5°, XI, da CF)."
            },
            {
                id: 48,
                enunciado: "Acerca da interceptação de comunicações telefônicas (Lei n° 9.296/1996), assinale a alternativa correta:",
                opcoes: ["A) Pode ser determinada pelo delegado de polícia em casos urgentes.", "B) Depende de ordem do juiz competente da ação principal, de ofício ou a requerimento da autoridade policial ou do Ministério Público, desde que haja indícios razoáveis de autoria ou participação em infração penal punida com reclusão.", "C) Admite-se para crimes punidos com detenção.", "D) O prazo máximo de interceptação é de 90 dias, improrrogáveis.", "E) Pode ser realizada sem fundamentação judicial em investigações de homicídio simples."],
                correta: 1,
                comentario: "A interceptação telefônica exige ordem judicial (juiz competente), requerimento de autoridade policial ou MP, para crimes punidos com reclusão, pelo prazo de 15 dias, renovável por igual período comprovada a indispensabilidade."
            },
            {
                id: 49,
                enunciado: "A autoridade policial, ao tomar conhecimento da prática de infração penal, deverá, imediatamente:",
                opcoes: ["A) Arquivar o caso se a vítima desistir.", "B) Dirigir-se ao local, providenciar para que não se alterem o estado e conservação das coisas até a chegada dos peritos criminais, apreender os objetos que tiverem relação com o fato, colher todas as provas que servirem para o esclarecimento do fato e suas circunstâncias.", "C) Emitir mandado de prisão preventiva contra todos os suspeitos.", "D) Solicitar autorização ao juiz para iniciar as investigações.", "E) Encaminhar o inquérito diretamente para julgamento."],
                correta: 1,
                comentario: "Deveres da autoridade policial logo que ciente da infração penal (preservação do local do crime, apreensão de objetos, oitiva de testemunhas - art. 6° do CPP)."
            },
            {
                id: 50,
                enunciado: "O indiciado poderá constituir defensor para acompanhá-lo no inquérito policial? O defensor terá acesso aos autos?",
                opcoes: ["A) Não, o inquérito é inquisitivo e o indiciado não tem direito a advogado nesta fase.", "B) Sim, o indiciado pode constituir advogado, e este tem direito de acesso amplo aos elementos de prova já documentados em procedimento investigatório, vedado o acesso apenas a diligências em andamento (Súmula Vinculante 14 do STF).", "C) Sim, mas apenas após o interrogatório policial.", "D) Apenas se o juiz autorizar expressamente.", "E) O advogado só pode atuar se nomeado pelo Ministério Público."],
                correta: 1,
                comentario: "Súmula Vinculante 14 do STF garante ao defensor o acesso aos elementos de prova documentados que digam respeito ao exercício do direito de defesa, ressalvadas diligências em andamento."
            },
            {
                id: 51,
                enunciado: "A extinção da punibilidade pode ocorrer por diversas causas previstas no art. 107 do Código Penal. Dentre elas, NÃO figura:",
                opcoes: ["A) A prescrição, decadência ou perempção.", "B) A anistia, graça ou indulto.", "C) A retratação do agente (nos casos admitidos em lei).", "D) A condenação penal transitada em julgado com cumprimento de pena.", "E) O perdão judicial (nos casos previstos em lei)."],
                correta: 3,
                comentario: "O cumprimento da pena esgota a pretensão executória, mas a extinção da punibilidade decorre de institutos específicos do art. 107 do CP (como morte do agente, amnistia, prescrição, decadência, perempção, renúncia, perdão, retratação, perdão judicial). O cumprimento da pena extingue a punibilidade pelo exaurimento, mas o cumprimento em si é a consequência da condenação, enquanto a extinção por morte, prescrição etc. obstam ou encerram antes ou durante."
            },
            {
                id: 52,
                enunciado: "O habeas corpus é garantia constitucional destinada a proteger:",
                opcoes: ["A) O direito de propriedade de bens apreendidos indevidamente.", "B) A liberdade de locomoção, sempre que alguém sofrer ou se achar ameaçado de sofrer violência ou coação ilegal em sua liberdade de ir e vir.", "C) A honra e a imagem do investigado em inquérito policial.", "D) O sigilo fiscal e bancário de qualquer cidadão.", "E) A legalidade de atos administrativos disciplinares de servidores."],
                correta: 1,
                comentario: "O habeas corpus protege a liberdade de locomoção contra violência ou coação ilegal (art. 5°, LXVIII, da CF e art. 647 do CPP)."
            },
            {
                id: 53,
                enunciado: "Em relação ao reconhecimento de pessoas e coisas na fase policial (art. 226 do CPP), a jurisprudência recente dos tribunais superiores tem decidido que as formalidades legais previstas no artigo:",
                opcoes: ["A) São meras recomendações de caráter irrelevante para a validade da prova.", "B) Devem ser estritamente observadas, constituindo a inobservância causa de nulidade ou fragilidade probatória para o reconhecimento do suspeito.", "C) Aplicam-se apenas durante a instrução criminal em juízo.", "D) Exigem a presença obrigatória de um juiz de direito na delegacia.", "E) Foram revogadas tacitamente pelo Pacote Anticrime."],
                correta: 1,
                comentario: "O STJ firmou entendimento de que as formalidades do art. 226 do CPP para o reconhecimento de pessoas são exigências legais cuja inobservância gera imprestabilidade probatória."
            },
            {
                id: 54,
                enunciado: "A prisão temporária (Lei n° 7.960/1989), cabível na fase de investigação policial, tem prazo padrão de:",
                opcoes: ["A) 5 dias, prorrogável por igual período em caso de extrema e comprovada necessidade.", "B) 30 dias improrrogáveis para crimes comuns.", "C) 10 dias sem possibilidade de prorrogação.", "D) Indeterminado até a conclusão do relatório policial.", "E) 48 horas."],
                correta: 0,
                comentario: "Prazo da prisão temporária em crimes comuns é de 5 dias, prorrogável por mais 5 dias. Em crimes hediondos e equiparados, o prazo é de 30 dias, prorrogável por igual período (Lei 8.072/90)."
            },
            {
                id: 55,
                enunciado: "O acordo de não persecução penal (ANPP), introduzido no CPP pela Lei n° 13.964/2019 (Pacote Anticrime), aplica-se a:",
                opcoes: ["A) Crimes cometidos com violência ou grave ameaça à pessoa.", "B) Infrações penais com pena mínima abstrata inferior a 4 anos, praticadas sem violência ou grave ameaça e com confissão formal e circunstancial.", "C) Qualquer crime hediondo cuja pena máxima não ultrapasse 10 anos.", "D) Réus reincidentes em crimes dolosos com habitualidade criminosa.", "E) Crimes de competência exclusiva do Tribunal do Júri."],
                correta: 1,
                comentario: "Requisitos do ANPP (art. 28-A do CPP): crime sem violência/grave ameaça, pena mínima inferior a 4 anos, confissão formal e circunstancial."
            },
            {
                id: 56,
                enunciado: "A autoridade policial pode determinar o arquivamento de inquérito policial?",
                opcoes: ["A) Sim, soberanamente, bastando comunicar o Ministério Público.", "B) Não. A autoridade policial não pode arquivar autos de inquérito policial, cabendo tal ato privativamente ao Ministério Público requerer o arquivamento ao juiz (ou na forma da nova legislação com homologação conforme o caso).", "C) Sim, desde que haja concordância da vítima.", "D) Sim, nos crimes de menor potencial ofensivo.", "E) Apenas com autorização do Secretário de Segurança Pública."],
                correta: 1,
                comentario: "O delegado de polícia não pode arquivar inquérito (princípio da indisponibilidade do inquérito policial, art. 17 do CPP)."
            },
            {
                id: 57,
                enunciado: "Se o investigado for menor de 21 e maior de 18 anos, ou menor de 21 anos na data dos fatos, o inquérito policial ou processo observará:",
                opcoes: ["A) A necessidade de curador especial obrigatório em todas as fases.", "B) A imputabilidade penal plena, sendo tratado como maior penalmente (maioridade penal aos 18 anos).", "C) O Estatuto da Criança e do Adolescente (ECA).", "D) Imunidade parlamentar provisória.", "E) Processo sumário perante o Juizado Especial Criminal."],
                correta: 1,
                comentario: "A maioridade penal no Brasil é aos 18 anos (art. 27 do CP e art. 228 da CF). A antiga figura do menor de 21 anos como semi-imputável (atenuante genérica) ainda existe no art. 65, I, do CP, mas não afasta a maioridade penal plena."
            },
            {
                id: 58,
                enunciado: "O boletim de ocorrência policial lavrado por autoridade competente possui natureza jurídica de:",
                opcoes: ["A) Prova tarifada com presunção absoluta de veracidade.", "B) Documento público que goza de presunção relativa (juris tantum) de veracidade dos fatos narrados perante a autoridade, admitindo prova em contrário.", "C) Sentença penal condenatória sumária.", "D) Mera folha de rascunho sem valor probatório.", "E) Confissão irretratável do noticiante."],
                correta: 1,
                comentario: "O B.O. é documento público dotado de presunção relativa de veracidade, podendo ser elidido por prova em contrário durante a instrução."
            },
            {
                id: 59,
                enunciado: "A cadeia de custódia, regulamentada no CPP (arts. 158-A a 158-F), refere-se ao:",
                opcoes: ["A) Conjunto de regras para custódia de presos nas delegacias.", "B) Conjunto de procedimentos voltados a preservar e documentar a história cronológica do vestígio coletado em locais de crime para rastrear sua integridade.", "C) Sistema de algemas e transporte de detentos em viaturas blindadas.", "D) Regimento interno das polícias civis estaduais.", "E) Fluxo de remessa de inquéritos policiais ao Tribunal de Justiça."],
                correta: 1,
                comentario: "Definição legal de cadeia de custódia: conjunto de todos os procedimentos para manter e documentar a rastreabilidade e integridade dos vestígios de crimes."
            },
            {
                id: 60,
                enunciado: "Quando a infração houver sido praticada em território estrangeiro, a competência para o inquérito e processo, em regra (salvo extraterritorialidade incondicionada), será:",
                opcoes: ["A) Da Justiça Federal da Capital Federal.", "B) Do Supremo Tribunal Federal.", "C) Do último domicílio do acusado no Brasil, ou, se conhecido, do local onde houver por último atracado a embarcação/pousado a aeronave, ou do Distrito Federal.", "D) Exclusiva da Interpol no país de origem.", "E) Da justiça do país estrangeiro sem cooperação brasileira."],
                correta: 2,
                comentario: "Regra do art. 89 do CPP para crimes praticados fora do Brasil."
            }
        ],
        "Direito Constitucional": [
            {
                id: 61,
                enunciado: "Conforme a Constituição Federal de 1988, as polícias civis, dirigidas por delegados de polícia de carreira, incumbem, ressalvada a competência da União:",
                opcoes: ["A) O policiamento ostensivo e a preservação da ordem pública.", "B) As funções de polícia judiciária e a apuração de infrações penais, exceto as militares.", "C) A fiscalização do trânsito rodoviário estadual e patrulhamento de rodovias.", "D) A guarda das instalações públicas do Estado e presídios de segurança máxima.", "E) A defesa do território nacional contra ameaças estrangeiras."],
                correta: 1,
                comentario: "Art. 144, § 4°, da CF: Às polícias civis, dirigidas por delegados de polícia de carreira, incumbem, ressalvada a competência da União, as funções de polícia judiciária e a apuração de infrações penais, exceto as militares."
            },
            {
                id: 62,
                enunciado: "A inviolabilidade do domicílio (art. 5°, XI, da CF) admite ingresso sem consentimento do morador durante a noite em caso de:",
                opcoes: ["A) Qualquer crime investigado mediante mandado judicial urgente.", "B) Flagrante delito, desastre, ou para prestar socorro, ou durante o dia por ordem judicial.", "C) Ordem escrita de delegado de polícia fundamentada em denúncia anônima.", "D) Suspeita de furto sem flagrante ativo.", "E) Fiscalização tributária estadual."],
                correta: 1,
                comentario: "Exceções constitucionais à inviolabilidade domiciliar: flagrante delito, desastre, socorro (a qualquer hora) ou durante o dia por determinação judicial."
            },
            {
                id: 63,
                enunciado: "Assinale a alternativa correta sobre os direitos e garantias fundamentais previstos no art. 5° da CF/88:",
                opcoes: ["A) A prisão de qualquer pessoa e o local onde se encontre serão comunicados imediatamente ao juiz competente e à família do preso ou à pessoa por ele indicada.", "B) A lei não excluirá da apreciação do Poder Judiciário lesão ou ameaça a direito, exceto se houver cláusula de arbitragem obrigatória.", "C) É livre a expressão da atividade intelectual, artística, científica e de comunicação, sujeita a censura prévia do Estado em eventos públicos.", "D) Ninguém será levado à prisão ou nela mantido quando a lei admitir a liberdade provisória sem fiança, sendo vedada a utilização de monitoração eletrônica.", "E) A casa é o asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo a qualquer hora por ordem judicial."],
                correta: 0,
                comentario: "Literalidade do art. 5°, LXII, da CF: a prisão será comunicada imediatamente ao juiz e à família/ind indicado."
            },
            {
                id: 64,
                enunciado: "O mandado de segurança coletivo pode ser impetrado por partido político com representação no Congresso Nacional, organização sindical, entidade de classe ou associação legalmente constituída e em funcionamento há pelo menos:",
                opcoes: ["A) 6 meses.", "B) 1 ano.", "C) 2 anos.", "D) 5 anos.", "E) 3 anos."],
                correta: 1,
                comentario: "Requisito temporal para impetração de mandado de segurança coletivo por associação: em funcionamento há pelo menos 1 ano (art. 5°, LXX, b, da CF)."
            },
            {
                id: 65,
                enunciado: "A competência para legislar privativamente sobre direito penal, processual penal, civil e eleitoral é:",
                opcoes: ["A) Exclusiva dos Municípios.", "B) Concorrente entre Estados e União.", "C) Privativa da União.", "D) Comum entre União, Estados e Distrito Federal.", "E) Facultativa aos Estados-membros."],
                correta: 2,
                comentario: "Art. 22, I, da CF: Compete privativamente à União legislar sobre direito civil, comercial, penal, processual, eleitoral, agrário, marítimo, aeronáutico, espacial e do trabalho."
            },
            {
                id: 66,
                enunciado: "São órgãos de segurança pública previstos expressamente no art. 144 da Constituição Federal, EXCETO:",
                opcoes: ["A) Polícia Federal.", "B) Polícia Rodoviária Federal.", "C) Guarda Municipal urbana armada.", "D) Polícias Civis.", "E) Polícias Militares e Corpos de Bombeiros Militares."],
                correta: 2,
                comentario: "A Guarda Municipal (embora importante e reconhecida pelo STF como órgão de segurança pública municipal) não consta no rol original estrito do art. 144 da CF (que elenca PF, PRF, PFF, Polícias Civis, Polícias Militares e Corpos de Bombeiros Militares, além da Polícia Penal incluída posteriormente por emenda). Contudo, em bancas exigindo o texto constitucional estrito, guardas municipais geram discussões, mas a alternativa C destaca-se porque o rol do art. 144 elenca: I - PF; II - PRF; III - PFF; IV - polícias civis; V - polícias militares e corpos de bombeiros militares; VI - polícias penais federal, estaduais e distrital."
            },
            {
                id: 67,
                enunciado: "O direito de resposta proporcional ao agravo, além da indenização por dano material, moral ou à imagem, é assegurado pela Constituição Federal a:",
                opcoes: ["A) Apenas agentes políticos em exercício.", "B) Qualquer cidadão ou pessoa jurídica ofendida.", "C) Exclusivamente órgãos de imprensa cadastrados.", "D) Pessoas físicas detentoras de mandato eletivo.", "E) Servidores públicos civis perseguidos disciplinarmente."],
                correta: 1,
                comentario: "Art. 5°, V, da CF: é assegurado o direito de resposta, proporcional ao agravo, além da indenização por dano material, moral ou à imagem."
            },
            {
                id: 68,
                enunciado: "A nacionalidade brasileira nata é conferida, entre outras hipóteses, aos:",
                opcoes: ["A) Nascidos no estrangeiro, de pai brasileiro ou mãe brasileira, desde que venham a residir na República Federativa do Brasil e optem, em qualquer tempo, depois de atingida a maioridade, pela nacionalidade brasileira.", "B) Estrangeiros de qualquer nacionalidade após 5 anos de residência ininterrupta.", "C) Nascidos na República Federativa do Brasil, ainda que de pais estrangeiros a serviço de seu país.", "D) Naturalizados por decreto presidencial discricionário.", "E) Filhos de brasileiros nascidos no exterior cujo pai ou mãe esteja a serviço do Brasil, desde que registrados em repartição brasileira competente."],
                correta: 4,
                comentario: "Art. 12, I, 'b', da CF: são brasileiros natos os nascidos no estrangeiro, de pai brasileiro ou mãe brasileira, desde que qualquer deles esteja a serviço da República Federativa do Brasil."
            },
            {
                id: 69,
                enunciado: "A criação de novos Municípios dar-se-á por lei estadual, dentro do período determinado por Lei Complementar Federal, e dependerá de:",
                opcoes: ["A) Consulta prévia, mediante plebiscito, às populações dos Municípios envolvidos.", "B) Decreto legislativo aprovado por maioria absoluta no Congresso Nacional.", "C) Autorização do Tribunal de Contas do Estado.", "D) Referendo popular obrigatório após a criação.", "E) Aprovação por maioria simples na Câmara Municipal da capital."],
                correta: 0,
                comentario: "Art. 18, § 4°, da CF: A criação, a incorporação, a fusão e o desmembramento de Municípios far-se-ão por lei estadual, dentro do período de lei complementar federal, e dependerão de consulta prévia, mediante plebiscito, às populações dos Municípios envolvidos."
            },
            {
                id: 70,
                enunciado: "Sobre a estabilidade do servidor público civil ocupante de cargo de provimento efetivo, assinale a correta:",
                opcoes: ["A) Adquire estabilidade após 2 anos de efetivo exercício.", "B) Adquire estabilidade após 3 anos de efetivo exercício, mediante aprovação em estágio probatório e avaliação especial de desempenho.", "C) É adquirida automaticamente no ato de posse.", "D) Não se aplica aos servidores policiais civis.", "E) É perdida apenas por condenação criminal transitada em julgado."],
                correta: 1,
                comentario: "Art. 41 da CF: São estibes após 3 anos de efetivo exercício os servidores nomeados para cargo de provimento efetivo em virtude de concurso público, sujeitos a avaliação especial de desempenho."
            },
            {
                id: 71,
                enunciado: "A Ação Popular pode ser proposta por qualquer cidadão para anular ato lesivo ao patrimônio público, à moralidade administrativa, ao meio ambiente e ao patrimônio histórico e cultural. Para os fins da ação, cidadão é:",
                opcoes: ["A) Qualquer pessoa residente no território nacional, com ou sem CPF.", "B) O indivíduo no gozo dos seus direitos políticos (eleitor).", "C) Apenas advogado inscrito na OAB.", "D) Estrangeiro com visto permanente.", "E) Pessoa jurídica sem fins lucrativos."],
                correta: 1,
                comentario: "Cidadão, para fins de Ação Popular (art. 5°, LXXIII, da CF), é o indivíduo que está no gozo de seus direitos políticos (possui título de eleitor)."
            },
            {
                id: 72,
                enunciado: "O habeas data tem por finalidade:",
                opcoes: ["A) Proteger a liberdade de locomoção contra prisões ilegais.", "B) Assegurar o conhecimento de informações relativas à pessoa do impetrante, constantes de registros ou bancos de dados de entidades governamentais ou de caráter público, ou para retificação de dados.", "C) Anular ato lesivo ao patrimônio público.", "D) Garantir o cumprimento de obrigação legal por autoridade federal.", "E) Proteger o direito de reunião pacífica."],
                correta: 1,
                comentario: "Definição constitucional do habeas data (art. 5°, LXXII, da CF)."
            },
            {
                id: 73,
                enunciado: "É garantido o direito de greve, competindo aos trabalhadores decidir sobre a oportunidade de exercê-lo e sobre os interesses que devam por meio dele defender. Esta regra aplica-se aos policiais civis?",
                opcoes: ["A) Sim, plenamente, sem qualquer restrição.", "B) Não. O STF pacificou entendimento (Tema 522 de Repercussão Geral) de que é vedado o exercício do direito de greve aos policiais civis e demais servidores públicos de segurança pública armados.", "C) Apenas se houver autorização prévia da chefia de Polícia.", "D) Sim, desde que mantido um contingente mínimo de 50%.", "E) A Constituição não veda, mas lei ordinária estadual pode proibir."],
                correta: 1,
                comentario: "O STF firmou tese de repercussão geral (Tema 522) proibindo o direito de greve a servidores públicos que atuem diretamente na segurança pública (policiais civis, militares, penais, etc.)."
            },
            {
                id: 74,
                enunciado: "A criação de Guardas Municipais pelos Municípios é prevista na Constituição Federal como:",
                opcoes: ["A) Obrigatória para todas as cidades com mais de 20 mil habitantes.", "B) Facultativa, podendo os Municípios constituir guardas municipais destinadas à proteção de seus bens, serviços e instalações, conforme dispuser a lei.", "C) Proibida, pois a segurança pública compete exclusivamente aos Estados.", "D) Dependente de aprovação prévia do Exército Brasileiro.", "E) Vinculada ao comando direto da Polícia Militar estadual."],
                correta: 1,
                comentario: "Art. 144, § 8°, da CF: Os Municípios poderão constituir guardas municipais destinadas à proteção de seus bens, serviços e instalações, conforme dispuser a lei."
            },
            {
                id: 75,
                enunciado: "A Polícia Penal, instituída pela Emenda Constitutional n° 104/2019, é órgão encarregado de:",
                opcoes: ["A) Patrulhamento ostensivo de rodovias estaduais.", "B) Investigação de crimes cibernéticos em âmbito federal.", "C) Segurança dos estabelecimentos penais, sendo estruturada em carreira única pelo respectivo ente federativo.", "D) Guarda de tribunais de justiça e escolta de magistrados.", "E) Combate ao tráfico internacional de drogas nas fronteiras."],
                correta: 2,
                comentario: "Art. 144, § 5-A, da CF: A Polícia Penal, federais, estaduais e distrital, é a encarregada da segurança dos estabelecimentos penais."
            }
        ],
        "Direito Administrativo": [
            {
                id: 76,
                enunciado: "Os princípios expressos fundamentais da Administração Pública na Constituição Federal (art. 37, caput) são mnemônica e legalmente conhecidos pelo acrônimo LIMPE:",
                opcoes: ["A) Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência.", "B) Liberdade, Igualdade, Modernidade, Probidade e Eficiência.", "C) Legalidade, Imparcialidade, Meritocracia, Publicidade e Economicidade.", "D) Legitimidade, Impessoalidade, Moralidade, Presteza e Eficácia.", "E) Legalidade, Interesses públicos, Moralidade, Prudência e Eficiência."],
                correta: 0,
                comentario: "LIMPE: Legalidade, Impessoalidade, Moralidade, Publicidade e Eficiência (art. 37, caput, da CF)."
            },
            {
                id: 77,
                enunciado: "O princípio da Administração Pública que proíbe a promoção pessoal de autoridades ou servidores públicos em propagundas, nomes, símbolos ou imagens de obras públicas é o da:",
                opcoes: ["A) Legalidade.", "B) Eficiência.", "C) Impessoalidade.", "D) Continuidade do serviço público.", "E) Autotutela."],
                correta: 2,
                comentario: "O princípio da impessoalidade veda a promoção pessoal de agentes públicos com recursos e obras da administração pública (art. 37, § 1°, da CF)."
            },
            {
                id: 78,
                enunciado: "Os atos administrativos possuem atributos ou características próprias que os distinguem dos atos privados. Dentre eles, a presunção de legitimidade e veracidade significa que:",
                opcoes: ["A) Os atos não podem ser contestados judicialmente em nenhuma hipótese.", "B) Os atos presumem-se verdadeiros e conformes ao direito até prova em contrário.", "C) Os atos entram em vigor apenas após publicação no Diário Oficial e aprovação legislativa.", "D) A administração pública pode anular seus atos sem justificativa.", "E) Todos os atos geram efeitos retroativos obrigatórios."],
                correta: 1,
                comentario: "Presunção de legitimidade e veracidade é atributo que faz com que o ato administrativo seja considerado verdadeiro e legal até que se prove o contrário (inversão do ônus da prova)."
            },
            {
                id: 79,
                enunciado: "O poder administrativo que confere à Administração a prerrogativa de disciplinar a conduta de seus servidores e aplicar penalidades internas por infrações funcionais é o:",
                opcoes: ["A) Poder Hierárquico.", "B) Poder Disciplinar.", "C) Poder Regulamentar.", "D) Poder de Polícia.", "E) Poder Vinculado."],
                correta: 1,
                comentario: "Poder disciplinar é a faculdade de apurar infrações e aplicar penalidades aos agentes públicos sujeitos à disciplina interna ou a particulares com vínculo específico."
            },
            {
                id: 80,
                enunciado: "O poder de polícia, em sentido estrito, pode ser definido como a atividade da administração pública que, limitando ou disciplinando direito, interesse ou liberdade, regula a prática de ato em razão do interesse público. Seus atributos essenciais são:",
                opcoes: ["A) Discricionariedade, coercibilidade e auto-executoriedade.", "B) Vinculação, gratuidade e bilateralidade.", "C) Inalienabilidade, imprescritibilidade e soberania.", "D) Subsidiariedade, solidariedade e onerosidade.", "E) Judicialidade prévia obrigatória e consensualidade."],
                correta: 0,
                comentario: "Atributos do poder de polícia: discricionariedade, coercibilidade (uso da força se necessário) e auto-executoriedade (execução direta pela administração sem ordem judicial prévia)."
            },
            {
                id: 81,
                enunciado: "Quanto à anulação e revogação de atos administrativos, assinale a alternativa correta:",
                opcoes: ["A) A Administração pode anular seus próprios atos, quando eivados de vício de ilegalidade, e deve revogá-los por motivo de conveniência ou oportunidade, respeitados os direitos adquiridos.", "B) A revogação opera efeitos retroativos (ex tunc), desfazendo o ato desde sua origem.", "C) O Poder Judiciário pode revogar atos administrativos discricionários ilegais.", "D) Atos ilegais geram direitos adquiridos que impedem sua anulação após 1 ano.", "E) A anulação depende sempre de prévia decisão judicial."],
                correta: 0,
                comentario: "Súmula 473 do STF: A administração pode anular seus atos, quando eivados de vícios que os tornam ilegais (efeito ex tunc), porque deles não se originam direitos; ou revogá-los, por motivo de conveniência ou oportunidade (efeito ex nunc), respeitados os direitos adquiridos."
            },
            {
                id: 82,
                enunciado: "Os requisitos (ou elementos) de validade do ato administrativo são:",
                opcoes: ["A) Competência, finalidade, forma, motivo e objeto.", "B) Autorização, conveniência, oportunidade, legalidade e publicidade.", "C) Sujeito ativo, sujeito passivo, causa, efeito e sanção.", "D) Vontade, capacidade, licitude, forma escrita e registro.", "E) Competência, hierarquia, subordinação, conveniência e custo."],
                correta: 0,
                comentario: "Os 5 requisitos/elementos do ato administrativo (comprovados na mnemônica COM-FI-FO-MO-OB): Competência, Finalidade, Forma, Motivo e Objeto."
            },
            {
                id: 83,
                enunciado: "A responsabilidade civil do Estado no direito brasileiro, conforme o art. 37, § 6°, da Constituição Federal, é do tipo:",
                opcoes: ["A) Subjetiva, exigindo prova de dolo ou culpa do agente público em qualquer caso.", "B) Objetiva, sob a teoria do risco administrativo, respondendo as pessoas jurídicas de direito público e as de direito privado prestadoras de serviços públicos pelos danos que seus agentes, nessa qualidade, causarem a terceiros.", "C) Integral, respondendo o Estado por qualquer dano, inclusive por culpa exclusiva da vítima.", "D) Subsidiária, devendo o lesado processar primeiro o policial individualmente.", "E) Contratual estrita sem cobertura para atos comissivos."],
                correta: 1,
                comentario: "Responsabilidade civil objetiva do Estado (Teoria do Risco Administrativo). O Estado responde perante o particular, cabendo ação de regresso contra o agente em caso de dolo ou culpa."
            },
            {
                id: 84,
                enunciado: "O ato administrativo que apresenta vício insanável no objeto (por ser impossível ou ilícito) ou na finalidade (desvio de poder) é considerado:",
                opcoes: ["A) Perfeitamente válido e sanável por ratificação.", "B) Nulo, não podendo ser convalidado.", "C) Anulável, produzindo efeitos até que o juiz o declare inválido.", "D) Inexistente sem repercussão jurídica.", "E) Meramente irregular."],
                correta: 1,
                comentario: "O ato com vício insanável no objeto, motivo ou finalidade é nulo e não admite convalidação (ao contrário de incompetência em razão do lugar e vício de forma, que podem ser convalidados se não forem essenciais)."
            },
            {
                id: 85,
                enunciado: "No âmbito da improbidade administrativa (Lei n° 8.429/1992, com alterações da Lei n° 14.230/2021), constitui exigência para a configuração de ato de improbidade:",
                opcoes: ["A) A comprovação de culpa simples do agente público em qualquer conduta.", "B) A exigência de dolo específico (vontade livre e consciente de alcançar o resultado ilícito tipificado), não havendo mais modalidade culposa.", "C) A condenação criminal transitada em julgado prévia e obrigatória.", "D) O prejuízo efetivo ao erário em todas as hipóteses.", "E) A perda automática do cargo antes da defesa prévia."],
                correta: 1,
                comentario: "A reforma da Lei de Improbidade (Lei 14.230/21) extinguiu a modalidade culposa da improbidade administrativa, exigindo dolo específico para a configuração dos atos ímprobos."
            },
            {
                id: 86,
                enunciado: "O conjunto de órgãos e agentes integrados estruturalmente para o desempenho de funções administrativas do Estado denomina-se:",
                opcoes: ["A) Administração Direta.", "B) Administração Pública (sentido orgânico, subjetivo ou formal).", "C) Administração Indireta (sentido material).", "D) Terceiro Setor.", "E) Órgão autônomo independente."],
                correta: 1,
                comentario: "Sentido subjetivo, orgânico ou formal da Administração Pública: conjunto de órgãos, entidades e agentes públicos que exercem a função administrativa."
            },
            {
                id: 87,
                enunciado: "A autarquia é uma pessoa jurídica de direito público, criada por lei, com capacidade de autoadministração, integrante da Administração Indireta. Um exemplo clássico de autarquia é:",
                opcoes: ["A) Banco do Brasil S/A.", "B) Petrobras S/A.", "C) INSS (Instituto Nacional do Seguro Social) ou BACEN.", "D) Fundação Padre Anchieta.", "E) Empresa Brasileira de Correios e Telégrafos."],
                correta: 2,
                comentario: "O INSS e o Banco Central (BACEN) são autarquias federais. Banco do Brasil e Petrobras são sociedades de economia mista."
            },
            {
                id: 88,
                enunciado: "O regime jurídico administrativo brasileiro fundamenta-se em dois pilares principais (princípios básicos):",
                opcoes: ["A) Soberania popular e sufrágio universal.", "B) Supremacia do interesse público sobre o privado e indisponibilidade do interesse público.", "C) Autonomia municipal e separação de poderes.", "D) Legalidade estrita e irretroatividade da lei.", "E) Economicidade e produtividade."],
                correta: 1,
                comentario: "Os dois grandes princípios basilares (pedras de toque) do Direito Administrativo são a Supremacia do interesse público sobre o privado e a Indisponibilidade do interesse público."
            },
            {
                id: 89,
                enunciado: "A investidura em cargo ou emprego público depende de aprovação prévia em concurso público de provas ou de provas e títulos, ressalvadas as nomeações para cargo em comissão declarado em lei de:",
                opcoes: ["A) Livre nomeação e exoneração.", "B) Provimento efetivo técnico.", "C) Estabilidade imediata.", "D) Carreira policial civil exclusiva.", "E) Magistratura superior."],
                correta: 0,
                comentario: "Art. 37, II, da CF: Os cargos em comissão destinam-se apenas às atribuições de direção, chefia e assessoramento, sendo de livre nomeação e exoneração."
            },
            {
                id: 90,
                enunciado: "O servidor público civil da União, dos Estados, do Distrito Federal e dos Municípios, incluindo os policiais civis, tem garantido o direito à livre associação sindical? E quanto à acumulação de cargos?",
                opcoes: ["A) O direito de associação sindical é vedado a servidores policiais. A acumulação de cargos é proibida em qualquer hipótese.", "B) É garantido o direito de livre associação sindical. A acumulação remunerada de cargos públicos é proibida, exceto nos casos expressamente previstos na Constituição (como dois cargos de professor, ou um de professor com outro técnico/científico, ou dois de profissionais de saúde, com compatibilidade de horários).", "C) É livre a associação e é permitido acumular até três cargos na administração estadual.", "D) Servidores policiais civis não podem se associar a sindicatos e não podem acumular nenhuma função privada.", "E) A associação sindical depende de autorização do governador."],
                correta: 1,
                comentario: "Regras constitucionais de associação sindical (art. 37, VI) e acumulação de cargos públicos (art. 37, XVI)."
            }
        ],
        "Noções de Informática": [
            {
                id: 91,
                enunciado: "No ambiente Windows (como o Windows 10/11), o atalho de teclado composto pelas teclas **Ctrl + Shift + Esc** tem a função direta de abrir o:",
                opcoes: ["A) Explorador de Arquivos.", "B) Gerenciador de Tarefas.", "C) Painel de Controle.", "D) Bloco de Notas em modo administrador.", "E) Prompt de Comando."],
                correta: 1,
                comentario: "Ctrl + Shift + Esc abre diretamente o Gerenciador de Tarefas do Windows."
            },
            {
                id: 92,
                enunciado: "Assinale a alternativa que apresenta um protocolo de correio eletrônico utilizado especificamente para **receber** e baixar mensagens de e-mail de um servidor, apagando-as ou mantendo-as conforme configuração, operando na porta padrão 110 (não criptografada):",
                opcoes: ["A) SMTP", "B) POP3", "C) HTTP", "D) FTP", "E) DNS"],
                correta: 1,
                comentario: "POP3 (Post Office Protocol versão 3) é o protocolo de recebimento de e-mails na porta 110 (ou 995 para SSL/TLS). SMTP é para envio (porta 25/587)."
            },
            {
                id: 93,
                enunciado: "Malware é um termo genérico para software malicioso. Dentre os tipos abaixo, aquele que se disfarça de um programa legítimo e útil para enganar o usuário e instalar códigos maliciosos ocultos é denominado:",
                opcoes: ["A) Vírus de setor de boot.", "B) Ransomware.", "C) Cavalo de Troia (Trojan).", "D) Worm.", "E) Adware."],
                correta: 2,
                comentario: "O Cavalo de Troia (Trojan) aparenta ser um programa útil ou inofensivo, mas esconde funções maliciosas em seu interior."
            },
            {
                id: 94,
                enunciado: "Em planilhas eletrônicas (como o Microsoft Excel ou LibreOffice Calc), a função utilizada para somar um intervalo de células que atenda a um determinado critério ou condição é:",
                opcoes: ["A) SOMA", "B) SOMASE (SUMIF)", "C) CONT.SE", "D) PROCV", "E) MÉDIASE"],
                correta: 1,
                comentario: "SOMASE (ou SUMIF) soma os valores de um intervalo que atendem a um critério especificado."
            },
            {
                id: 95,
                enunciado: "O recurso de segurança da informação que garante que uma informação enviada pela rede chegue ao destinatário sem ter sido alterada ou adulterada no percurso (integridade) é garantido frequentemente com o uso de:",
                opcoes: ["A) Funções de hash criptográfico (como SHA-256) e assinaturas digitais.", "B) Apenas senhas de 4 dígitos.", "C) Compactação de arquivos ZIP sem criptografia.", "D) Endereços IP estáticos.", "E) Servidores DNS alternativos."],
                correta: 0,
                comentario: "Funções de hash e assinaturas digitais asseguram a integridade dos dados (garantindo que não houve modificação não autorizada)."
            },
            {
                id: 96,
                enunciado: "Sobre computação em nuvem (Cloud Computing), o modelo de serviço em que a infraestrutura completa (servidores, redes, armazenamento) é alugada e disponibilizada para que o usuário instale sistemas operacionais e aplicações próprias denomina-se:",
                opcoes: ["A) SaaS (Software as a Service).", "B) PaaS (Platform as a Service).", "C) IaaS (Infrastructure as a Service).", "D) DaaS (Desktop as a Service estrito).", "E) NaaS (Network as a Service isolado)."],
                correta: 2,
                comentario: "IaaS (Infraestrutura como Serviço) fornece recursos computacionais básicos de infraestrutura (máquinas virtuais, armazenamento, redes)."
            },
            {
                id: 97,
                enunciado: "O navegador web Google Chrome possui um modo de navegação privativa que não salva o histórico de navegação, cookies e dados de formulários no computador local. O atalho de teclado padrão para abrir essa janela anônima no Windows é:",
                opcoes: ["A) Ctrl + Shift + N", "B) Ctrl + Alt + T", "C) Ctrl + Shift + P", "D) F12", "E) Windows + R"],
                correta: 0,
                comentario: "Ctrl + Shift + N abre a janela de navegação anônima no Google Chrome (e no Microsoft Edge). No Mozilla Firefox é Ctrl + Shift + P."
            },
            {
                id: 98,
                enunciado: "Um programa malicioso que sequestra os arquivos de um computador, criptografando-os e exigindo o pagamento de resgate (geralmente em criptomoedas) para liberar a chave de descriptografia, é chamado de:",
                opcoes: ["A) Spyware.", "B) Keylogger.", "C) Ransomware.", "D) Rootkit.", "E) Botnet."],
                correta: 2,
                comentario: "Ransomware é o malware de resgate que criptografa os dados da vítima."
            },
            {
                id: 99,
                enunciado: "Na internet, o protocolo seguro utilizado para transferência hipertexto criptografada entre o navegador e o servidor web é o:",
                opcoes: ["A) HTTP", "B) HTTPS", "C) FTP", "D) SSH", "E) Telnet"],
                correta: 1,
                comentario: "HTTPS (HyperText Transfer Protocol Secure) utiliza criptografia SSL/TLS para conexões seguras na web (porta padrão 443)."
            },
            {
                id: 100,
                enunciado: "Assinale a alternativa que apresenta um comando ou ferramenta do Windows utilizado no Prompt de Comando (CMD) para verificar o endereço IP, máscara de sub-rede e gateway padrão da máquina:",
                opcoes: ["A) ping", "B) ipconfig", "C) tracert", "D) netstat", "E) tasklist"],
                correta: 1,
                comentario: "O comando 'ipconfig' exibe as configurações de rede IP atuais no sistema operacional Windows (equivalente a 'ifconfig' em sistemas Unix/Linux)."
            }
        ]
    }
});