import { useContexto } from "../../hooks";
import "./index.css"

function Lotofacil(){
    const { lotofacil } = useContexto();

    return (
        <div className="container-loto">
            {JSON.stringify(lotofacil)}
        </div>
    )
}

export default Lotofacil;