import React from 'react';

const funClick = () => {
  console.log('clicou');
}

const funClick2 = () => {
  console.log('clicou2');
}

const funClick3 = () => {
  console.log('clicou3');
}

class Fancy extends React.Component {
  render() {
    return (
      <div>
        <button onClick={funClick}>Clique -me 1</button>
        <button onClick={funClick2}>Clique -me 2</button>
        <button onClick={funClick3}>Clique -me 3</button>
      </div>
    )
  }
}

export default Fancy;
