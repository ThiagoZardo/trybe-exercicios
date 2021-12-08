// Acesse o elemento elementoOndeVoceEsta .
console.log(document.getElementById('elementoOndeVoceEsta'));

// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.querySelector('#elementoOndeVoceEsta').parentNode.style.backgroundColor='blue';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.querySelector('#primeiroFilhoDoFilho').innerHTML=`<p>Texto inserido via Javascript</p>`

// Acesse o primeiroFilho a partir de pai.
document.querySelector('#pai').firstElementChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
document.querySelector('#elementoOndeVoceEsta').parentNode.firstElementChild;

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
document.querySelector('#elementoOndeVoceEsta').lastChild.nextSibling;

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
// Agora acesse o terceiroFilho a partir de pai .