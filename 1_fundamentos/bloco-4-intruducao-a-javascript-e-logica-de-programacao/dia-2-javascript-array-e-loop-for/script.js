let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (let eachNumber of numbers) {
    console.log(eachNumber);
}


// some todos os valores contidos no array e imprima o resultado;
let soma = 0;
for (index = 0; index < numbers.length; index += 1) {
    soma = soma + numbers[index];
}
console.log(soma)


// calcule e imprima a média aritmética dos valores contidos no array;
let media = soma / numbers.length;
console.log(media);


// caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if (media > 20) {
    console.log('valor maior que 20');
}
else {
    console.log('valor menor ou igual a 20');
}


// 🚀 Utilizando for, descubra qual o maior valor contido no array e imprima-o;
let higherNumber = numbers[0];
for (index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > higherNumber) {
        higherNumber = numbers[index];
    }
}
console.log(higherNumber);


// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let quantidadeDeImpares = [];
for (index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        quantidadeDeImpares.push(numbers[index]);
    }
}
console.log(quantidadeDeImpares.length);


// // Utilizando for, descubra qual o menor valor contido no array e imprima-o
let smallestNumber = numbers[0];
for (index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < smallestNumber) {
        smallestNumber = numbers[index];
    }
}
console.log(smallestNumber);


// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let newArray = [];
for (let index = 1; index <= 25; index += 1) {
    newArray.push(index);
}
console.log(newArray);


// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.
for (index = 0; index < newArray.length; index += 1) {
    console.log(newArray[index] / 2);
}


// Bônus
// Ordene o array numbers em ordem crescente e imprima seus valores


// Ordene o array numbers em ordem decrescente e imprima seus valores;


// crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push.
novoArray = [];
for (index = 0; index < numbers.length; index += 1) {
    if (index + 1 < numbers.length) {
        novoArray.push(numbers[index] * (numbers[index + 1]));
    }
    else {
novoArray.push(numbers[index] * 2);
    }
}
console.log(novoArray);


/*Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. . O resultado deve ser o array abaixo:
[45, 27, 57, 1330, 560, 800, 200, 70, 945, 54] */