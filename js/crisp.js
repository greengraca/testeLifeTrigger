$crisp.push(["do", "chat:hide"])

const botaoEnviarMensagem = document.querySelector(".enviarMensagem")
const botoesCardsFormacoes = document.querySelectorAll(".cardFormacoes a")

botaoEnviarMensagem.onclick = function() {
    $crisp.push(["do", "chat:show"])
    $crisp.push(["do", "chat:open"])
    $crisp.push(["set", "message:text", [`Olá ! Estou interessado em coaching.`]])
}

let mensagemBotoes;
for(let i = 0; i < botoesCardsFormacoes.length; i++) {
    botoesCardsFormacoes[i].addEventListener("click", () => {
        
        switch (i) {
            case 0:
                mensagemBotoes = "a formação de Inteligência Emocional"
                break
            case 1:
                mensagemBotoes = "a formação de Optimização do Tempo"
                break
            case 2:
                mensagemBotoes = "a formação de Comunicação de Excelência"
                break
            case 3:
                mensagemBotoes = "a formação de Networker de Excelência"
                break
            case 4:
                mensagemBotoes = "a formação de Gestão de Conflitos"
                break
            case 5:
                mensagemBotoes = "a formação de Líder Impactante"
                break
            case 6:
                mensagemBotoes = "a formação de Comercial de Excelência"
                break
            default:
                mensagemBotoes = "as formações disponíveis"
        }

        $crisp.push(["do", "chat:show"])
        $crisp.push(["do", "chat:open"])
        $crisp.push(["set", "message:text", [`Olá ! Estou interessado em saber mais sobre ${mensagemBotoes}.`]])
    })
}
