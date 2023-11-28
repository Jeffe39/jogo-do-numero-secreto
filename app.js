//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do Numero Secreto';
//let paragrafoD = document.querySelector('p');
//paragrafoD.innerHTML= 'Advinhe o numero secreto entre 1 e 10';
let nuemorsSorteados = [];
let nmrM = 10;
let nmrSecreto = gerarNmrSecreto();
let tentativas = 1;
function exibirNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;

    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

exibirNaTela('h1', 'Jogo do Numero Secreto');
exibirNaTela('p', 'Advinhe o numero secreto entre 1 e 10');


function verificarChute() {

    let chute = document.querySelector('input').value;


    if (chute == nmrSecreto) {
        exibirNaTela('h1', 'Acertou!');


        let palavraT = tentativas > 1 ? 'tentativas' : 'tentativa';

        let menasagemT = `Você acertou o numero secreto com ${tentativas} ${palavraT}`;

        exibirNaTela('p', menasagemT);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > nmrSecreto) { exibirNaTela('p', 'O numero secreto é menor'); }
        else { exibirNaTela('p', 'O numero secreto é maior'); }
    }
    tentativas++;
    limparC();


}

function limparC() {
    chute = document.querySelector('input');
    chute.value = ' ';
}


function gerarNmrSecreto() {
    let numeroEscolhido = parseInt(Math.random() * nmrM + 1);
    let qntElementos = nuemorsSorteados.length;

    if(qntElementos == nmrM){
        nuemorsSorteados = [];
    }
    
    if (nuemorsSorteados.includes(numeroEscolhido)) { return gerarNmrSecreto(); } 
    else { 
        nuemorsSorteados.push(numeroEscolhido);
        return numeroEscolhido; }
}


function novoJogo() {
    nmrSecreto = gerarNmrSecreto();
    limparC();
    tentativas = 1;
    exibirNaTela('h1', 'Jogo do Numero Secreto');
    exibirNaTela('p', 'Advinhe o numero secreto entre 1 e 10');

    document.getElementById('reiniciar').setAttribute('disabled', true)
}