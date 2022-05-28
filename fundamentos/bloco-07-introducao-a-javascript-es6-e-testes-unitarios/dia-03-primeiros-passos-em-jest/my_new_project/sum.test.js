const sum = require("./sum");

describe('1 Exercicio 01 - Testes da Função sum.', () => {

  it('1- Verifica se 4 + 5 = 9', () => {
    expect(sum(4,5)).toBe(9);
  });

  it('2- Verifica se 0 + 0 = 0', () =>{
    expect(sum(0,0)).toBe(0);
  })

  it('3- não pode ser uma string', ()=> {
    expect(()=> sum(4, '5')).toThrowError();
    expect(()=> sum(4, '5')).toThrowError('parameters must be numbers');
  })
  
});




