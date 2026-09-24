const produtos = [
    { nome: 'Notebook', preco: 3500.0 },
    { nome: 'Smartphone', preco: 2200.0 },
    { nome: 'Cadeira Ergonômica', preco: 850.0 },
    { nome: 'Cafeteira Elétrica', preco: 250.0 },
    { nome: 'Fone de Ouvido Bluetooth', preco: 180.0 },
];

const reajuste = produtos.map((mais) => {
    return  mais.preco + (mais.preco *0.1)

});

console.log(reajuste)
