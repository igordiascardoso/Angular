//object
let produto:object = "assa" // tem que receber objeto, valor por 'chaves'

let novoproduto:object = { // real caso object sem previsibilidade
    name:"Igor",
    cidade:"DF",
    idade:27
}

type ProdutoLoja{ //object com previsibilidade
    nome:string;
    id:number;
    preco:number;
}

let meuProduto:ProdutoLoja = {
    nome:"tenis",
    id:15,
    preco:12.10
}