//Utilizando for , descubra qual o maior valor contido no array e imprima-o;

/*Lógica
    1- Criar Variavel Array
    2- Criar váriavel que sera o maior número, e atribuir 0
    3- Percorrer a array e pegar o primeiro elemento
    4- Verificar Se o pŕimeiro elemento é maior que a variavel maior número
    5- Se for atribua a variavel maiorNumero o elemento
    6- Imprima o maiorNumnero
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorNumero = 0;

for(let i = 0; i < numbers.length; i += 1){
    
    if(numbers[i] > maiorNumero){
        maiorNumero = numbers[i];
    }

}

console.log(maiorNumero)
 
