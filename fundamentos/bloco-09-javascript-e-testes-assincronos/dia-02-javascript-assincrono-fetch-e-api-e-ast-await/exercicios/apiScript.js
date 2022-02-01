// apiScript.js Url da API guardada em uma variavel
const API_URL = 'https://api.chucknorris.io/jokes/random?category=dev';

// Objeto de acordo com a API
const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
}

const fetchJoke = async () => { // Uma função assincrona
  const h2 = document.getElementById('jokeContainer');
  try {
    const response = await fetch(API_URL); // Sempre usar o fetch para acessar uma API
    const data = await response.json(); // await só pode ser usado para funções async
    h2.innerText = data.value; // Acessando o .value do "objeto"
    console.log(data);
  } catch(error) {  // Depois do catch o parametro já é entendido pelo javascript como um erro.
    console.log(error); 
    h2.innerText = 'Houve um erro!'
  }
};

window.onload = () => fetchJoke();
