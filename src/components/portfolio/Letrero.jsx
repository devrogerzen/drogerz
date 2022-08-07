import React from "react";
import styled from "styled-components";
import { Parpadea } from "../../helpers/Parpadea";

const LetreroContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  max-width: 70vh;
  overflow: hidden;
  color: #fff;
  justify-content: center;
  font-family: Gameplay;
  letter-spacing: 3px;
  font-weight: 100;
  text-transform: uppercase;
  user-select: none;
  z-index: -900;
`;
const LetreroText = styled.h1`
  font-size: 2.5rem;
  margin-left: 5vw;
  vertical-align: center;
  margin-bottom: 10vh;

  @media (max-width: 968px) {
    font-size: 1.5rem;
  }
`;
/* const LogoDrogerZ = styled.img`
width: 200px;
margin-left: 5vw;

` */
const Letrero = () => {
  return (
    <LetreroContainer>
      <LetreroText>
        Roger <br /> Jimenez <br /> Programador <Parpadea>|</Parpadea>
      </LetreroText>
    </LetreroContainer>
  );
};

export default Letrero;
