import React from "react";
import styled from "styled-components";

const Home = ({}) => {
  return (
    <Container>
      <Title>This is a Recipe App</Title>
      <SubTitle>You can record your recipes here</SubTitle>
      <Text>
        All your recipes are stored in your browsers local storage and any changes you
        make will remain saved as long as you continue to access this page from the same
        browser.
      </Text>
      <Text>Built by Deniro JR</Text>
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  text-align: center;
  width: 750px;
  vertical-align: top;
`;

const Title = styled.div`
  padding-top: 100px;
  font-weight: 600;
  font-size: 48px;
`;

const SubTitle = styled.div`
  padding-top: 30px;
  font-weight: 500;
  font-size: 36px;
`;

const Text = styled.div`
  padding-top: 30px;
  font-size: 24px;
`;

export { Home };
