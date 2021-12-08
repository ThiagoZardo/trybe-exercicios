//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

/*Lógica
Média = Soma de todos os números dividido pela quantidade de números

1- Criar uma array que receberá os elementos
2- criar uma variave que receberá a soma de todos elementos
3- Criar uma variavel que receberá a média dos elementos

4- Percorrer todos os elementos utilizando for
5- Guardar o valor do elemento na variavel somado ao valor dela.
6- Atribuir a variavel media o total da variavel soma e dividir pela quantidade de elementos
7- Imprimir a media   

*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
resultado = 0


for(i = 0; i < numbers.length; i += 1){
    resultado += numbers[i];
}

const media = resultado / numbers.length;


console.log(media);
