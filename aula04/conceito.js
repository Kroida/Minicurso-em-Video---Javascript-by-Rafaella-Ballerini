// Array é uma estrutura de dados que armazena uma coleção de elementos, que podem ser de qualquer tipo, como números, strings, objetos, etc. Os elementos em um array são indexados, ou seja, cada elemento tem um índice numérico associado a ele, começando do zero.
// Os arrays são úteis para armazenar e manipular conjuntos de dados de forma eficiente. Eles oferecem uma variedade de métodos para adicionar, remover, acessar e modificar elementos. Aqui estão alguns exemplos de como usar arrays em JavaScript:

let frutas = ["maçã", "banana", "laranja", "uva", "abacaxi"];

frutas.indexOf("banana"); // Retorna o índice da fruta "banana" no array, que é 1.
frutas.push("kiwi"); // Adiciona "kiwi" ao final do array frutas.
frutas.pop(); // Remove o último elemento do array frutas, que é "kiwi".
frutas.shift(); // Remove o primeiro elemento do array frutas, que é "maçã".
frutas.unshift("morango"); // Adiciona "morango" ao início do array frutas.
frutas.slice(1, 3); // Retorna um novo array com os elementos do índice 1 ao 2 (não inclui o índice 3), ou seja, ["banana", "laranja"].
frutas.splice(1, 2, "pera", "manga"); // Remove 2 elementos a partir do índice 1 e adiciona "pera" e "manga" nesse local. O array frutas agora é ["morango", "pera", "manga", "uva", "abacaxi"].
frutas.join(", "); // Retorna uma string com os elementos do array separados por vírgula, ou seja, "morango, pera, manga, uva, abacaxi".
frutas.sort(); // Ordena o array frutas em ordem alfabética, ou seja, ["abacaxi", "manga", "morango", "pera", "uva"].
frutas.reverse(); // Inverte a ordem dos elementos do array frutas, ou seja, ["uva", "pera", "morango", "manga", "abacaxi"].
frutas.length; // Retorna o número de elementos no array frutas, que é 5.
frutas.includes("pera"); // Retorna true se "pera" estiver no array frutas, caso contrário, retorna false.

frutas.forEach(function (fruta) { // Executa uma função para cada elemento do array frutas.
    console.log(fruta); // Imprime cada fruta no console.
});