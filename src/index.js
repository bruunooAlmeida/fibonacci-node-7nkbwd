/**
 * Desafio: escrever uma função que receba um numero, e retorne o valor deste numero na sequencia de Fibonacci
 * A sequencia de Fibonacci é a sequencia de números onde cada termo corresponde a soma dos dois anteriores
 * Mais detalhes em: https://pt.wikipedia.org/wiki/Sequ%C3%AAncia_de_Fibonacci
 *
 * Voce pode testar o seu codigo rodando o comando `npm run test` no terminal
 * e tambem pode alterar o arquivo `index.test.js` se desejar.
 * Apos enviado, seu codigo sera validado com outros cenarios de teste tambem.
 *
 * @example `fibonacci(4)` retorna `5`
 * @param n numero da sequencia desejada (1 <= n <= 50)
 * @returns valor da sequencia
 */
function fibonacci(n) {
  // if (n > 50) return false;

  if (n < 2) {
    return 1;
  } else return fibonacci(n - 1) + fibonacci(n - 2);
}

module.exports = fibonacci;
