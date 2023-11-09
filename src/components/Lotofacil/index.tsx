import { useContexto } from "../../hooks";
import "./index.css"
import trevo from "../../assets/trevo-lotofacil.png"

function Lotofacil() {
    const { lotofacil } = useContexto();

    const linha1:string[] = [], linha2:string[] = [],linha3:string[] = []; 
    if( lotofacil.dataApuracao ){
        for(let i = 0; i < 5; i++){
            linha1.push(lotofacil.dezenas[i]);
        }
        for(let i = 5; i < 10; i++){
            linha2.push(lotofacil.dezenas[i]);
        }
        for(let i = 10; i < 15; i++){
            linha3.push(lotofacil.dezenas[i]);
        }
    }

    return (
        <>
            {
                lotofacil.dataApuracao ?
                    (
                        <div id="loto-bloco-principal">
                            <div>
                                <div id="loto-bloco-loteria">
                                    <img src={trevo} alt="" />
                                    <span id="loto-nome-loteria">LOTOFÁCIL</span>
                                </div>
                                <div id="loto-bloco-estimativa">
                                    <div id="loto-texto-estimativa">
                                        Estimativa de prêmio do proximo concurso. sorteio em {" "}
                                        {lotofacil.dataProximoConcurso}:

                                    </div>
                                    <div id="loto-valor-estimativa">
                                        {
                                            lotofacil.valorEstimadoProximoConcurso.toLocaleString("pt-br", {
                                                style: "currency",
                                                currency: "brl"
                                            })
                                        }
                                    </div>
                                </div>
                                </div>
                                <div id="loto-bloco-direita">
                                    <div id="loto-linha">
                                    {
                                        linha1.map((item) => (
                                            <div id="loto-bola">
                                                {item}
                                            </div> 
                                        ))
                                    }
                                    </div>
                                    <div id="loto-linha">
                                    {
                                        linha2.map((item) => (
                                            <div id="loto-bola">
                                                {item}
                                            </div> 
                                        ))
                                    }
                                    </div>
                                    <div id="loto-linha2">
                                    {
                                        linha3.map((item) => (
                                            <div id="loto-bola">
                                                {item}
                                            </div>
                                        ))
                                    }
                                    </div>
                                    <div id="loto-texto-ganhadores">
                                        {`${lotofacil.quantidadeGanhadores} GANHADORES`}
                                    </div>
                                    <div id="loto-data-concurso">
                                        Concurso {lotofacil.numeroDoConcurso} - {lotofacil.dataPorExtenso}
                                    </div>
                                </div>
                            </div>
                    ) :
                    (<div>
                        <h3>Carregando...</h3>
                    </div>)
            }
        </>

    )
}

export default Lotofacil;