import React, { useState } from 'react'
import Sub from './Sub'

export default function Super(props) {

    const [texto, setTexto] = useState("Valor");
    const [numero, setNumero] = useState(0);

    function quandoClicar(valorGerado, texto) {
        setNumero(valorGerado);
        setTexto(texto);
    }

    return (
        <div>
            <h4>{texto}: {numero}</h4>
            <Sub onClicar={quandoClicar}>Pedro</Sub>
        </div >
    )
}