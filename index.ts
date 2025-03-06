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

