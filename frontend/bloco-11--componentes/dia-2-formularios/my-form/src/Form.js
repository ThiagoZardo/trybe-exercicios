import React from 'react';

class Form extends React.Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.state = {
      nome: '',
      sobrenome: '',
      check: false,
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }



  render() {
    return (
      <>
        <form>
          <input 
            name="nome" type="text" value={this.state.nome.value} onChange={this.handleChange} />
          <input name="sobrenome" type="text" value={this.state.sobrenome.value} onChange={this.handleChange} />
          <input name="check" type="checkbox" value={this.state.check.value} onChange={this.handleChange} />
        </form>
      </>
    )
  }
}

export default Form; 
