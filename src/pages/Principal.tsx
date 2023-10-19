import { useContext } from "react"
import { Contexto } from "../contexts/contexto"
import Megasena from "../components/Megasena";
import Lotofacil from "../components/Lotofacil";

export default function Principal() {
    const {megasena} = useContext(Contexto);
    const {lotofacil} = useContext(Contexto);

    return (
        <div>
        <div>
            <Megasena />
        </div>
        <br />
        <div>
            <Lotofacil />
        </div>
        </div>
    )
}