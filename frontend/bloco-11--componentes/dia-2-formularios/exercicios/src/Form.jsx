import React from 'react';
import './Form.css';

class Form extends React.Component {
  render() {
    return (
      <>
          <h1>Trabalhe Conosco</h1>
        <fieldset id='container-form' type="submit">
          <input name='nome' type="text" maxLength="40" required placeholder='Nome:' />
          <input name='email' type="text" maxLength="50" required placeholder='E-mail:' />
          <input name='cpf' type="text" maxLength="11" required placeholder='CPF:' />
          <input name='endereco' type="text" maxLength="200" required placeholder='Endereço:' />
          <input name='cidade' type="text" maxLength="28" required placeholder='Cidade:' />
          <select name='estado' type="combo" required />
          <div>
            <input name='radio' type="radio" id="radio" placeholder='UF' />Casa
            <input name='radio' type="radio" id="radio" placeholder='UF' />Apartamento
          </div>
          <div>
            <input type="submit" />
          </div>
        </fieldset>
      </>
    )
  }
}

export default Form;
