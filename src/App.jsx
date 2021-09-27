import './App.css';
import React from 'react';

import Card from './components/layout/Card';
import Primeiro from './components/básicos/Primeiro';
import ComParametro from './components/básicos/ComParametro';
import ComFilhos from './components/básicos/ComFilhos';
import Repeticao from './components/básicos/Repeticao';
import Condicional from './components/básicos/Condicional';
import CondicionalComIf from './components/básicos/CondicionalComIf';
import Pai from './components/comunicacao/direta/Pai';
import Super from './components/comunicacao/indireta/Super';

const app = (props) => {
    return (
        <div className="App">
            <Card titulo="# 08 - Comunicação Indireta" color="#000 ">
                <Super></Super>
            </Card>
            <Card titulo="# 07 - Comunicação Direta" color="#C821D3 ">
                <Pai sobrenome="Freitas"></Pai>
            </Card>
            <Card titulo="# 06 - Condicional com If" color="#5DADE2 ">
                <CondicionalComIf numero={11}></CondicionalComIf>
            </Card>
            <Card titulo="# 05 - Condicional" color="#138D75">
                <Condicional numero={10}></Condicional>
            </Card>
            <Card titulo="# 04 - Repetição" color="#F39C12">
                <Repeticao />
            </Card>
            <Card titulo="# 03 - Componente com filhos" color="#34495E">
                <ComFilhos>
                    <ul>
                        <li>Ana</li>
                        <li>Bia</li>
                        <li>Carlos</li>
                        <li>Daniel</li>
                    </ul>
                </ComFilhos>
            </Card>

            <Card titulo="# 02 - Componente com parâmetro" color="#E74C3C">
                <ComParametro titulo="Esse é o titulo" subtitulo="esse é o subtitulo" />
            </Card>

            <Card titulo="# 01 - Primeiro Componente" color="#7D3C98 ">
                <Primeiro />
            </Card>
        </div>
    )

}

export default app;