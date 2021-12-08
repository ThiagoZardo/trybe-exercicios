//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

/*Lógica
Média = Soma de todos os números dividido pela quantidade de números

1- Criar uma array que receberá os elementos
2- criar uma variave que receberá a soma de todos elementos
3- Criar uma variavel que receberá a média dos elementos

4- Percorrer todos os elementos utilizando for
5- Guardar o valor do elemento na variavel soma que será somado ao valor dela.
6- Atribuir a variavel media o total da variavel soma e dividir pela quantidade de elementos
7- Criar uma condição usando IF
8- Se a media for maior que 20, Imprima mensagem Maior que 20
9- Se não imprima mensagem Menor que 20  

*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultado = 0;

for(i = 0; i < numbers.length; i += 1){
    resultado += numbers[i];
}

const media = resultado / numbers.length;

if(media > 20){
    console.log(media + " Valor Maior que 20!");
} else{
    console.log(media + " Valor menor que 20");
}