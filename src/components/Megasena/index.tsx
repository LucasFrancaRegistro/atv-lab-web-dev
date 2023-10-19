import { useContexto } from "../../hooks";
import "./index.css"


function Megasena(){
    const { megasena } = useContexto();

    return (
        <div className="container-mega">
            {JSON.stringify(megasena)}
        </div>
    )
}

export default Megasena;