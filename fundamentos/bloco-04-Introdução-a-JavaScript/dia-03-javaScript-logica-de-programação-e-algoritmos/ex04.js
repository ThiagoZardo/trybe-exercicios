let n = 5;
let estrela = '*';
let espaco = '';
let posicao = n;


for(let indexLinha = 0; indexLinha <= n; indexLinha+= 1){
    for(let indexColuna = 0; indexColuna < n; indexColuna +=1){
        if(indexColuna < posicao){
            espaco = espaco + ' '
        }else{
            espaco = espaco + estrela;
        }
    }
    console.log(espaco);
    espaco = ' ';
    posicao -= 1; 
    
}