
let totalTestes = 0;
let testesPassaram = 0;
let testesFalharam = 0;

function executarTeste(nome, resultadoEsperado, resultadoObtido) {
    totalTestes++;

    if (resultadoEsperado === resultadoObtido) {
        testesPassaram++;
        console.log(`✅ PASSOU: ${nome}`);
    } else {
        testesFalharam++;
        console.log(`❌ FALHOU: ${nome}`);
        console.log(`Esperado: ${resultadoEsperado}`);
        console.log(`Obtido: ${resultadoObtido}`);
    }
}

function exibirResumo() {
    console.log("\n========== RESUMO DOS TESTES ==========");
    console.log(`Total: ${totalTestes}`);
    console.log(`Aprovados: ${testesPassaram}`);
    console.log(`Reprovados: ${testesFalharam}`);
}

let domino = null;

try {
    domino = require("./domino.js");
} catch (erro) {
    console.log("Implementação do Dominó ainda não encontrada.");
}

function obterResultado(funcao, ...argumentos) {
    if (!domino || typeof domino[funcao] !== "function") {
        return `FUNCAO_NAO_IMPLEMENTADA: ${funcao}`;
    }

    return domino[funcao](...argumentos);
}

// VALIDAÇÃO DAS PEÇAS

executarTeste(
    "D01 - Aceitar peça com valores zero e zero",
    true,
    obterResultado("validarPeca", 0, 0)
);

executarTeste(
    "D02 - Aceitar peça com valores seis e seis",
    true,
    obterResultado("validarPeca", 6, 6)
);

executarTeste(
    "D03 - Aceitar peça com valores zero e seis",
    true,
    obterResultado("validarPeca", 0, 6)
);

executarTeste(
    "D04 - Aceitar peça com valores em ordem inversa",
    true,
    obterResultado("validarPeca", 6, 2)
);

executarTeste(
    "D05 - Rejeitar valor negativo",
    false,
    obterResultado("validarPeca", -1, 3)
);

executarTeste(
    "D06 - Rejeitar valor maior que seis",
    false,
    obterResultado("validarPeca", 7, 2)
);

executarTeste(
    "D07 - Rejeitar valores decimais",
    false,
    obterResultado("validarPeca", 2.5, 3)
);

executarTeste(
    "D08 - Rejeitar valores não numéricos",
    false,
    obterResultado("validarPeca", "A", 3)
);


// VALIDAÇÃO DO CONJUNTO

executarTeste(
    "D09 - Aceitar conjunto completo com 28 peças",
    true,
    obterResultado("validarConjunto", 28)
);

executarTeste(
    "D10 - Rejeitar conjunto com 27 peças",
    false,
    obterResultado("validarConjunto", 27)
);

executarTeste(
    "D11 - Rejeitar conjunto com 29 peças",
    false,
    obterResultado("validarConjunto", 29)
);

executarTeste(
    "D12 - Rejeitar conjunto vazio",
    false,
    obterResultado("validarConjunto", 0)
);

executarTeste(
    "D13 - Rejeitar quantidade negativa de peças",
    false,
    obterResultado("validarConjunto", -1)
);

executarTeste(
    "D14 - Rejeitar quantidade decimal de peças",
    false,
    obterResultado("validarConjunto", 28.5)
);

// COMBINAÇÕES DAS PEÇAS

executarTeste(
    "D15 - Aceitar conjunto com todas as combinações únicas",
    true,
    obterResultado("validarCombinacoes", [
        [0,0], [0,1], [0,2], [0,3], [0,4], [0,5], [0,6],
        [1,1], [1,2], [1,3], [1,4], [1,5], [1,6],
        [2,2], [2,3], [2,4], [2,5], [2,6],
        [3,3], [3,4], [3,5], [3,6],
        [4,4], [4,5], [4,6],
        [5,5], [5,6],
        [6,6]
    ])
);

executarTeste(
    "D16 - Rejeitar conjunto com peça duplicada",
    false,
    obterResultado("validarCombinacoes", [
        [0,0], [0,1], [0,1]
    ])
);

