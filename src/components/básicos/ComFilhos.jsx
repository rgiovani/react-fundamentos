import React from 'react';

export default function ComFilhos(props) {
    return (
        <div>
            <h2>Os Filhos:</h2>
            <div>
                {props.children}
            </div>
        </div>
    )
}