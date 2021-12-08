function imparesEPares(numeros){
 
    let resultado = {
        par: 0,
        impar: 0,
    };
    
    for (i = 0; i < numeros.length; i += 1){
        if(numeros[i] % 2 == 0){
            resultado.par += 1;
        } else {
            resultado.impar += 1;
        };
    };
    return resultado;
};
console.log(imparesEPares([0,1,2,3,4,5,6,7,8,9,10]));