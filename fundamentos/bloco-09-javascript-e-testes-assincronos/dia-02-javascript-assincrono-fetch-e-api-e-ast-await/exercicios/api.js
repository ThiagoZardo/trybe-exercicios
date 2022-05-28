// api.js
const url = 'https://api.coincap.io/v2/assets';
const ul = document.getElementById('coins-list');

  let li = document.createElement('li');
  li.innerText = 'Teste';
  li.innerText += 'Teste';
  li.innerText += 'Teste';
  li.innerText += 'Teste';
  

    // const para = document.createElement("p");
    // para.innerText = "This is a paragraph";
    // document.body.appendChild(para);

const fetchCoins = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      for (let i = 0; i < 10; i+=1) {
        let li = document.createElement('li');
        li.innerText += data.data[i].name;
        document.getElementById('coins-list').appendChild(li);
      }
    } catch(error) {
        console.log(error);
    }
};  

fetchCoins();
