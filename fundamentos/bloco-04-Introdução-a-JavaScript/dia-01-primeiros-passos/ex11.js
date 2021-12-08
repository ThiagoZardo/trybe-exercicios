let salarioBruto = 10000.00;
let aliquota;

//INSS
if(salarioBruto <= 1556.94){
    aliquota = 8 / 100 * salarioBruto;
}else if(salarioBruto <= 2594.92){
    aliquota = 9 / 100 * salarioBruto;
}else if(salarioBruto < 5189.82){
    aliquota = 11 / 100 * salarioBruto;
}else{
    aliquota = 570.88;
}

let salarioComDesconto = salarioBruto - aliquota;
let salarioLiquido;
let impostoRenda;

//IR
if(salarioComDesconto <= 1903.98){
    impostoRenda = 0;
    salarioLiquido = salarioComDesconto - impostoRenda;
}else if(salarioComDesconto < 2826.65){
    impostoRenda = 7.5 / 100 * salarioComDesconto - 142.80;
    salarioLiquido = salarioComDesconto - impostoRenda;
}else if(salarioComDesconto <= 3751.05){
    impostoRenda = 15 / 100 * salarioComDesconto - 354.80;
    salarioLiquido = salarioComDesconto - impostoRenda;
}else if(salarioComDesconto < 4664.68){
    impostoRenda = 22.5 / 100 * salarioComDesconto - 636.13;
    salarioLiquido = salarioComDesconto - impostoRenda;
}else{
    impostoRenda = 27.5 / 100 * salarioComDesconto - 869.36;
    salarioLiquido = salarioComDesconto - impostoRenda;
}

console.log("Meu salário Bruto é de " + salarioBruto + " reais, pago de INSS " + aliquota + " reais, ainda é descontado " + impostoRenda + " reais de Imposto de Renda. No final do mês meu salário Liquido é de "  + salarioLiquido + " reais. :(");