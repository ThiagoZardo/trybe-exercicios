const precoCusto = 1;
const precoVenda = 2;


const quantidadeVendida = 12;


if(precoCusto >= 0 && precoVenda >= 0 && quantidadeVendida >0){
    let imposto = 20 / 100 * precoCusto;
    let custoTotalProduto = precoCusto + imposto;
    let lucro = (precoVenda - custoTotalProduto) * quantidadeVendida;
    let precoTotal = quantidadeVendida * precoVenda;
    console.log("O valor total do lucro nessa venda é de: " + lucro);
}else{
    console.log("Erro")
}



/*
Gabarito da Trybe

const costOfProduct = 1;
const saleValue = 2;

if (costOfProduct >= 0 && saleValue >= 0) {
  const totalCostOfProduct = costOfProduct * 1.2;
  const totalProfit = (saleValue - totalCostOfProduct) * 12;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos");
};
*/