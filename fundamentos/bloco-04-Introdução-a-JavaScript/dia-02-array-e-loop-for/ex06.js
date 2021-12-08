//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

/*Lógica
    1- Criar uma array
    2- Criar váriavel IMPAR
    3- Criar váriavel PAR
    4- Percorrer toda a array utilizando FOR
    5- Verificar se o primeiro elemento da array é IMPAR (elemento % 2 !==0)
    6- Se for IMPAR atribuir o elemento a variavel IMPAR (impar = impar + 1)
    7- Se impar === 0 imprima "nenhum valor impar"
    7- Se não Imprima a variavel IMPAR
    
*/ 

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
totalImpares = 0;
totalPares = 0;

for (var i = 0; i < numbers.length; i += 1){

    if(numbers[i] % 2 !== 0){
        totalImpares = totalImpares + 1;
    }

}

if(totalImpares === 0){
    console.log('Nenhum valor ímpar encontrado')
}else{
    console.log("Encontrei " + totalImpares + " números Impares");
}





