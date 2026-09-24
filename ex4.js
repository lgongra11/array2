const produtos = [
    { nome: 'Notebook', preco: 3500.0, disponivel: 5 },
    { nome: 'Smartphone', preco: 2200.0, disponivel: 0 },
    { nome: 'Cadeira Ergonômica', preco: 850.0, disponivel: 0 },
    { nome: 'Cafeteira Elétrica', preco: 78.0, disponivel: 15 },
    { nome: 'Fone de Ouvido Bluetooth', preco: 90.0, disponivel: 34 },
];

const maior = produtos.filter((p) => {
    return p.preco >= 100 && p.disponivel > 0
})

console.log(maior)
