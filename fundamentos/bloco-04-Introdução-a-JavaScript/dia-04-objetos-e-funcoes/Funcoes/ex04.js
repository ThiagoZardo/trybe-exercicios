//4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.


function verificaMaiorNome(array){
    let maiorNome = array[0];
    for(elemento of array){
        if(elemento.length > maiorNome.length){
            maiorNome = elemento;
        }
    }
    return maiorNome;
}

console.log(verificaMaiorNome(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana', 'ThiagoJarilhoZardo']));