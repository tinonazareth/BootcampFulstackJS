//vamos começar obtendo os nomes e velocidades dos dois veículos:
const veiculo1 = prompt("Insira o nome do primeiro veiculo: ")
const velocidade1 = parseFloat(prompt("Insira a velocidade do primeiro veiculo: "))

const veiculo2 = prompt("Insira o nome do segundo veiculo: ")
const velocidade2 = parseFloat(prompt("Insira a velocidade do segundo veiculo: "))

//vamos escrever um IF para exibir o resultado apropriado na tela:
if (velocidade1 > velocidade2) {
    alert(veiculo1 + " é mais rápido do que " + veiculo2)
  } else if (velocidade2 > velocidade1) {
    alert(veiculo2 + " é mais rápido do que " + veiculo1)
  } else {
    alert(veiculo1 + " e " + veiculo2 + " possuem velocidades iguais.")
  }
