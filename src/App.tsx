import styled from "styled-components";

  const BackgroundGradient = styled.div`
    background: linear-gradient(174.61deg, #041883 4.16%, #04244F 48%, #154580 96.76%);
    width: 100%;
    min-height: 100vh;
    margin: 0;
  `;

const App = () => {

  return (
      <BackgroundGradient>
        <h1>SpaceApp</h1>
      </BackgroundGradient>
  );
};

export default App;
