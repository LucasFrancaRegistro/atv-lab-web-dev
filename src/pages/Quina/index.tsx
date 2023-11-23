import trevo from "../../assets/trevo-quina.png";
import CarregandoComponent from "../../components/Carregando";
import PrincipalComponent from "../../components/Principal";
import { useContexto } from "../../hooks";

function Quina() {
    const { quina } = useContexto();

    return (
        <>
            {quina.dataApuracao ? (
                <PrincipalComponent logoSrc={trevo} nomeTexto={"QUINA"} loteria={quina} />
            ) : (
                <CarregandoComponent/>
            )}
        </>
    )
}
export default Quina;