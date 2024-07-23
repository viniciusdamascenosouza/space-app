import styled from "styled-components";
import GlobalStyled from "./components/GlobalStyled/styles";
import Header from "./components/Header/Header";

  const BackgroundGradient = styled.div`
    background: linear-gradient(174.61deg, #041883 4.16%, #04244F 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;
    margin: 0;
  `;

const App = () => {

  return (
      <BackgroundGradient>
        <GlobalStyled />
        <Header />
      </BackgroundGradient>
  );
};

export default App;
