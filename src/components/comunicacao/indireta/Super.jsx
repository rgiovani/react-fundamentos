import React from 'react'
import Sub from './Sub'

export default function Super(props) {

    function quandoClicar(valorGerado, texto) {
        console.log(`Ação: ${valorGerado}, ${texto}`)
    }

    return (
        <div>
            <h4>Valor</h4>
            <Sub onClicar={quandoClicar}>Pedro</Sub>
        </div>
    )
}