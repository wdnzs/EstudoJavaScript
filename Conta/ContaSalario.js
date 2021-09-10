import {Conta} from "./Conta/Conta.js";

export class ContaSalario extends Conta{
    
    constructor(cliente){
        super(0, cliente, 100);
    } // Fim do método construtor

    sacar(valor){
        const taxa = 1.01;
        return this._sacar(valor, taxa);
    } // Fim do método sacar

} // Fim da classe ContaSalario