# Testes Automatizados — Dominó

## Sobre o projeto

Este projeto tem como objetivo desenvolver uma suíte de testes automatizados para um jogo de **Dominó tradicional**, utilizando JavaScript e a abordagem **TDD (Test-Driven Development)**.

O foco é testar as regras e funcionalidades do jogo por meio de casos de teste, sem desenvolver a implementação do sistema.

## Regras consideradas

- Jogo com 2 jogadores.
- Conjunto tradicional de 28 peças.
- Peças com valores de 0 a 6.
- Cada jogador recebe 7 peças.
- O jogador com a maior peça dupla inicia a partida.
- As peças devem combinar com uma das extremidades da sequência.
- Quando não possui uma jogada válida, o jogador deve comprar uma peça, se houver peças disponíveis.
- Quando não existem peças para comprar, o jogador pode passar a vez.
- A partida termina quando um jogador fica sem peças ou quando ocorre um bloqueio.

## Tecnologias utilizadas

- JavaScript
- Node.js
- Testes automatizados
- TDD (Test-Driven Development)

## Estrutura do projeto

```text
desafio_teste_domino/
│
├── domino.test.js
└── README.md
```

**Observação:** o arquivo `domino.js` não foi desenvolvido, pois o objetivo da atividade é criar somente os casos de teste.

## Organização dos testes

O projeto possui **64 casos de teste**, organizados em 10 grupos:

| Grupo | Funcionalidade | Testes |
|---|---|---|
| 1 | Validação das peças | D01–D08 |
| 2 | Validação do conjunto | D09–D14 |
| 3 | Validação das combinações | D15–D19 |
| 4 | Distribuição para 2 jogadores | D20–D26 |
| 5 | Início e primeira jogada | D27–D34 |
| 6 | Compra e passagem de vez | D35–D40 |
| 7 | Colocação de peças | D41–D46 |
| 8 | Controle de turnos e vitória | D47–D52 |
| 9 | Empate e pontuação | D53–D58 |
| 10 | Validações adicionais | D59–D64 |

## Como executar os testes

### Pré-requisitos

- Node.js instalado.
- Terminal ou prompt de comando.

### Execução

Entre na pasta do projeto e execute:

```bash
node domino.test.js
```

O resultado será exibido diretamente no terminal, apresentando os testes executados, aprovados e reprovados.

## Resultado dos testes

Como o projeto contém somente os casos de teste e não possui a implementação do jogo, as funções chamadas pelos testes ainda não estão disponíveis.

Última execução:

| Resultado | Quantidade |
|---|---:|
| Total de testes | 64 |
| Aprovados | 0 |
| Reprovados | 64 |

As reprovações são esperadas nesta etapa, pois o objetivo é especificar e testar os comportamentos esperados do jogo, sem implementar suas funcionalidades.

## Colaborador

- Guilherme Paschoal Luvizutto - RA 24244079-2

---

**Projeto acadêmico — Testes de Software**
