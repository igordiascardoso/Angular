#### ** O que é uma DOM ? ** ####

    1. A DOM transforma esse código em uma árvore, como uma árvore genealógica, onde cada parte do HTML é um galho. Por exemplo:

        Na árvore da DOM, isso ficaria assim:

        <html> é o tronco.
        <body> é um galho grande.
        <div> é um galho menor dentro do <body>.
        Dentro da <div>, os galhos <h1> e <p> são como objetos guardados nessa caixinha.
    .

#### ** O que é uma shadow dom ? ** ####
    
    1. Ela é uma arvore que cresce somente naquele galho e conseguimos trabalhar nele de mareira encapsulada, arvore a parte (componentes/custom elements).

        html
        ├── head
        ├── body
        │   ├── div
        │   │   #Shadow DOM
        │   │   ├── style
        │   │   └── span
        │   │   #Fim Shadow DOM
        │   └── h1
    .


#### ** Component ? ** ####

    1. Criar uma tag, ou seja, o caso de uso do arquivos 'src/components/CardNews.js'.
    2. É composto por vários 'Elements'.

#### ** OBS ** ####

    1. 'defer', é usado somente para carregar apos a dom ser carregada.
    

