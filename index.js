// Importa as classes Cliente e ContaCorrente para o arquivo index.js
import { Cliente } from "./Cliente.js";
import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Rodrigo", 10000, 123456789);
diretor.cadastrarSenha("123456789");
const gerente = new Gerente("Ricardo", 5000, 123456789);
gerente.cadastrarSenha("123456");

const cliente = new Cliente("Lais", 123456789, "123");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456789");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123456");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123");

console.log("O cliente está logado? ", clienteEstaLogado);
console.log("O diretor está logado? ", diretorEstaLogado);
console.log("O gerente está logado? ", gerenteEstaLogado);