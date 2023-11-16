import { Link } from "react-router-dom";
import "./index.css"
import { useState } from "react";

function Menu() {
    const [activeLink, setActiveLink] = useState<string | null>(null);

    const handleLinkClick = (linkId: string) => {
        setActiveLink(linkId);
    }
    return (
        <div>
            <Link to="megasena" className={activeLink ==="megasena"? "ativo":"megasena"} onClick={() => handleLinkClick("megasena")}>Megasena</Link>
            <Link to="lotofacil" className={activeLink ==="lotofacil"? "ativo":"lotofacil"} onClick={() => handleLinkClick("lotofacil")}>Lotofácil</Link>
            <Link to="quina" className={activeLink ==="quina"? "ativo":"quina"} onClick={() => handleLinkClick("quina")}>Quina</Link>
        </div>
    );
}

export default Menu;