executarTeste(
    "D17 - Rejeitar conjunto com peça faltando",
    false,
    obterResultado("validarCombinacoes", [
        [0,0], [0,1], [0,2]
    ])
);

executarTeste(
    "D18 - Rejeitar conjunto com valores inválidos",
    false,
    obterResultado("validarCombinacoes", [
        [0,0], [0,7]
    ])
);

executarTeste(
    "D19 - Rejeitar conjunto vazio",
    false,
    obterResultado("validarCombinacoes", [])
);

// DISTRIBUIÇÃO PARA 2 JOGADORES

executarTeste(
    "D20 - Aceitar partida com 2 jogadores",
    true,
    obterResultado("validarDistribuicao", 2, 7, 28)
);

executarTeste(
    "D21 - Rejeitar partida com apenas 1 jogador",
    false,
    obterResultado("validarDistribuicao", 1, 7, 28)
);

executarTeste(
    "D22 - Rejeitar partida com 3 jogadores",
    false,
    obterResultado("validarDistribuicao", 3, 7, 28)
);

executarTeste(
    "D23 - Rejeitar distribuição com quantidade insuficiente de peças",
    false,
    obterResultado("validarDistribuicao", 2, 6, 28)
);

executarTeste(
    "D24 - Rejeitar distribuição com quantidade excedente de peças",
    false,
    obterResultado("validarDistribuicao", 2, 8, 28)
);

executarTeste(
    "D25 - Rejeitar quantidade negativa de peças",
    false,
    obterResultado("validarDistribuicao", 2, -1, 28)
);

executarTeste(
    "D26 - Rejeitar distribuição que não utiliza todas as peças",
    false,
    obterResultado("validarDistribuicao", 2, 7, 27)
);

// INÍCIO DA PARTIDA

executarTeste(
    "D27 - Identificar o jogador com a maior peça inicial",
    0,
    obterResultado("definirJogadorInicial", [ [6,6], [5,5] ])
);

executarTeste(
    "D28 - Identificar o segundo jogador quando possui a maior peça",
    1,
    obterResultado("definirJogadorInicial", [ [4,4], [6,6] ])
);

executarTeste(
    "D29 - Rejeitar início sem jogadores",
    -1,
    obterResultado("definirJogadorInicial", [])
);

executarTeste(
    "D30 - Rejeitar início com apenas um jogador",
    -1,
    obterResultado("definirJogadorInicial", [ [6,6] ])
);

executarTeste(
    "D31 - Aceitar jogada quando a peça combina com a extremidade esquerda",
    true,
    obterResultado("validarJogada", [2,4], 2, 5)
);

executarTeste(
    "D32 - Aceitar jogada quando a peça combina com a extremidade direita",
    true,
    obterResultado("validarJogada", [3,5], 5, 2)
);

executarTeste(
    "D33 - Rejeitar jogada sem combinação com nenhuma extremidade",
    false,
    obterResultado("validarJogada", [1,2], 4, 5)
);

executarTeste(
    "D34 - Rejeitar jogada com peça inválida",
    false,
    obterResultado("validarJogada", [8,2], 2, 5)
);

// COMPRA E PASSAGEM DE VEZ

executarTeste(
    "D35 - Permitir compra quando jogador não possui jogada válida",
    true,
    obterResultado("podeComprarPeca", [[1,2], [3,4]], 5, 6)
);

executarTeste(
    "D36 - Impedir compra quando jogador possui jogada válida",
    false,
    obterResultado("podeComprarPeca", [[1,5], [3,4]], 5, 6)
);

executarTeste(
    "D37 - Impedir compra quando o monte está vazio",
    false,
    obterResultado("podeComprarPeca", [], 5, 6)
);

executarTeste(
    "D38 - Permitir passar a vez quando não existem peças para comprar",
    true,
    obterResultado("podePassarVez", [], [[1,2], [3,4]], 5, 6)
);

executarTeste(
    "D39 - Impedir passar a vez quando existe compra disponível",
    false,
    obterResultado("podePassarVez", [[0,3]], [[1,2], [3,4]], 5, 6)
);

executarTeste(
    "D40 - Impedir passar a vez quando jogador possui jogada válida",
    false,
    obterResultado("podePassarVez", [], [[1,5], [3,4]], 5, 6)
);

