import { useContext } from "react"
import { Contexto } from "../contexts/contexto"
import Megasena from "../components/Megasena";
import Lotofacil from "../components/Lotofacil";
import Quina from "../components/Quina";

export default function Principal() {
    const {megasena} = useContext(Contexto);
    const {lotofacil} = useContext(Contexto);
    const {quina} = useContext(Contexto);

    return (
        <div>
        <div id="bloco-principal">
            <Megasena />
            <Lotofacil />
            <Quina />
        </div>
        </div>
    )
}