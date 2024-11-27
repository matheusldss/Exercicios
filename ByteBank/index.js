import {Cliente} from "./Cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Matheus", 23683228075);

const cliente2 = new Cliente("Ana",32843958434);


const contaCorrenteMatheus = new ContaCorrente(1001,cliente1);
        
const contaCorrenteAna = new ContaCorrente(1002,cliente2);
        

contaCorrenteMatheus.depositar(500);
let valor = 200;
contaCorrenteMatheus.transferir(valor, contaCorrenteAna)

console.log(contaCorrenteMatheus);

console.log("");
console.log("valor da transferencia:", valor);
console.log("");



console.log(contaCorrenteAna)


 
