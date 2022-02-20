import React from 'react';


class Fancy extends React.Component {
  constructor() {
    super();
    this.funClick = this.funClick.bind(this);
    this.funClick2 = this.funClick2.bind(this);
    this.funClick3 = this.funClick3.bind(this);
  }

    funClick() {
      console.log('clicou');
    }
    
    funClick2() {
      console.log('clicou2');
    }
    
    funClick3() {
      console.log('clicou3');
    }

  render() {
    return (
      <div>
        <button onClick={this.funClick}>Clique -me 1</button>
        <button onClick={this.funClick2}>Clique -me 2</button>
        <button onClick={this.funClick3}>Clique -me 3</button>
      </div>
    )
  }
}

export default Fancy;
