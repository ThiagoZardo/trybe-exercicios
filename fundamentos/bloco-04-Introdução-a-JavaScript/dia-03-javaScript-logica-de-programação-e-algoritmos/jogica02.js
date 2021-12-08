/*

07 - Onde está o elemento?

Escreva uma algoritmo que recebe 2 parâmetros (um array e um elemento que está contido no array) e retorne a posição em que o elemento se encontra no array.

Caso não encontre o elemento, retorne:
-----------------------------------
"Elemento Não encontrado no array."
-----------------------------------

*/

let array = ['maca', 'banana', 'pera','morango'];
function findIndexOf(array,item){
    // Desenvolva seu código nessa função
    for(let i = 0; i < array.length; i+=1){
        if(array[i] === item){
            return i;    
        }
    } 
}
  
  console.log(findIndexOf(array, 'banana'));

  