import { useContext } from "react"
import { Contexto } from "../contexts/contexto"
import TituloMega from "../components/tituloMega";

export default function Principal() {
    const {megasena} = useContext(Contexto);
    const {lotofacil} = useContext(Contexto);

    return (
        <div>
            {/* <TituloMega variable={megasena} /> */}
        <div>
            {JSON.stringify(megasena)}
        </div>
        <br />
        <div>
            {JSON.stringify(lotofacil)}
        </div>
        </div>
    )
}