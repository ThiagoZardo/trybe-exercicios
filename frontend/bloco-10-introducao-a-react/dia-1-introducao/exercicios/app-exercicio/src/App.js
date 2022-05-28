import logo from './logo.svg';
import './App.css';

const arrayCompromissos = ['Preparar conteúdo do dia', 'Estudar Conteúdo, Fazer Aula Ao Vivo', 'Fazer Exercícios', 'Ir para o Fechamento'];

const Task = (value) => {
  return (
    arrayCompromissos.map((compromisso) => <li> {compromisso}</li>)
  );
}

export default Task;
