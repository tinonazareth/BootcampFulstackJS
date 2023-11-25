const entrada1 = prompt("Informe o primeiro número: ");
const entrada2 = prompt("Informe o segundo número: ");

const x = parseFloat(entrada1); /* função para garantir que a entrada seja um número*/ 
const y = parseFloat(entrada2);

const soma = x + y;
const subtracao = x - y;
const divisao = x / y;
const multiplicacao = x * y;

alert(
    "Resultado: \n" + 
    "\nSoma: " + soma +
    "\nSubtração: " + subtracao +
    "\nDivisão: " + divisao +
    "\nmultiplicação: " + multiplicacao
);