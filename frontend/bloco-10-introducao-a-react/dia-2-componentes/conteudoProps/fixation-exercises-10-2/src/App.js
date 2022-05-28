// arquivo App.js, criado pelo create-react-app, modificado
import React from 'react';
import './App.css';
import Order from './Order';

/*
Conteudo 01
function App() {
  return (
    <Image source="https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg" alternativeText="Cute cat staring" />
  );
}
*/

class App extends React.Component {
  render() {
    const products = [

      {
        id: 102,
        user: "cena@gmail.com",
        product: "Razer Headphone",
        price: {
          value: 99.99,
          currency: "dollars"
        }
      },
    
      {
        id: 77,
        user: "cena@gmail.com",
        product: "Monster 500mL",
        price: {
          value: 9.99,
          currency: "dollars"
        }
      },
    ]
    
    return (
      products.map(produto => (
        <div className="App">
          <Order order={produto} />
        </div>
    )));
  }
}

export default App;

