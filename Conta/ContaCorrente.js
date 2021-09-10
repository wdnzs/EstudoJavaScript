import { Conta } from "./Conta/Conta.js";

export class ContaCorrente  extends Conta{
    static numeroDeContas = 0;
    
    constructor(cliente, agencia){
        super(0, cliente, agencia);
        ContaCorrente.numeroDeContas += 1;
    }

    //sobreescrevendo o comportamento de sacar
    sacar(valor){
        let taxa = 1.1;
        return super._sacar(valor_taxa);
        
    } // Fim do método sacar

} // Fim da classe ContaCorrente