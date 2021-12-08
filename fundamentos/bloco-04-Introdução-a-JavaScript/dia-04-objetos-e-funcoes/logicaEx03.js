function verificaFimPalavra(word, ending){
    let resultado =  word.split(ending);
    if(resultado[resultado.length-1] === ''){
      return true;
    }
    else
      return false;
  }