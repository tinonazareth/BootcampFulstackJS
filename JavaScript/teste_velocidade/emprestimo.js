//Coletando informações do possivel cliente
const emprestimo = Number(prompt("Informe o valor desejado: R$ "))
const parcelas = Number(prompt("informe a quantidade de parcelas para seu emprestimo: "))
const rendaFamiliar = Number(prompt("Informe sua renda familiar: "))
const idade = Number(prompt("Qual a sua idade? ")) 

idade > 18 && emprestimo < ((rendaFamiliar * 30) / 100) ? (
    alert("Seu emprestimo foi APROVADO ")
) : (
    alert("Desculpe seu emprestimo foi NEGADO ")
)

