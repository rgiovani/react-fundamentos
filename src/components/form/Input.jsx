import React, { useState } from 'react';

export default function Input(props) {
    const [nome, setNome] = useState("Ronaldo");


    return (
        <>
            <h3>{nome}</h3>
            {/* Controller component: Em resumo, 
                o estado da aplicação muda e a UI atualiza, é sempre nessa direção.
                Ou seja, a interface gráfica só atualiza, quando o estado atualiza.
            */}
            <input type="text" value={nome}
                onChange={event => setNome(event.target.value)}
            />

        </>
    )
}