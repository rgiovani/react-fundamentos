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
import Input from './components/form/Input';
import Contador from './components/contador/Contador';
import Mega from './components/megacena/Mega';

const app = (props) => {
    return (
        <div className="App">
            <h1>Fundamentos</h1>
            <div className="Cards">
                <Card titulo="# 11 - Mega" color="#F5E027">
                    <Mega qtdeNumero={8}></Mega>
                </Card>

                <Card titulo="# 10 - Contador" color="#C95C46">
                    <Contador passo={10} valor={100}></Contador>
                </Card>
                <Card titulo="# 09 - Input" color="#256EB0">
                    <Input></Input>
                </Card>
                <Card titulo="# 08 - Comunicação Indireta" color="#000">
                    <Super></Super>
                </Card>
                <Card titulo="# 07 - Comunicação Direta" color="#C821D3">
                    <Pai sobrenome="Freitas"></Pai>
                </Card>
                <Card titulo="# 06 - Condicional com If" color="#5DADE2">
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
        </div>
    )

}

export default app;