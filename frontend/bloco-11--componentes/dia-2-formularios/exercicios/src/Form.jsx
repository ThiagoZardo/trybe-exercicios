import React from 'react';
import './Form.css';

class Form extends React.Component {
  constructor(props) {
    super();
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereco: '',
      cidade: '',
      estado: '',
      radioCasa: false,
      radioApartamento: false,
      resumoCurriculo: '',
      cargo: '',
      descricaoCargo: '',
    };
  }

  enviar = ({ target }) => {
    const { name } = target
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }

  render() {
    return (
      <>
          <h1>Trabalhe Conosco</h1>
        <fieldset id='container-form' type="submit">
          <input name='nome' type="text" maxLength="40" required placeholder='Nome:' onChange={this.enviar} />
          <input name='email' type="text" maxLength="50" required placeholder='E-mail:' onChange={this.enviar} />
          <input name='cpf' type="text" maxLength="11" required placeholder='CPF:' onChange={this.enviar} />
          <input name='endereco' type="text" maxLength="200" required placeholder='Endereço:' onChange={this.enviar} />
          <input name='cidade' type="text" maxLength="28" required placeholder='Cidade:' onChange={this.enviar} />     
          <select id="estado" name="estado" placeholder='UF' onChange={this.enviar}>
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
          </select>
          <div>
            <input name='radioCasa' type="radio" id="radio" placeholder='UF' />Casa
            <input name='radioApartamento' type="radio" id="radio" placeholder='UF' />Apartamento
          </div>
        </fieldset>

        <fieldset>
          <h2>Ultimo Emprego</h2>
          <textarea name='resumoCurriculo' placeholder='Resumo do Curriculo...' maxLength="1000" required onChange={this.enviar}/>
          <textarea name='cargo' placeholder='Cargo...' maxLength="40" required onChange={this.enviar} />
          <textarea name='descricaoCargo' placeholder='Descrição do Cargo' maxLength="500" required onChange={this.enviar} />
        </fieldset>

        <div className='buttons'>
            <input type="submit" value="Enviar"/>
            <input type="submit" value="Limpar" onClick={this.limpar} />
        </div>
      </>
    )
  }
}

export default Form;
