//Utilizando for , descubra qual o menor valor contido no array e imprima-o;

/*Lógica
    1- Criar uma array
    2- criar váriavel menorValor e atribuir o valor 0
    3- Percorrer a array com For
    4- Se o primeiro elemento for menor do que a variavel menorValor
    5- menorValor == primeiro elemento
    6- Imprima menorValor 
*/
let numbers = [5, 9, 3, 10, 18, 1];

menorNumero = numbers[0]; //Não entendi essa linha

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] < menorNumero){
        menorNumero = numbers[i]
    }
}

console.log('O menor número é: ' + menorNumero);
console.log(numbers);