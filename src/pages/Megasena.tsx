import Carregando from "../components/Carregando/Carregando";
import BlocoPrincipal from "../components/Principal";
import useContexto from "../hooks/useContexto";
 


function Megasena() {
    const { megasena } = useContexto();

    return (
        <>
            { megasena.dataApuracao ?
                    (
                        <BlocoPrincipal>
                            
                        </BlocoPrincipal>
                    ) :
                    (<Carregando />)
            }  
        </>

    )
}