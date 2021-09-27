import React from 'react';

//Componente com estrutura arrow function
const comParametro = (props) => {
    //props é uma constante(somente leitura)
    //props.titulo = "";
    return (
        <>
            <h3>{props.titulo}</h3>
            <p>{props.subtitulo}</p>
        </>
    )
}

export default comParametro;