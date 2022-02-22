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
        </fieldset>

        <fieldset>
          <h2>Ultimo Emprego</h2>
          <textarea placeholder='Resumo do Curriculo...' maxLength="1000" required/>
          <textarea placeholder='Cargo...' maxLength="40" required />
          <textarea placeholder='Descrição do Cargo' maxLength="500" required />
        </fieldset>

        <div className='buttons'>
            <input type="submit" value="Enviar"/>
            <input type="submit" value="Limpar" />
        </div>
      </>
    )
  }
}

export default Form;
