// No script, podemos já adicionar o array da fila, a variável de opção e o laço do while para manter o menu em execução:

let fila = []
let opcao = ""

do { // Dentro do (do while) vamos começar montando a lista de pacientes em uma variável de texto:
    let pacientes = ""
    for (let i = 0; i < fila.length; i++) {
        pacientes += (i + 1) + " º - " + fila[i] + "\n"
    }

    opcao = prompt( // Depois podemos adicionar o prompt que irá mostrar a fila de espera e as opções do menu:
        "Paciente:\n " + pacientes +
        "\nEscolha uma opção:\n1 - Novo paciente\n2 - Consultar pacientes\n3 - Sair"
    )

    switch (opcao) { //Para encerrar, adicionaremos o switch contendo cada uma das opções:
        case "1":
            const novoPaciente = prompt("Qual é o nome do paciente?")
            fila.push(novoPaciente)
            break
        case "2":
            const pacienteConsultado = fila.shift()
            if (!pacienteConsultado) {
                alert("Não há pacientes na fila!")
            } else {
                alert(pacienteConsultado + " foi removido da fila.")
            }
            break
        case "3":
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida!")
            break
    }
} while (opcao !== "3");