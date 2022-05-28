/*
//Exercicio 01
const numFatorial = (num) => {
  let resultado = 1;
  for (let i = 1; i <= num; i+=1 ){
    resultado *= [i];
  }
  return resultado;
}
console.log(numFatorial(0));


//Exercicio 02
const longestWord = (frase) => {
  const texto = frase.split(" ");
  let maior = 0;
  let palavra = 0;
  
  for (let i = 0; i < texto.length; i+=1) {
    if (texto[i].length > maior) {
      maior = texto[i].length;
      palavra = texto[i];
    } 
  }
  return palavra;
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));
*/

//Exercicio 03

const btnEnviar = document.getElementById('btn-enviar');
let clicou = document.getElementById('clicou');
let contador = 0;
btnEnviar.addEventListener('click', () => {
  contador += 1;
  clicou.innerText = contador;
})