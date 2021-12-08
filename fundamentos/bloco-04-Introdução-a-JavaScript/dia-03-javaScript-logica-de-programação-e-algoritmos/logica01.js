/*

06 - Retorne os números ímpares

A Dora aventureira gostaria de ter uma lista com todos o números ímpares entre 1 e 50.

Crie um algoritmo que retorne uma string com todos os números inteiros ímpares desse intervalo.

Use a seguinte estrutura no retorno:
----------------
"x, y, z, ...n."
----------------

*/

function oddNumbers(){
    // Desenvolva seu código nessa função
    let numbers = [];
    for(let i = 0; i < 50; i+=1){
        if( i % 2 != 0){
            numbers.push(i);
        }
    }
    console.log(numbers.join())
  }

  oddNumbers();
  
  