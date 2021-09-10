export class Cliente {

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf, senha){
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    } // Fim do construtor

    autenticar(){
        return true;
    } // Fim do método autenticar


} // Fim da classe Cliente