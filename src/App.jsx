import './App.css';
import React from 'react';

import Card from './components/layout/Card';
import Primeiro from './components/básicos/Primeiro';
import ComParametro from './components/básicos/ComParametro';
import ComFilhos from './components/básicos/ComFilhos';
import Repeticao from './components/básicos/Repeticao';
import Condicional from './components/básicos/Condicional';
import CondicionalComIf from './components/básicos/CondicionalComIf';

const app = (props) => {
    return (
        <div className="App">
            <Card titulo="# 06 - Condicional com If">
                <CondicionalComIf numero={11}></CondicionalComIf>
            </Card>
            <Card titulo="# 05 - Condicional">
                <Condicional numero={10}></Condicional>
            </Card>
            <Card titulo="# 04 - Repetição">
                <Repeticao />
            </Card>
            <Card titulo="# 03 - Componente com filhos">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card titulo="# 02 - Componente com parâmetro">
                <ComParametro titulo="Esse é o titulo" subtitulo="esse é o subtitulo" />
            </Card>

            <Card titulo="# 01 - Primeiro Componente">
                <Primeiro />
            </Card>
        </div>
    )

}

export default app;