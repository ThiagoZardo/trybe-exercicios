//1 - Usando o objeto abaixo, utilize For/in e imprima no console a mensagem 'Olá xxxxx' para cada nome, substituindo o xxxxx pelo nome em questão.

let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge' 
};

for(nome in names){
    console.log(' Olá, ' + names[nome]);
}

//2 - Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.

let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
};

for (carro in car){
    console.log(carro, car[carro])
}