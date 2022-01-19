//Exercicio 01
/*
const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

const dados = (callback) => {
  const obj = {
    nomeCompleto: callback,
    dominio: `${callback.split(' ').join('_')}@trybe.com`, 
  }
  return obj;
}

console.log(newEmployees(dados));
*/

//Exercicio 02
//2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").


const confereResultado = (meuJogo, resultado) => {
  meuJogo === resultado;
}

const sorteio = (meuJogo, confereResultado) => {
  const number = Math.floor((Math.random() * 5) + 1);
  if(meuJogo === number) {
    return 'Parabéns você ganhou';
  } else {
    return 'Tente novamente';
  }; 
};

console.log(sorteio(2, confereResultado));