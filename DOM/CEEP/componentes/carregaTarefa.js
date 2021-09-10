import { criaData } from "./criaData"
import {removeDatasRepetidas} from "./service/data.js"

export const carregaTarefa = () => {
    
    const lista = document.querySelector('[data-list]')

    const tarefasCadastradas = JSON.parse(localStorage.getItem('tarefas')) || []

    lista.innerHTML = " "
    const dataUnicas = removeDatasRepetidas(tarefasCadastradas)

    tarefasCadastradas.forEach((dia) => {
        lista.appendChild(criaData(dia))
        
    })
}