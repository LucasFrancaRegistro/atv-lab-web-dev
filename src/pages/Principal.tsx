import { useContext } from "react"
import { Contexto } from "../contexts/contexto"

export default function Principal() {
    const {megasena} = useContext(Contexto);

    return (
        <div>
            {JSON.stringify(megasena)}
        </div>
    )
}