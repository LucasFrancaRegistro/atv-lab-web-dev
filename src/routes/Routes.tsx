import { BrowserRouter, Link } from "react-router-dom";
import { Route, Routes } from "react-router";
import Megasena from "../components/Megasena";
import Lotofacil from "../components/Lotofacil";
import Quina from "../components/Quina";
import Menu from "../components/Menu";

function Rotas() {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path="*" element={<Erro />} />
                <Route path="/megasena" element={<Megasena />} />
                <Route path="/lotofacil" element={<Lotofacil />} />
                <Route path="/quina" element={<Quina />} />
            </Routes>
        </BrowserRouter>

    );
}

function Erro() {
    return <div>Rota inexistente</div>;
}

export default Rotas;