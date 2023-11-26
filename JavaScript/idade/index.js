let idade = parseInt(prompt("Qual é a sua idade? "));

function determinarCategoria(idade) {
    if (idade < 12) {
        return "Você ainda é uma criança";
    } else if (idade <= 17) {
        return "Você é adolescente";
    } else if (idade <= 59) {
        return "Você é um adulto cheio de responsabilidades";
    } else {
        return "Agora você já é idoso";
    }
}

alert(determinarCategoria(idade));