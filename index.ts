// 1. Interfaces e Tipagem Avançada
interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;
}
const meuCarro: Carro = {
    marca: "chevrolet",
    modelo: "chevette",
    ano: 2002,
    motor: "1.6 Flex"
};
console.log("Meu Carro:", meuCarro);

//multiplicação

interface Multiplicacao {
    (a: number, b: number): number;
}
const multiplicar: Multiplicacao = (x, y) => x * y;
console.log("Multiplicação 3 x 4:", multiplicar(2, 5)); // 10
console.log("Multiplicação 7 x 2:", multiplicar(6, 2)); // 12

//inverter array 

function inverterArray<T>(array: T[]): T[] {
    return array.reverse();
}
const numeros = [2, 3, 4, 5, 6];
const palavras = ["cleber", "valter", "cleyton"];
console.log("Array invertido (números):", inverterArray(numeros));
console.log("Array invertido (palavras):", inverterArray(palavras));

//Exercício 4 - Interface Genérica Repositorio<T>

interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}
class UsuarioRepositorio implements Repositorio<{ nome: string; email: string }> {
    private usuarios: { nome: string; email: string }[] = [];
    salvar(dado: { nome: string; email: string }): void {
        this.usuarios.push(dado);
    }
    obterTodos(): { nome: string; email: string }[] {
        return this.usuarios;
    }
}
// Teste da implementação
const repo = new UsuarioRepositorio();
repo.salvar({ nome: "João", email: "joao@email.com" });
repo.salvar({ nome: "Maria", email: "maria@email.com" });
console.log("Lista de usuários:", repo.obterTodos());


//Exercício 5 - Type Alias RespostaServidor

type RespostaServidor = string | boolean;
function processarResposta(resposta: RespostaServidor): void {
    if (typeof resposta === "string") {
        console.log(`Resposta do servidor: ${resposta}`);
    } else if (typeof resposta === "boolean") {
        console.log(`Operação foi bem-sucedida? ${resposta ? "Sim" : "Não"}`);
    }
}
// Teste da função
processarResposta("Dados processados com sucesso!");
processarResposta(true);
processarResposta(false);

// Exercício 6 - Intersection Types EstudanteTrabalhador

type Estudante = {
    nome: string;
    curso: string;
};
type Trabalhador = {
    empresa: string;
    cargo: string;
};
type EstudanteTrabalhador = Estudante & Trabalhador;
const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Carlos",
    curso: "Engenharia de Software",
    empresa: "Tech Corp",
    cargo: "Desenvolvedor Júnior"
};
console.log("Estudante Trabalhador:", estudanteTrabalhador);