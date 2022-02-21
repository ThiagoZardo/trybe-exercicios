import React from 'react';


class Fancy extends React.Component {
  constructor() {
    super();

    this.state = {
      numeroDeCliques1: 0,
      numeroDeCliques2: 0,
      numeroDeCliques3: 0,
    }


    this.funClick = this.funClick.bind(this);
    this.funClick2 = this.funClick2.bind(this);
    this.funClick3 = this.funClick3.bind(this);
  }

  funClick() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques1: estadoAnterior.numeroDeCliques1 +1
    }));
  }
  
  funClick2() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques2: estadoAnterior.numeroDeCliques2 +1
    }));
  }
  
  funClick3() {
    this.setState((estadoAnterior, props) => ({
      numeroDeCliques3: estadoAnterior.numeroDeCliques3 +1
    }))
  }

  parImpar(number) {
    return number % 2 === 0 ? 'green' : 'white';
  }

  render() {
    return (
      <div className='containerButton'>
        <button
          onClick={this.funClick}
          style={{"backgroundColor": this.parImpar(this.state.numeroDeCliques1) }} 
          >Me clicou {this.state.numeroDeCliques1} x
        </button>

        <button
          onClick={this.funClick2}
          style={{"backgroundColor": this.parImpar(this.state.numeroDeCliques2) }} 
          >Me clicou {this.state.numeroDeCliques2} x</button>

        <button
          onClick={this.funClick3}
          style={{"backgroundColor": this.parImpar(this.state.numeroDeCliques3) }}
          >Me clicou {this.state.numeroDeCliques3} x</button>
      </div>
    )
  }
}

export default Fancy;
