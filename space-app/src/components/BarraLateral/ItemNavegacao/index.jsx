import { styled } from "styled-components";

const ItemListaEstilizado = styled.li`
    font-size: 1.5rem;
    line-height: 1.8rem;
    margin-bottom: 1.8rem;
    color: ${props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
    font-family: ${props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular'};
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 1.3rem;
`

const ItemNavegacao = ({ children, iconeAtivo, iconeInativo, ativo = false }) => {
    return (
        <ItemListaEstilizado $ativo={ativo}>
            <img src={ativo ? iconeAtivo : iconeInativo} alt="Ícone" />
            {children}
        </ItemListaEstilizado>
    )
}

export default ItemNavegacao