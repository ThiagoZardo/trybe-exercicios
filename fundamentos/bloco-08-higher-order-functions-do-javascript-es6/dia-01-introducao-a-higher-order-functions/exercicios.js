
//Exercicio 01
const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  }
  return employees;
};

const dados = (callback2) => {
  const obj = {
    nomeCompleto: callback2,
    dominio: `${callback2.split(' ').join('_')}@trybe.com`.toLowerCase(), 
  }
  return obj;
}

console.log(newEmployees(dados));

//Exercicio 02
//2 - Desenvolva uma HOF que retorna o resultado de um sorteio. Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou").


const confereResultado = (meuJogo, resultado) => {
  return meuJogo === resultado;
}

const sorteio = (meuJogo, callback) => {
  const number = Math.floor((Math.random() * 5) + 1);
  if(callback(meuJogo, number)) {
    return 'Parabéns você ganhou';
  } else {
    return 'Tente novamente';
  }; 
};

console.log(sorteio(2, confereResultado));


//Exercicio 03
//3 - Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem verificadas (respostas da pessoa estudante) e o terceiro é uma função que checa se as respostas estão corretas e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
//Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
 /*
const RIGHT_ANSWERS =     ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const corrigeRespostas = (acertos, erros) => {
  let nota = 0;
  acertos = 0;
  erros = 0;
  for (let i = 0; i < RIGHT_ANSWERS.length; i+= 1) {
    if (STUDENT_ANSWERS[i] === 'N.A') {
      0;
    } else if (RIGHT_ANSWERS[i] === STUDENT_ANSWERS[i]) {
      nota += 1;
      acertos += 1;
    } else if (STUDENT_ANSWERS[i] !== RIGHT_ANSWERS[i]) {
      nota -= 0.5;
      erros += 1;
    }
  }
  return nota;
}

const quantasAcertou = (gabarito, respostasEstudante, callBack) => {
  gabarito = RIGHT_ANSWERS;
  respostasEstudante = STUDENT_ANSWERS;  

  return `Resultado Final: ${corrigeRespostas()} pontos`;
}

console.log(quantasAcertou());
*/