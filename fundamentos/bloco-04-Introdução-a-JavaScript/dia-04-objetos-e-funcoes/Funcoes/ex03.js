//3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let numeros = [2, 3, 6, 7, 10, 1]; 
function verificaMenorValor(array){
    let menorElemento = numeros[0];
    let menorIndice = 0;
    for (indice in array){
        if(numeros[indice] < menorElemento){
            menorElemento = numeros[indice];
            menorIndice = indice;
        }
    }
    return menorIndice;
}

console.log(verificaMenorValor(numeros));

