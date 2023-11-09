import { useContexto } from "../../hooks";
import "./index.css"
import trevo from "../../assets/trevo-megasena.png"


function Megasena() {
    const { megasena } = useContexto();

    return (
        <>
            {
                megasena.dataApuracao ?
                    (
                        <div id="mega-bloco-principal">
                            <div>
                                <div id="mega-bloco-loteria">
                                    <img src={trevo} alt="" />
                                    <span id="mega-nome-loteria">MEGA-SENA</span>
                                </div>
                                <div id="mega-bloco-estimativa">
                                    <div id="mega-texto-estimativa">
                                        Estimativa de prêmio do proximo concurso. sorteio em {" "}
                                        {megasena.dataProximoConcurso}:

                                    </div>
                                    <div id="mega-valor-estimativa">
                                        {
                                            megasena.valorEstimadoProximoConcurso.toLocaleString("pt-br",{
                                                style: "currency",
                                                currency: "brl"
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div id="mega-bloco-direita">
                                <div id="mega-linha-bola">
                                    {
                                        megasena.dezenas.map((item) => (
                                            <div id="mega-bola">
                                                {item}
                                            </div>
                                        ))
                                    }
                                </div>
                                <div id="mega-texto-acumulou">
                                    {megasena.quantidadeGanhadores === 0 ? "ACUMULOU!" : `${megasena.quantidadeGanhadores} GANHADORES`}
                                </div>
                                <div id="mega-data-concurso">
                                    Concurso {megasena.numeroDoConcurso} - {megasena.dataPorExtenso}
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

export default Megasena;