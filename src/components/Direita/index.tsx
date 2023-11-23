import React, { FC } from 'react';
import styled from 'styled-components';
import NomeLoteria from '../NomeLoteria';
import EstimativaComponent from '../Estimativa';
import ResultadoComponent from '../Resultado';
import AcumulouComponent from '../Acumolou';
import Data from '../Data';

interface DireitaComponentProps {
    loteria: {
        quantidadeGanhadores: number;
        dezenas: String[];
        numeroDoConcurso: number;
        dataPorExtenso: string;  
    };
}

const DireitaComponent: FC<DireitaComponentProps> = ({ loteria}) => (
    <Direita>
        <ResultadoComponent loteria={loteria}/>
        <AcumulouComponent loteria={loteria}/>
        <Data loteria={loteria} />            
    </Direita>
);
  
const Direita = styled.div`
    margin-left: 50px;
`;

export default DireitaComponent;