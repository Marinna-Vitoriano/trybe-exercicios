// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo com os valores que serão operados
const a = 2;
const b = 8;

// Adição (a + b)
console.log(a + b);

// Subtração (a - b)
console.log(a - b);

// Multiplicação (a * b)
console.log(a * b);

// Divisão (a / b)
console.log(a / b);

// Módulo (a % b)
console.log(a % b);


// Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados
const c = 19;
const d = 54;
if (c > d) {
  console.log(c + ' ' + 'é maior que' + ' ' + d);
}
else {
  console.log(d + ' ' + 'é maior que' + ' ' + c);
}

// Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
const e = 82;
const f = 76;
const g = 41;
if (e > f && e > g) {
  console.log(e + ' ' + 'é o maior número');
}
else if (f > e && f > g) {
  console.log(f + ' ' + 'é o maior número');
}
else {
  console.log(g + ' ' + 'é o maior número')
}

// Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
const valor = -23;
if (valor > 0) {
  console.log('positive');
}
else if (valor < 0) {
  console.log('negative');
}
else {
  console.log('zero')
}

// 🚀 Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.