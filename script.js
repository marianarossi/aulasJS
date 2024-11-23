// Selecionar os elementos
const botao = document.getElementById("botao");
const contadorTexto = document.getElementById("contador");

// Variável para armazenar o número de cliques
let contador = 0;

// Adicionar o evento de clique ao botão
botao.addEventListener("click", function() {
  // Incrementar o contador
  contador++;
  // Atualizar o texto do contador na página
  contadorTexto.textContent = contador;
});
