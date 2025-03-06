var meuCarro = {
    marca: "chevrolet",
    modelo: "chevette",
    ano: 2002,
    motor: "1.6 Flex"
};
console.log("Meu Carro:", meuCarro);
var multiplicar = function (x, y) { return x * y; };
console.log("Multiplicação 3 x 4:", multiplicar(2, 5)); // 10
console.log("Multiplicação 7 x 2:", multiplicar(6, 2)); // 12
//inverter array 
function inverterArray(array) {
    return array.reverse();
}
var numeros = [2, 3, 4, 5, 6];
var palavras = ["cleber", "valter", "cleyton"];
console.log("Array invertido (números):", inverterArray(numeros));
console.log("Array invertido (palavras):", inverterArray(palavras));
var UsuarioRepositorio = /** @class */ (function () {
    function UsuarioRepositorio() {
        this.usuarios = [];
    }
    UsuarioRepositorio.prototype.salvar = function (dado) {
        this.usuarios.push(dado);
    };
    UsuarioRepositorio.prototype.obterTodos = function () {
        return this.usuarios;
    };
    return UsuarioRepositorio;
}());
// Teste da implementação
var repo = new UsuarioRepositorio();
repo.salvar({ nome: "João", email: "joao@email.com" });
repo.salvar({ nome: "Maria", email: "maria@email.com" });
console.log("Lista de usuários:", repo.obterTodos());
//Exercício 5 - Type Alias RespostaServidor
