import React from 'react';

//Componente com estrutura arrow function
const comParametro = (props) => {
    return (
        <>
            <h3>{props.titulo}</h3>
            <p>{props.subtitulo}</p>
        </>
    )
}

export default comParametro;