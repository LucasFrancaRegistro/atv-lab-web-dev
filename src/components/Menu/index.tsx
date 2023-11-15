import { Link } from "react-router-dom";
import "./index.css"


function Menu() {
    return (
    <div>
    <Link id="megasena" to="megasena">Megasena</Link>
    <Link id="lotofacil" to="lotofacil">Lotofácil</Link>
    <Link id="quina" to="quina">Quina</Link>
    </div>
    );
}

export default Menu;