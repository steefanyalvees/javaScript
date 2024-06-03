// focado em reticoes
// Função que gera um número inteiro aleatório entre dois valores, inclusive
function getInteiroAleatorioEntre(min, max) {
  // Math.random() gera um número aleatório entre 0 (inclusive) e 1 (exclusive)
  // Multiplicamos pelo intervalo (max - min) para obter um valor dentro desse intervalo
  // Somamos min para deslocar o intervalo para começar em min
  const valor = Math.random() * (max - min) + min;
  // Math.floor arredonda o valor para baixo, obtendo assim um número inteiro
  return Math.floor(valor);
}

let opcao = 0;  // Variável inicializada com 0

// Loop while que continua executando enquanto 'opcao' for diferente de -1
while (opcao != -1) {
  // Chama a função 'getInteiroAleatorioEntre' para obter um número inteiro aleatório entre -1 e 12
  opcao = getInteiroAleatorioEntre(-1, 12);
  // Exibe a opção gerada no console
  console.log(`opções foram ${opcao}.`);
}

