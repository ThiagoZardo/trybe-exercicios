import React from 'react';


class Fancy extends React.Component {
  constructor() {
    super();

    this.state = {
      numeroDeCliques: 0,
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
    }

    this.funClick = this.funClick.bind(this);
    this.funClick2 = this.funClick2.bind(this);
    this.funClick3 = this.funClick3.bind(this);
  }

  funClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques +1
    }));
    console.log('clicou',this);
  }
  
  funClick2() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 +1
    }));
    console.log('clicou2', this);
  }
  
  funClick3() {
    this.setState((estadoAnterior, props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 +1
    }))
    console.log('clicou3', this);
  }

  render() {
    return (
      <div>
        <button onClick={this.funClick}>Me clicou {this.state.numeroDeCliques} x</button>
        <button onClick={this.funClick2}>Me clicou {this.state.numeroDeCliques1} x</button>
        <button onClick={this.funClick3}>Me clicou {this.state.numeroDeCliques2} x</button>
      </div>
    )
  }
}

export default Fancy;
