let preco = parseFloat(prompt("Insira o valor do produto: "));
let desconto = 10;
let valorFinal = preco - (preco * (desconto / 100));
alert("O valor final após aplicar um desconto de " + desconto + "% a um preço de " + preco + " será de " + valorFinal + ".");