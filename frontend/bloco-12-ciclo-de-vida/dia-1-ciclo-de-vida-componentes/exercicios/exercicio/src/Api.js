import React from 'react';

class Api extends React.Component {
  constructor() {
    super();

    this.state = {
      data: '',
    }
  }

  async componentDidMount() {
    const url = await fetch('https://dog.ceo/api/breeds/image/random');
    const response = await url.json();
    this.setState({
      data: response,
    })
  }

  render() {

    return (
      
      <div>
      <h1>API de Cachorrinhos</h1>
      <img src={ this.state.data.message } alt="Rangom dog"></img>
      
    </div>
  );
}
}

export default Api;
