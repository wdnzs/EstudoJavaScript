/*
Ser autenticável significa ter o método autenticar.
*/

export class SistemaAutenticacao{

    static login(autenticavel, senha){
        if(SistemaAutenticacao.eh){
        return autenticavel.autenticar(senha);
        }
        return false;
    } // Fim do método login
    
    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    } // Fim do método ehAutenticavel
} // Fim da classe SistemaAutenticacao