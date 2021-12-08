//2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let numeros = [2, 3, 6, 7, 10, 1, 30];  //Criei uma array
function retornaIndiceMenor(array){ // Abri uma função e coloquei um parametro chamado de array 
    let valorMaior = array[0]; //criei uma variavel para guardar o primeiro número da array
    let indexmaiorValor = 0; // criei uma variavel para guardar o indice
    for(index in array){    //Criei variavel indice e Percorra o array 
        if(array[index] > valorMaior){ //Se o primeiro elemento for maior que a variavel criada...
            valorMaior = array[index]; //atribua a variavel criada o valor do elemento
            indexmaiorValor = index; //atribui o valor do indice do for na 2ª variavel criada
        };
    }; 
    return indexmaiorValor; //retornei a 2ª variavel criada
};
console.log(retornaIndiceMenor(numeros));

//index ==> é o indice que deve ser comparado com o elemento
//array[index]  ==> mostra o elemento