//Exercicio 01

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
