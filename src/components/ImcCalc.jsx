import { useState } from "react"
import "./ImcCalc.css"
import Button from "./Button.jsx"
import React from 'react'

const imcCalc = ({calcImc}) => {
    // Iniciando o useState de peso e altura
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    //Função para limpar inputs:
    const clearForm = (e) => {
        e.preventDefault()
        setWeight("")
        setHeight("")
    }

    // Função para validar os digítos inseridos
    // Aceitar apenas números de 0 a 9 e vírgula e o que for diferente ela troca por vázio.
    const validDigits = (text) =>{
        return text.replace(/[^0-9,]/g, "")
    }

    // Essa função serve para gerenciar melhor o onChange do input
    const handleHeightChange = (e) => {
        const updatedValue = validDigits(e.target.value)
        setHeight(updatedValue)
    }
    const handleWeightChange = (e) => {
        const updatedValue = validDigits(e.target.value)
        setWeight(updatedValue)
    }

  return (
    <div id="calc-container">
        <h2>Calculadora de IMC</h2>
        <form  id="imc-form">
            <div className="form-inputs">
                <div className="form-control">
                    <label htmlFor="height">Altura:</label>
                    <input 
                    type="text" 
                    name="height" 
                    id="height" 
                    placeholder="Exemplo 1,75"
                    // Atribui o valor do input de altura ao useState de altura 
                    onChange={(e) => handleHeightChange(e)}
                    // Atrela o valor ao state para ser um controlled input
                    value={height}
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="weight">Peso:</label>
                    <input 
                    type="text" 
                    name="weight" 
                    id="weight" 
                    placeholder="Exemplo 70.5"
                    // Atribui o valor do input de peso ao useState de peso
                    onChange={(e) => handleWeightChange(e)} 
                    // Atrela o valor ao state para ser um controlled input
                    value={weight}/>
                </div>
            </div>
            <div className="action-control">
                <Button id="calc-btn" text="Calcular" /*Chama a função para calcularI IMC: */ action={(e) => calcImc(e, height, weight)}/>
                <Button id="clear-btn" text="Limpar" /*Chama a função para limpar formulario: */action={clearForm}/>
            </div>
        </form>
        
    </div>
  )
}

export default imcCalc