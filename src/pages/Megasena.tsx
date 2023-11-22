import Carregando from "../components/Carregando/Carregando";
import Principal from "../components/Principal";
import useContexto from "../hooks/useContexto";
 


function Megasena() {
    const { megasena } = useContexto();

    return (
        <>
            { megasena.dataApuracao ?
                    (
                        <Principal>
                            
                        </Principal>
                    ) :
                    (<Carregando />)
            }  
        </>

    )
}