function alterarStatus(id) {
    let gameClicado = document.getElementById(`game-${id}`);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    const estaAlugado = imagem.classList.contains('dashboard__item__img--rented');

    if (estaAlugado) {
        if (!confirm('Você tem certeza que deseja devolver este jogo?')) {
            return; // Se não confirmar, sai da função
        } 
        imagem.classList.remove('dashboard__item__img--rented');
        botao.classList.remove('dashboard__item__button--return');
        botao.textContent = 'Alugar';
    } else {
    
    imagem.classList.add('dashboard__item__img--rented');
    botao.textContent = 'Devolver';
    botao.classList.add('dashboard__item__button--return');
    botao.textContent = 'Devolver';
}
contarJogosAlugados();
}

function contarJogosAlugados() {
  // Seleciona todos os elementos que estão com a classe de alugado
  const jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented');
  
  // Conta quantos foram encontrados
  const total = jogosAlugados.length;

  // Mostra no console
  console.log(`Total de jogos alugados: ${total}`);
}