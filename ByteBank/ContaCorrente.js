import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDecontas = 0+1;
    agencia;
    _cliente;
    _saldo = 0;

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }

    }

    get cliente() {
        return this._cliente;
    }

    get saldo() {
        return this._saldo;
    }

    constructor(agencia,cliente){
        this.agencia = agencia;
        this.cliente = cliente;
        this.numero_da_conta = ContaCorrente.numeroDecontas;
        ContaCorrente.numeroDecontas += + 1
    }
    
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }

    }

    depositar(valor) {
        if(valor <= 0) {
            return;
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}
