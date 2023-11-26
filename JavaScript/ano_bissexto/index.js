let ano = parseInt(prompt("Insira o ano:"));
let bissexto = (ano % 4 == 0) ? ((ano % 100 == 0) ? ((ano % 400 == 0) ? true : false) : true) : false;
alert(ano + (bissexto ? " é um ano bissexto." : " não é um ano bissexto."));
