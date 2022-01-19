import React from "react";
import './App.css';

import Card from "./components/layout/Card";
import Primeiro from "./components/basicos/Primeiro";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Aleatorio from "./components/basicos/Aleatorio";
import Familia from './components/basicos/Familia';
import FamiliaMembro from './components/basicos/FamiliaMembro';
import ListaAlunos from './components/repeticao/ListaAlunos';
import TabelaProdutos from './components/repeticao/TabelaProdutos';

export default () => (
    <div className="App">
        <h1>Fundamentos React</h1>
        <div className="Cards">

            <Card titulo="#07 - Tabela Produtos" color="#FF432E">
                <TabelaProdutos/>
            </Card>

            <Card titulo="#06 - Repetição" color="#FF4C65">
                <ListaAlunos/>
            </Card>

            <Card titulo="#05 - Componentes com Filhos" color="#00c8f8">
                <Familia sobrenome='Ferreira'>
                    <FamiliaMembro nome='Pedro'/>
                    <FamiliaMembro nome='Ana'/>
                    <FamiliaMembro nome='Filipa'/>
                </Familia>
            </Card>

            <Card titulo="#04 - Desafio Aleatório" color="#FA6900">
                <Aleatorio min={1} max={60} />
            </Card>

            <Card titulo="#03 - Fragmento" color="#e94c6f">
                <Fragmento />
            </Card>

            <Card titulo="#02 - ComParametro" color="#E8B71A">
                <ComParametro titulo="Situação do aluno " aluno="Pedro" nota={2} />
            </Card>

            <Card titulo="#01 - Primeiro Componente" color="#588C73">
                <Primeiro></Primeiro>
            </Card>

        </div>
    </div>
);
