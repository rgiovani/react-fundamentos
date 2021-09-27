import React from 'react'

export default function Botoes(props) {
    return (
        <div>
            <button onClick={props.onIncrementar}>+</button>
            <button onClick={props.onDecrementar}>-</button>
        </div>
    )
}