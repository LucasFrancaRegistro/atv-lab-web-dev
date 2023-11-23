import styled from "styled-components";



const CarregandoDiv = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
`
function Carregando() {
    return (
        <CarregandoDiv>
            <h3>Carregando...</h3>
        </CarregandoDiv>
    )
}

export default Carregando;