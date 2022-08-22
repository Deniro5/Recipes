import React from "react";
import { Sidebar } from "./components/Sidebar";
import { Router } from "./components/Router";

import styled from "styled-components";

const App = () => {
  return (
    <MainContainer>
      <Sidebar />
      <ContentContainer>
        <Router />
      </ContentContainer>
    </MainContainer>
  );
};

const ContentContainer = styled.div`
  margin-left: 300px;
  min-height: 100vh;
  width: calc(100% - 300px);
  background: blue;
  vertical-align: top;
`;

const MainContainer = styled.div`
  vertical-align: top;
`;

export default App;
