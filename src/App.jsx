
import {data} from "./data/data" //Importa os dados da faixa de IMC
import { useState } from 'react';
import ImcCalc from './components/ImcCalc';
import ImcTable from "./components/ImcTable";
import './App.css';

function App() {
// Função para calcular o IMC:
  const calcImc = (e, height, weight) => {
    /* Essa função precisa ser executada pelo componente filho, então devemos 
    passá-la como parâmetro na chamada do componente */
    e.preventDefault()

    // Verifica se os campos de peso e altura estão vázios:
    if(!weight || !height) return;

    // Converte weight e height para número decimal, substituindo vírgula por ponto:
    const weightFloat = +weight.replace(",",".");
    const heightFloat = +height.replace(",",".");

    //Utiliza os valores para calcular o IMC e fixa o resultado em 1 casa decímal:
    const imcResult = (weightFloat/(heightFloat*heightFloat)).toFixed(1);

    // Altera o estado do IMC atribuindo o valor do imcResult
    setImc(imcResult);

    //Seta a info e o infoClass para mudar a cor de apresentaçao do IMC com base na classe
    data.forEach((item) =>{
      if(imcResult >= item.min && imcResult <= item.max){
        setInfo(item.info)
        setInfoClass(item.infoClass)
      }
    })

    if(!info) return
  };

  const resetCalc = (e) =>{
    e.preventDefault()
    setImc("")
    setInfo("")
    setInfoClass("")
  }

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");

  // Se não houver IMC ele exíbe a calculadora, se houver, exíbe a tabela de informações
  return <div className='container'> {!imc ? <ImcCalc calcImc = {calcImc} /> 
  : <ImcTable 
    data={data} 
    imc={imc} 
    info={info} 
    infoClass={infoClass} 
    resetCalc={resetCalc}/> } </div>

}

export default App
