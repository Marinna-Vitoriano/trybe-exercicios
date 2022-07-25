// // Crie um algoritmo que retorne o fatorial de 10
// let fatorial = 10
// for (let index = 10; index >= 1; index -= 1) {
//     fatorial = fatorial * index;
// }
// console.log(fatorial);

// // Agora, desenvolva um algoritmo que é capaz de inverter uma palavra
// let word = 'tryber';
// let palavraAoContrario = [];
// for (let index = 0; index < word.length; index += 1) {
//     palavraAoContrario.unshift(word[index]);
// }
// console.log(palavraAoContrario);

// //  Considere o array de strings abaixo. Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// let maiorPalavra = ;
// let menorPalavra = ;
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 2 e 50
let primo = 2
for (let index = 0; primo <= 50; index += 1) {
     primo += 1;
     if (primo % primo === 0) {
        console.log(primo);
     }
}
