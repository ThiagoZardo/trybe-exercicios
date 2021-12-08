//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

/*Lógica
    1- Criar uma array e adcionar valores nela
    2- criar uma variavel para armazenar os resultados
    3- Percorrer os elementos da array utilizando For
    4- Atribuir a variavel resultado o valor dela mais o elemento da vez.
    5- Imprimir o resultado da variavel soma     
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for (let i = 0; i < numbers.length; indice = i += 1){
    resultado += numbers[i];
}

console.log(resultado);