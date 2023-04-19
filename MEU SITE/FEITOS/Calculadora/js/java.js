let numeros = []
let total = ""
let auxtotal = ""
let resultado = ""
let ultimovalor = ""

function limpar() {
  document.querySelector(".text").value = ""
  resultado = ""
  ultimovalor = ""
  numeros = []
  auxtotal = ""
  total = "" 
}

function insere(ent) {
  total += ent
  document.querySelector(".text").value = total
  ultimovalor = ent
}

function sinal(sinal) {
  document.querySelector(".text").value = ""
  if (total != "") {
    numeros.push(total)
    numeros.push(sinal)
    total = ""
  }
  for (let i = 0; i < numeros.length; i++) {
    if (["+", "-", "*", "/"].includes(numeros[i])) {
      numeros.pop()
      numeros.push(sinal)
    }
  }
}

function igual() {
    if (ultimovalor != "") {
      numeros.push(ultimovalor)
    }
    if (["*", "/", "+", "-"].includes(numeros[numeros.length - 1])) {
      numeros.pop()
    }
    for (let variavel of numeros) {
      auxtotal += variavel
    }
    resultado = eval(auxtotal)
  
    if (resultado === undefined) {
      document.querySelector(".text").value = "0"
    } else {
      document.querySelector(".text").value = resultado
    }
  
    resultado = ""
    ultimovalor = ""
    numeros = []
    auxtotal = ""
    total = "" 
  }