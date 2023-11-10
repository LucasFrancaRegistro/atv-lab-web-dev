import { useContexto } from "../../hooks";
import "./index.css"
import trevo from "../../assets/trevo-quina.png"


function Quina() {
    const { quina } = useContexto();

    return (
        <>
            {
                quina.dataApuracao ?
                    (
                        <div id="quina-bloco-principal">
                            <div>
                                <div id="quina-bloco-loteria">
                                    <img src={trevo} alt="" />
                                    <span id="quina-nome-loteria">quina-SENA</span>
                                </div>
                                <div id="quina-bloco-estimativa">
                                    <div id="quina-texto-estimativa">
                                        Estimativa de prêmio do proximo concurso. sorteio em {" "}
                                        {quina.dataProximoConcurso}:

                                    </div>
                                    <div id="quina-valor-estimativa">
                                        {
                                            quina.valorEstimadoProximoConcurso.toLocaleString("pt-br",{
                                                style: "currency",
                                                currency: "brl"
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div id="quina-bloco-direita">
                                <div id="quina-linha-bola">
                                    {
                                        quina.dezenas.map((item) => (
                                            <div id="quina-bola">
                                                {item}
                                            </div>
                                        ))
                                    }
                                </div>
                                <div id="quina-texto-acumulou">
                                    {quina.quantidadeGanhadores === 0 ? "ACUMULOU!" : `${quina.quantidadeGanhadores} GANHADORES`}
                                </div>
                                <div id="quina-data-concurso">
                                    Concurso {quina.numeroDoConcurso} - {quina.dataPorExtenso}
                                </div>
                            </div>
                        </div>
                    ) :
                    (
                        <div>
                            <h3>Carregando...</h3>
                        </div>
                    )
            }
        </>
    )
}

export default Quina;