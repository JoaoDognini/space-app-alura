import { styled } from "styled-components";
import Titulo from "../../Titulo";
import Imagem from "../Imagem";
import fotosPopulares from './fotos-populares.json'

const ColunaFotos = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 212px;
  gap: 1.5rem;
`

const Botao = styled.button`
  padding: 0.75rem 1.25rem;
  width: 100%;
  background: transparent;
  border-radius: 10px;
  border: 2px solid #C98CF1;
  font-size: 20px;
  color: #FFF;
  margin-top: 1.5rem;
  cursor: pointer;
`

export default function Populares() {
  return (
    <section>
      <Titulo $alinhamento="center">Populares</Titulo>
      <ColunaFotos>
        {fotosPopulares.map(foto => <Imagem foto={foto} key={foto.id} rodape={false} />)}
      </ColunaFotos>
      <Botao>Ver mais</Botao>
    </section>
  )
}
