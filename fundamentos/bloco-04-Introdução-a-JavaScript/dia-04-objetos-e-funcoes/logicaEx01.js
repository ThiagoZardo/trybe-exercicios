//Exercício 1 - Crie uma função que calcule a área e o perímetro de um quadrilátero qualquer. Essa função deve receber dois parâmetros: base e altura e retornar um objeto no formato: { area: 0, perimetro: 0 }.

// Fórmulas: 
// perimetro = (2*base) + (2*altura)
// area = base * altura

function quadrilatero (base,altura){

    let resultado = {
        perimetro : (2 * base) + (2 * altura),
        area: (base * altura)
    };
    return resultado;
};

console.log(quadrilatero(10,20));