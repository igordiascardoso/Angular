var minhaVar = 'miha variavel';
function minhaFunc(x, y) {
    return x + y;
}
var num = 2; //ES6 ou ES2015
var PI = 3.14; //ES6 ou ES2015
var numeros = [1, 2, 3];
// fazem a mesma coisa, porém:
//  a primeira é uma 'FUNÇÃO TRADICIONAL' - Declarada com a palavra chave 'function'
//  a segunda é uma é uma 'ARROW FUNCTION' - Declarada sem a a palavra chave 'function e feita para tornar o código mais curto.
// 
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; });
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
return Matematica;
;
