import { styled } from "styled-components"
import EstilosGlobais from "./components/EstilosGlobais";
import Cabecalho from "./components/Cabecalho";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import fotoBanner from "./assets/banner.png"
import Galeria from "./components/Galeria";
import fotos from './fotos.json';
import { useState } from "react";
import ModalZoom from "./components/ModalZoom";

const FundoGradiente = styled.div`
        background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
        width: 100%;
        min-height: 100vh;
      `;

const AppContainer = styled.div`
        width: 1440px;
        margin: 0 auto;
        max-width: 100%;
      `

const MainContainer = styled.main`
      display: flex;
      gap: 1.5rem;
      `

const ConteudoGaleria = styled.section`
      display: flex;
      flex-direction: column;
      flex-grow: 1;
      `
function App() {

  const [fotosGaleria, setFotosGaleria] = useState(fotos)
  const [fotoSelecionada, setFotoSelecionada] = useState(null)

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) setFotoSelecionada({ ...fotoSelecionada, favorita: !fotoSelecionada.favorita });

    setFotosGaleria(fotosGaleria.map(fotoGaleria => {
      return {
        ...fotoGaleria,
        favorita: fotoGaleria.id === foto.id ? !foto.favorita : fotoGaleria.favorita
      }
    }))
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />
      <AppContainer>
        <Cabecalho />
        <MainContainer>
          <BarraLateral />
          <ConteudoGaleria>
            <Banner backgroundImage={fotoBanner} texto='A galeria mais completa de fotos do espaço!' />
            <Galeria
              fotos={fotosGaleria}
              aoSelecionarFoto={foto => setFotoSelecionada(foto)}
              aoAlternarFavorito={aoAlternarFavorito}
            />
          </ConteudoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}
      />
    </FundoGradiente>
  )
}

export default App
