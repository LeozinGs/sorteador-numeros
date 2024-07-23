
//Função sortear();
function sortear() {

    //Recupera o valor do campo de "quantidade de números"
    let = quantidadeNumeros = parseInt(document.getElementById('quantidade').value);

    //Recupera o valor do campo "do número..."
    let = numeroMinimo = parseInt(document.getElementById('de').value);

    //Recupera o valor do campo "até o numero..."
    let = numeroMaximo = parseInt(document.getElementById('ate').value);

    //Array(lista) para guardar os números sorteados
    let numerosSorteados = [];

    //Variável para guardar o número aleatório
    let numAleatorio;

    //Loop que gera uma quantidade de números aleatórios com base na quantidade escrita no input
    for(let i = 0; i < quantidadeNumeros; i++) {

        //Gera o primeiro número aleatório
        numAleatorio = gerarNumAleatorio(numeroMinimo, numeroMaximo);

        //Verificando se tem númemros repetidos dentro do array
        while(numerosSorteados.includes(numAleatorio)) {

            //Se a condição for verdadeira: gera outro número aleatório.
            numAleatorio = gerarNumAleatorio(numeroMinimo, numeroMaximo);

        }

        //Se não ele adiciona á lista de números sorteados.
        numerosSorteados.push(numAleatorio);
    }

    //Variável que busca o id do campo onde está a label a ser trocada
    let resultado = document.getElementById('resultado');

    //Troca toda a tag <label></label> pela label com o resultado dos números sorteados
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${numerosSorteados}</label>`;

    //Chama a função que altera o status do botão reiniciar
    alteraStatusBotao();

}

//Função que gera um número aleatório com base nos números fornecidos pelo usuário
function gerarNumAleatorio(min, max) {
    numAleatorio = parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
    return numAleatorio;
}

//Função para Habilitar ou desabilitar o botão reiniciar
function alteraStatusBotao() {

    //Pegando o elemento botão pelo id
    let botao = document.getElementById('btn-reiniciar');

    //Condicional para saber se a classe 'container__botao-desabilitado está na lista de classes do botão
    if(botao.classList.contains('container__botao-desabilitado')){

        //Remove a classe 'container__botao-desabilitado'
        botao.classList.remove('container__botao-desabilitado');

        //Adiciona a clase 'container__botao' para habilitar o botão
        botao.classList.add('container__botao');

    }
    //Se não está na lista de classes...
    else {

        //Remove a classe 'container__botao'
        botao.classList.remove('container__botao');

        //Adiciona a classe 'container__botao-desabilitado'
        botao.classList.add('container__botao-desabilitado');

    }

}

//Função para limpar os inputs
function limparCampo() {

    //Pega os elementos que ficaram vazios e define uma string vazia a eles
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    
}

//Função que reseta o programa ao estado inicial
function reiniciar() {

    //Altera o status do botao para desabilitado
    alteraStatusBotao();

    //Chama a função que limpa os inputs para obter novos valores
    limparCampo();

    //Altera a mensagem de números sorteados ao estado inicial
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: Nenhum até agora</label>`;

}

