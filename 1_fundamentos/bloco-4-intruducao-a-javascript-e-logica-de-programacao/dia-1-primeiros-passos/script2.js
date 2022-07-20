let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

// Utilize o operador typeof para imprimir qual o tipo das variáveis patientId, isEnrolled, patientInfo e patientEmail
console.log(typeof patientId);
console.log(typeof isEnrolled);
console.log(typeof patientInfo);
console.log(typeof patientEmail);

// Experimente executar o comando console.log(typeof patientAge) e veja o que acontece!
console.log(typeof patientAge);

// Experimente também trocar o valor de patientId = 50 para patientId = '50'. Execute novamente um console.log() para imprimir o tipo dessa variável após a modificação
patientId = '50';
console.log(typeof patientId);


// Crie uma constante chamada base e uma variável chamada height e atribua os seus respectivos valores: 5 e 8
const base = 5;
let height = 8;

// Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela altura
const area = base * height;
console.log(area);

// Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo
const perimeter = (5*2) + (8*2);
console.log(perimeter);
