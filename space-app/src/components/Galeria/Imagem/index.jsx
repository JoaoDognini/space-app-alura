import { styled } from 'styled-components';
import BotaoIcone from '../../BotaoIcone'
import expandir from '/icones/expandir.png';
import favorito from '/icones/favorito.png';

const Figure = styled.figure`
    width: ${props => props.$expandida ? '90%' : '460px'};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 12px;
        h3 {
            font-family: 'GandhiSansBold';
            font-size: 20px;
            font-weight: 700;
        }
        h4 {
            font-size: 16px;
            font-weight: 400;
            flex-grow: 1;
        }
        h3, h4 {
            margin: 0;
        }
    }
`

const Rodape = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export default function Imagem({ foto }) {
    return (
        <Figure>
            <img src={foto.path} alt={foto.titulo} />
            <figcaption>
                <h3>{foto.titulo}</h3>
                <Rodape>
                    <h4>{foto.fonte}</h4>
                    <BotaoIcone>
                        <img src={favorito} alt="Ícone favorito" />
                    </BotaoIcone>
                    <BotaoIcone>
                        <img src={expandir} alt="Ícone expandir" />
                    </BotaoIcone>
                </Rodape>
            </figcaption>
        </Figure>
    )
}
