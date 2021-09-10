// Classe abstrata
export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta){
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois é uma classe abstrata.");
        }
        this._saldo = saldoInicial;
        this._cliente = cliente;
        this._agencia = agencia;

    } // Fim do construtor

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        } 
    }

    get cliente(){
        return this._cliente;
    }

    get saldo(){
        return this._saldo;
    }

    // Método abstrato
    sacar(valor){
        throw new Error("O método Sacar da Conta é abstrato.");
    } // Fim do método sacar

    _sacar(valor, taxa){
        const valorSacado = taxa * valor;
        if(this._saldo >= valorSacado){
            this._saldo -= valorSacado;
            return valorSacado;
        }
        return 0;
    } // Fim do método privado

    depositar(valor){
        if(valor <= 0){
            return;
        }
       this._saldo += valor;
   } // Fim do método depositar

    transferir(valor, conta){
        if(this._tipo == "salario"){
            return;
        }
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    } // Fim do método transferir

}