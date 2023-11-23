import trevo from "../../assets/trevo-timemania.png";
import CarregandoComponent from "../../components/Carregando";
import PrincipalComponent from "../../components/Principal";
import { useContexto } from "../../hooks";


function Timemania() {
    const { timemania } = useContexto();

    return (
        <> 
            {timemania.dataApuracao ? (
                <PrincipalComponent logoSrc={trevo} nomeTexto={"TIMEMANIA"} loteria={timemania} />
            ) : (
                <CarregandoComponent/>
            )}
        </>
    )
}
export default Timemania;