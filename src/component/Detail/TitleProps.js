import React from "react";
import styled from "styled-components";

const TitleProps = ({ text }) => {
  return (
    <Container>
      <Line />
      <Text>{text}</Text>
    </Container>
  );
};

export default TitleProps;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Line = styled.div`
  width: 400px;
  background: rgba(0, 0, 0, 0.7);
  height: 1.5px;
  @media screen and (max-width: 425px) {
    width: 80%;
  }
`;

const Text = styled.div`
  position: absolute;
  background: white;
  padding: 0px 15px;
  text-transform: capitalize;
  font-weight: 700;
  font-size: 23px;
`;
