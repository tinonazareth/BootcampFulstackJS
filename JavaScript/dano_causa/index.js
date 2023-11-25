// dados do personagem atacante:
const atacante = prompt("Qual é o nome do personagem atacante? ")
const poderDeAtaque = prompt("Qual é o seu poder de ataque? ")

//dados do personagem defensor:
const defensor = prompt("Qual o nome do defensor? ")
let pontosDeVida = parseFloat(prompt("Quantos pontos de vida ele possui? ")) /* uasando variavel let pois pode mudar o valor */
const poderDeDefesa = parseFloat(prompt("Qual é seu poder de defesa? "))
const possuiEscudo = prompt("Ele possui um escudo? (Sim/Não) ")

//variável para armazenar o dano que será causado:
let danoCausado = 0

// calcular o dano de acordo com as regras e subtrair o dano dos pontos de vida:
if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Não") {
    danoCausado = poderDeAtaque - poderDeDefesa
} else if (poderDeAtaque > poderDeDefesa && possuiEscudo === "Sim") {
    danoCausado = (poderDeAtaque - poderDeDefesa) / 2
}

pontosDeVida -= danoCausado

//exibir o dano causado e os dados atualizados dos personagens:
alert(atacante + " causou " + danoCausado + " pontos de dano em " + defensor)
alert(
    atacante + "\nPoder de ataque: " + poderDeAtaque + "\n\n" +
    defensor + "\nPontos de vida: " + pontosDeVida +
    "\nPoder de defesa: " + poderDeDefesa + "\nPossui escudo: " + possuiEscudo
)

