// Vamos começar pedindo que informe o número e criando também uma variável do tipo string para armazenarmos os resultados das multiplicações:
const numero = parseFloat(prompt(
    "Olá, eu vou te ajudar na tabuada! \n" +
    "De qual número você deseja calcular a tabuada "))
let resulado = ""

// Então criamos um laço for que tem um fator que começa em 1, a primeira multiplicação, e vai até 20, a última. Dentro dele iremos concatenar o resultado na nossa string de resultado:
for (let fator = 2; fator <=10; fator++) {
    resulado += " -> " + numero + " x " + fator + " = " + ( numero * fator ) + "\n"
}

// Por último, exibimos o resultado da tabuada com um alert:
alert ("O resulatdo da tabuada de " + numero + ":\n\n" + resulado)
