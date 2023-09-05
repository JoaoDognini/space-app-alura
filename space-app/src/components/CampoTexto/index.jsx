import { styled } from "styled-components"
import search from "./search.png"

const ContainerEstilizado = styled.div`
    position: relative;
    display: inline-block;
`;

const CampoTextoEstilizado = styled.input`
    height: 3.5rem;
    padding: 0.75rem 1rem;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    width: 35.4rem;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.25rem;
    `

const IconeLupa = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 2.4rem;
    height: 2.4rem;
    `

export default function CampoTexto(props) {
    return (
        <ContainerEstilizado>
            <CampoTextoEstilizado {...props} placeholder="O que você procura?"/>
            <IconeLupa src={search} alt="Ícone de lupa" />
        </ContainerEstilizado>
    )
}
