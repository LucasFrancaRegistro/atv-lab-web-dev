import trevo from "../../assets/trevo-megasena.png";
import CarregandoComponent from "../../components/Carregando";
import PrincipalComponent from "../../components/Principal";
import { useContexto } from "../../hooks";

function Megasena() {
    const { megasena } = useContexto();

    return (
        <> 
            {megasena.dataApuracao ? (
                <PrincipalComponent logoSrc={trevo} nomeTexto={"MEGA-SENA"} loteria={megasena} />
            ) : (
                <CarregandoComponent/>
            )}
        </>
    )
}
export default Megasena;