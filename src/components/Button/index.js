import React from "react";

const Button = ({ onClick }) => {
    return(
        <button onClick={onClick} className="botao_horario"> <img className="calendario" src="./images/calendario.svg" alt="botão com horário de funcionamento"></img>Horário de funcionamento</button>
    )
}

export default Button;