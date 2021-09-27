import React, { useState } from 'react'

export default function Mega(props) {
    const [numeros, setNumeros] = useState(Array(props.qtdeNumero).fill(0));

    function gerarNumerosNaoContido(array) {
        const max = 60;
        const min = 1;
        const novoNumero = parseInt(Math.random() * (max - min) + min);

        return array.includes(novoNumero) ? gerarNumerosNaoContido(array) : novoNumero;
    }

    function gerarNumeros() {
        const novoArray = Array(props.qtdeNumero)
            .fill(0) //preenche com 0
            .reduce((arrayAtual, element) => {
                const novoNumero = gerarNumerosNaoContido(arrayAtual)
                //console.log(arrayAtual, element, novoNumero)
                return [...arrayAtual, novoNumero] //add um numero aleatorio pra cada pos do array

            }, [])
            .sort((a, b) => a - b) //ordena os numero no array

        setNumeros(novoArray)
    }

    return (
        <>
            <h3>Mega</h3>
            <h4>{numeros.join(' ')}</h4>
            <button onClick={gerarNumeros}>Gerar Número</button>
        </>
    )
}