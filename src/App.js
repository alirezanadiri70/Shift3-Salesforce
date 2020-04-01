import React from 'react';
import {Navbar} from "./components/Navbar"
import {Body} from "./components/Body"
import styled from "styled-components"
import "./index.css"


function App() {
  return (
    <Wrapper>
      <Navbar/>
      <Body/>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  background: linear-gradient(35deg, #64B6AC, #3C6B7C 100%);
  height: 75vh;
  width:100wh;
  box-shadow: 3px 3px 10px 3px #26444A;
  border-bottom: 3px solid #FDCD04;
  
`;