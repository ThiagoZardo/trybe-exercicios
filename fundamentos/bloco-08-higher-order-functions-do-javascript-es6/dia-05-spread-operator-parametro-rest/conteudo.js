//Para fixar e praticar, vamos fazer uma salada de frutas com itens adicionais que você desejar. Faça uma função chamada fruitSalad passando como parâmetro specialFruit e additionalItens , faça a função retornar uma lista única contendo todos os itens da nossa salada de frutas usando o spread .

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['banana', 'maca', 'morango'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['manga', 'limao', 'laranja'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...specialFruit, ...additionalItens]
  
};

//console.log(fruitSalad(specialFruit, additionalItens));


const student = {
  a: 'Maria',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: name, b: classAssigned, c: subject } = student;

console.log(name); // Maria
console.log(classAssigned); // Turma B
console.log(subject); // Matemática

//1 - Temos dois objetos, um com informações pessoais de uma pessoa usuária e outro com informações referentes ao cargo desta pessoa usuária na empresa trappistEnterprise . Precisamos criar um terceiro objeto, que terá os dados pessoais e os dados de cargo juntos. Para isso, utilize o spread operator .

const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const dadosFuncionario = {user, jobInfos};

console.log(dadosFuncionario);


//2 - Com o objeto em mãos, imprima no console uma frase utilizando os dados do objeto criado anteriormente. Para isso, utilize a desestruturação de objetos em conjunto com template literals .
//Exemplo "Hi, my name is Maria, I'm 21 years old and I'm Brazilian. I work as a Software engineer and my squad is RLL-Rocket Landing Logic"
console.log(`Hi, my name is ${name}, I'm ${dadosFuncionario.age} years old and I'm ${dadosFuncionario.nationality}. I work as a ${dadosFuncionario.profession} and my squad is ${dadosFuncionario.squadInitials}-${dadosFuncionario.squadInitials}`);



const getPosition = (latitude, longitude) => {
  return {
    latitude,
    longitude,
  };
}  

console.log(getPosition(-19.8157, -43.9542));