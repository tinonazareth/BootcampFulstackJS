// ACIONANDO ELEMENTOS
const arr = ["Frodo", "Sam", "Merry", "Pippin", "Gandalf", "Aragon", "Legolas", "Gimli"]
// push: Adiciona um elemento ao final do array e devolve o novo tamanho do array.
let tamanho = arr.push("Boromir")
console.log(arr);
console.log(tamanho);

// unshift: Adiciona um elemento no começo do array e devolve o novo tamanho do array.
tamanho = arr.unshift("Boromir")
console.log(arr);
console.log(tamanho);

// REMOVENDO ELEMENTOS
// pop: Remover um elemento no final do array e devolver o elemento removida.
let elementoRemovido = arr.pop("Boromir")
console.log(arr);
console.log(elementoRemovido);

// shift: Remove um elemento no começo do array e devolve o elemento removido.
elementoRemovido = arr.shift("Boromir")
console.log(arr);
console.log(elementoRemovido);

// PESQUISANDO POR UM ELEMENTO
// Includes: Verifica se um certo elemento está presente no array.
const inclui = arr.includes("Gandalf")
console.log(inclui);

// indexOf: Encontra o índice que possui o elemento indicado, ou -1 caso ele não exista no array.
const indice = arr.indexOf("Gandalf")
console.log(indice);

// CORTANDO E CONCATENANDO
// slice: Copia uma parte do array e devolve a parte copiada sem alterar o array otiginal.
const hobbits = arr.slice(0, 4)
// Tambem pode ser usado com números negativos referenciar o final do array.
const outros = arr.slice(-4) // do final para o inicio.
console.log(arr);
console.log(hobbits);
console.log(outros);

// concat: Junta dois ou mais arrays e/ou itens e devolve o resultado (sem alterar nenhum dos arrays).
const sociedade = hobbits.concat(outros, "Boromir")
console.log(sociedade);
console.log(hobbits);
console.log(outros);

// SUBSTITUINDO ELEMENTOS
// splice: Permite remover elementos em qualquer posição do array e substituir por novos.
const elementoRemovidos = sociedade.splice(indice, 1, "Gandalf o cinzento")
console.log(elementoRemovidos);
console.log(sociedade);

// ITERANDO SOBRE OS ELEMENTOS
//Usando o For para percorrer cada elemento do array
for (let indice = 0; indice < sociedade.length; indice++) {
    const elemento = sociedade[indice]
    console.log(elemento + " se encontra na posição " + indice);
}


