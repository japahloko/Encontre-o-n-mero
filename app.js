let listaDeNumeros = [];
//gerar numero
let limite = 60;
let numeroSecreto = gerarNumeroAleatorio ();
let tentativas = 1;

//textos da tela
    mensagemInicial()
function textodaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsivevoice.speak(texto, 'Brazilian Portuguese Female', 
    {rate:1.2});
}

function mensagemInicial() {
    textodaTela('h1','Jogo do número secreto!');  
    textodaTela('p','Escolha um número entre 1 a 60');
}

function verificarChute() {
    let chute = document.querySelector('input').value;
        if(chute == numeroSecreto) {
            textodaTela('h1', 'Você Acertou!');
            let palavratentativa = tentativas > 1 ? `tentativas` : `tentativa`;
            let mensagemtentativas = `Parabéns!,você descobriu com ${tentativas} ${palavratentativa} você é um gênio!`;
           textodaTela('p', mensagemtentativas);
           document.getElementById('reiniciar').removeAttribute('disabled');   
        } else {
            if(chute > numeroSecreto) {
                textodaTela('p', `O número é menor que ${chute}`);
            }   else {
                textodaTela('p',`O número é maior que ${chute}`);
                }
                tentativas++;
                limparoCampo();
            }
        }
    function gerarNumeroAleatorio () {
        let numeroEscolhido = parseInt(Math.random() *limite+1);
        let quantidadenumeros = listaDeNumeros.length;

        if (quantidadenumeros == limite) {
            listaDeNumeros = [];
        }
        if(listaDeNumeros.includes(numeroEscolhido)) {
            return gerarNumeroAleatorio();
        } else 
        listaDeNumeros.push(numeroEscolhido);
        console.log(listaDeNumeros);
        return numeroEscolhido;
}
    function limparoCampo () {
        chute = document.querySelector(`input`);
        chute .value = ``;
    }

    function reiniciarJogo() {
        numeroSecreto = gerarNumeroAleatorio ();
        verificarChute();
        limparoCampo ();
        tentativas = 1;
        mensagemInicial();   
        document.getElementById('reiniciar').setAttribute('disabled',true);
    }