//1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

function verificaPalavra (palavra){

    let contrario = palavra.split('').reverse().join('');
    if(contrario === palavra){
        return true;
    }else{
        return false;
    }
}

console.log(verificaPalavra('arara'));