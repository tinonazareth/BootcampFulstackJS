// Vamos primeiro obtendo o nome do turista e então inicializar as variáveis de contagem e nomes das cidades:
const turista = prompt("Olá turista! Qual o seu nome? ")

// Variaveis auxiliares
let cidades = ""
let contador = 0

// Agora vamos perguntar ao turista se ele visitou alguma cidade
let continuar = prompt("Você visitou alguma cidade? (Sim/Não) ")

// E então usamos o while para perguntar o nome da cidade, adicionar essa cidade às visitadas e então perguntar novamente se alguma outra cidade foi visitada. Isso vai continuar enquanto a resposta for “Sim”:
while (continuar === "Sim") {
    let cidade = prompt("Qual o nome da cidade que você visitou? ")
    cidades += " - " + cidade + "\n"
    contador++
    continuar = prompt("Você visitou alguma outra cidade? (Sim/Não)")
    
}

// Por último só precisamos exibir a mensagem final:
alert(
    "O turista: " + turista +
    "\nQuantidade de cidades visitadas: " + contador +
    "\nAs cidades visitadas foram: \n" + cidades
)