// COLOCAÇÃO DE PEÇAS

executarTeste(
    "D41 - Atualizar extremidade esquerda após jogada válida",
    3,
    obterResultado("atualizarExtremidades", [2, 3], 2, 5, "esquerda")
);

executarTeste(
    "D42 - Atualizar extremidade direita após jogada válida",
    4,
    obterResultado("atualizarExtremidades", [3, 4], 2, 3, "direita")
);

executarTeste(
    "D43 - Rejeitar colocação de peça sem combinação",
    false,
    obterResultado("validarJogada", [1, 4], 2, 5)
);

executarTeste(
    "D44 - Aceitar peça dupla na extremidade esquerda",
    true,
    obterResultado("validarJogada", [5, 5], 5, 2)
);

executarTeste(
    "D45 - Aceitar peça dupla na extremidade direita",
    true,
    obterResultado("validarJogada", [3, 3], 2, 3)
);

executarTeste(
    "D46 - Rejeitar extremidade inválida na colocação",
    false,
    obterResultado("atualizarExtremidades", [2, 3], 2, 5, "centro")
);

// CONTROLE DE TURNOS E VITÓRIA

executarTeste(
    "D47 - Alternar turno do jogador 0 para o jogador 1",
    1,
    obterResultado("alternarJogador", 0)
);

executarTeste(
    "D48 - Alternar turno do jogador 1 para o jogador 0",
    0,
    obterResultado("alternarJogador", 1)
);

executarTeste(
    "D49 - Rejeitar índice de jogador inválido",
    -1,
    obterResultado("alternarJogador", 2)
);

executarTeste(
    "D50 - Identificar vitória quando jogador não possui peças",
    true,
    obterResultado("verificarVitoria", [])
);

executarTeste(
    "D51 - Não identificar vitória quando jogador ainda possui peças",
    false,
    obterResultado("verificarVitoria", [[2,3]])
);

executarTeste(
    "D52 - Não identificar vitória quando jogador possui uma peça dupla",
    false,
    obterResultado("verificarVitoria", [[6,6]])
);

// EMPATE E PONTUAÇÃO

executarTeste(
    "D53 - Identificar partida bloqueada quando ambos os jogadores podem passar",
    true,
    obterResultado("verificarBloqueio", true, true)
);

executarTeste(
    "D54 - Não identificar bloqueio quando primeiro jogador pode jogar",
    false,
    obterResultado("verificarBloqueio", false, true)
);

executarTeste(
    "D55 - Não identificar bloqueio quando segundo jogador pode jogar",
    false,
    obterResultado("verificarBloqueio", true, false)
);

executarTeste(
    "D56 - Calcular pontuação de peças com valores diferentes",
    7,
    obterResultado("calcularPontos", [[2,3], [1,1]])
);

executarTeste(
    "D57 - Calcular pontuação de peça dupla",
    12,
    obterResultado("calcularPontos", [[6,6]])
);

executarTeste(
    "D58 - Retornar zero quando jogador não possui peças",
    0,
    obterResultado("calcularPontos", [])
);

// VALIDAÇÕES ADICIONAIS

executarTeste(
    "D59 - Rejeitar peça com primeiro valor não numérico",
    false,
    obterResultado("validarPeca", "A", 3)
);

executarTeste(
    "D60 - Rejeitar peça com segundo valor negativo",
    false,
    obterResultado("validarPeca", 3, -1)
);

executarTeste(
    "D61 - Rejeitar compra com mão inválida",
    false,
    obterResultado("podeComprarPeca", null, [[0,0]], 5, 6)
);

executarTeste(
    "D62 - Rejeitar passagem de vez com mão inválida",
    false,
    obterResultado("podePassarVez", [], null, 5, 6)
);

executarTeste(
    "D63 - Rejeitar cálculo de pontuação com mão inválida",
    -1,
    obterResultado("calcularPontos", null)
);

executarTeste(
    "D64 - Rejeitar verificação de vitória com mão inválida",
    false,
    obterResultado("verificarVitoria", null)
);

exibirResumo();