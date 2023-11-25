// Precisamos criar uma variável para armazenar a opção do usuário e adicionar o laço (do while):

let opcao = ""
// Dentro do (do while vamos atualizar o valor da opção com um prompt que também contém o menu:
do {
    opcao = prompt(
        "Seja bem-vindo(a)!\n" +
        "\nEscolha uma das opções abaixo:" +
        "\n1 - Opção Um" +
        "\n2 - Opção Dois" +
        "\n3 - Opção Três" +
        "\n4 - Opção Quatro" +
        "\n5 - Encerar"
    )

    switch (opcao) {
        case "1":
            alert("Você escolheu a Feijoada.")
            break
        case "2":
            alert("Você escolheu a Macarronada.")
            break
        case "3":
            alert("Você escolheu a Lasanha 4 Queijos.")
            break
        case "4":
            alert("Você escolheu o Baião de Dois.")
            break
        case "5":
            alert("Encerrando o programa...")
            break
        default:
            alert("Entrada inválida! Escolha uma das cinco opções.")
    }
} while (opcao !== "5");

