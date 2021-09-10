export class Funcionario{

    constructor(nome, salario, cpf){
        this.nome = nome;
        this.salario = salario;
        this.cpf = cpf;

        this._bonificacao = 1;
        this._senha;
    } // Fim do construtor

    autenticar(senha){
        return senha == this._senha;
    } // Fim do método autenticar

    cadastrarSenha(senha){
        this._senha = senha;
    } // Fim do método cadastrarSenha
}