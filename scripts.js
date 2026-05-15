/* 
Lógica de Programacao
    - Falar a lingua do computador
Algoritmo
    - Receita de bolo. Os passos na sequencia certa

JavaScript
    - Variáveis - pedacinho na memória do computador
        que voce pode guardar o que voce quiser

    - Funcoes
        pedacinho de código que, só executa quando
        eu chamo
        
    - Como se comunicar com o HTML
        Manipular a DOM

    console.log() mostra o que eu quiser na tela

    [x] Saber quando o botão foi clicado
    [x] Pegar o texto que o usário digitou
    [x] Mando para o servidor traduzir
    [x] Receber a resposta do servidor (traducao)  
    [x] Colocar o texto na tela   

    Fase
    [ ] Escolher o idioma
    [ ] Traduzir pelo microfone (captar voz) / IA
    [ ] Fernanda GANHAR DINHEIRO
    [ ] Colocar o site no ar
    [ ] Última palavra chave
      
    
    // JavaScript - scripts
    // HTML - document
    querySelector - procurar alguem no HTML
    value = valor - o texto que tem nele

   padrao =  https://api.mymemory.translated.net/get?q=
   traduzir =  Hello World!
   idioma = &langpair=pt-BR|en

   fetch / ferramenta do javascript para entrar em contato com um servidor
   await (Espere) - async (async & await)
   json (formato mais amigavel)
   */

let inputTexto = document.querySelector(".input-texto")
let traducao = document.querySelector(".traducao")
let idioma = document.querySelector(".idioma")

async function traduzir() {

    let endereco = "https://api.mymemory.translated.net/get?q="
        + inputTexto.value
        + "&langpair=pt-BR|"
        + idioma.value

    let resposta = await fetch(endereco)
    let dados = await resposta.json()

    traducao.textContent = dados.responseData.translatedText
}

function ouvirVoz() {

    // Ferramenta de transcrição de áudio
    let voz = window.webkitSpeechRecognition
    let reconhecimentoVoz = new voz()

    // Configuração
    reconhecimentoVoz.lang = "pt-BR"

    // Quando terminar de ouvir
    reconhecimentoVoz.onresult = (evento) => {
        let textoTranscricao = evento.results[0][0].transcript

        // joga o texto falado no input
        inputTexto.value = textoTranscricao
    }

    // Inicia a escuta
    reconhecimentoVoz.start()
}
