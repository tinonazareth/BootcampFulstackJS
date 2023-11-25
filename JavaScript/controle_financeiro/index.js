//  Vamos começar pedindo o saldo inicial e também criando a variável da opção do usuário:
let saldo = parseFloat(prompt("Informe o valor em dinheiro inicial: "))
let opcao = ""

// Agora podemos adicionar o do while e dentro dele um prompt contendo o saldo atual e as opções disponíveis:
do {
    opcao = prompt(
        "Saldo disponível: R$ " + saldo +
        "\n1 - Depositar dinheiro" +
        "\n2 - Sacar dinheiro" +
        "\n3 - Transferir dinheiro" +
        "\n4 - Sair"
    )
    // Para terminar, só precisamos adicionar um switch encarregado do comportamento de cada opção:
    switch (opcao) {
        case "1":
            saldo += parseFloat(prompt("Informe o valor a ser depositado:"))
            break
        case "2":
            saldo -= prompt("Informe o valor a ser sacado:")
            break
        case "3":
            saldo -= prompt("Informe o valor da transferência:")
            break
        case "4":
            alert("Saindo...")
            break
        default:
            alert("Entrada inválida.")
            break
    }

} while (opcao !== "4");