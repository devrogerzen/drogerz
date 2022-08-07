import React from "react";
import styled from "styled-components";
import NightLife from "../../images/nightlife.gif";

const BgHeader = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
  justify-content: center;
  background-color: #000;
  position: absolute;
  z-index: -1000;

`
const BgImg = styled.img`
opacity: 0.6;
`

const BgMain = () => {
  return (
    <BgHeader>
      <BgImg src={NightLife} alt="Bg Programmer in House" />
    </BgHeader>
  );
};

export default BgMain;
