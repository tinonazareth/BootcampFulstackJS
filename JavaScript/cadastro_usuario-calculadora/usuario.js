const primeiroNome = prompt("Informe o primeiro nome do usúario: ");
const sobrenome = prompt("Informe o sobrenome do usúario: ");
const campoDeEstudo = prompt("Qual é o campo de estudo do usúario? ");
const anoDeNascimento = prompt("Qual é o ano de nascimento do usúario? ");

alert(
    "Recruta cadastrado com sucesso!\n" +
    "\nNome Completo: " + primeiroNome + " " + sobrenome +
    "\nCampo de Estudo: " + campoDeEstudo + 
    "\nIdade: " + ( 2023 - anoDeNascimento )
)