import './Button.css'
import React from 'react'

const Button = ({id, text, action /*Action serve para chamarmos funções nos botões */}) => {
  // Recebe uma função e tem acesso ao evento dela.
  // Basicamente criamos uma função que executa outra função que passamos para o componente, no caso, será clearForm do ImcCalc.jsx

 /*No componente Button, passamos a função clearForm como uma propriedade chamada action.
  Quando o botão "Limpar" é clicado, ele chama handleAction, que por sua vez chama action(e) (neste caso, clearForm). */
  const handleAction = (e) => {
    action (e);
  }

  return (
    <button id={id} onClick={handleAction}>
      {text}
    </button>
  )
}

export default Button