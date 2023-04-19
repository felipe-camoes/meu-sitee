// matriz para representar as posições do jogo da velha
let posicoes = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]
let teclas = document.querySelectorAll(".botao")
let simbolo = "x"

// função para adicionar um símbolo na posição escolhida
function adicionar(posicao) {
    let ganhou = false
    let geral = []
    let auxx = posicao[1]
    let auxy = posicao[2]

    if (posicoes[auxx][auxy] == 0) {
        // adicionando o símbolo na posição escolhida
        posicoes[auxx][auxy] = simbolo
        document.querySelector(`.${posicao}`).innerHTML = simbolo
        // alternando o símbolo para o próximo jogador
        if (simbolo === "x") {
            simbolo = "o";
        } else {
            simbolo = "x";
        }
    }

    // acrescimo da linha

    for (let i = 0; i < posicoes.length; i++) {
        geral.push(posicoes[i])
    }

    // acrescimo da coluna

    let aux = []

    for (let i = 0; i < posicoes.length; i++) {
        aux = []
        for (let j = 0; j < posicoes.length; j++) {
            aux.push(posicoes[j][i])
        }
        geral.push(aux)
    }

    // acrescimo da diagonal

    aux = []
    for (let i = 0; i < posicoes.length; i++) {
        aux.push(posicoes[i][i])
    }
    geral.push(aux)

    // acrescimo da diagonal inversa

    let j = posicoes.length - 1
    aux = []
    for (let i = 0; i < posicoes.length; i++) {
        aux.push(posicoes[i][j])
        j = j - 1
    }
    geral.push(aux)

     // verificando se a linha, coluna ou diagonal atual possui um vencedor
    for (let i = 0; i < geral.length; i++) {
        ganhou = geral[i].every(e => e === "x") || geral[i].every(e => e === "o")
        if (ganhou == true) {
            if (simbolo === "x") {
                simbolo = "o";
            } else {
                simbolo = "x";
            }

            let body = document.querySelector(".body")
            let elemento = document.createElement("div")
            elemento.className = "vitoria"
            elemento.innerHTML = `${simbolo.toUpperCase()} Ganhou !!!`
            let reiniciar = document.createElement("button")
            reiniciar.className = "botao-reiniciar"
            reiniciar.innerHTML = "Reiniciar Jogo"

            reiniciar.onclick = function () {
                posicoes = [
                    [0, 0, 0],
                    [0, 0, 0],
                    [0, 0, 0]
                ]

                let botoes = document.querySelectorAll('.botao')
                for (let j = 0; j < botoes.length; j++) {
                    botoes[j].innerHTML = ""
                    botoes[j].disabled = false
                }

                body.removeChild(elemento)
                body.removeChild(reiniciar)
            }

            body.appendChild(elemento)
            body.appendChild(reiniciar)
            

            let botoes = document.querySelectorAll('.botao')
            for (let j = 0; j < botoes.length; j++) {
                botoes[j].disabled = true
            }
        }
    }
}

for (let i = 0; i < teclas.length; i++) {
    let tecla = teclas[i]
    let classe = tecla.classList[1]

    tecla.onclick = function () {
        adicionar(classe)
    }
}