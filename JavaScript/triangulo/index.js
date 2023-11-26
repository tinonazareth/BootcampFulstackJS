let lado1 = parseInt(prompt("Insira o primeiro lado:"));
let lado2 = parseInt(prompt("Insira o segundo lado:"));
let lado3 = parseInt(prompt("Insira o terceiro lado:"));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    if (lado1 == lado2 && lado1 == lado3) {
        alert("O triângulo é equilátero.");
    } else if (lado1 == lado2 || lado1 == lado3 || lado2 == lado3) {
        alert("O triângulo é isósceles.");
    } else {
        alert("O triângulo é escaleno.");
    }
} else {
    alert("Os segmentos não formam um triângulo.");
}