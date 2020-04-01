import React from 'react'
import styled from "styled-components";
import { InstagramOutlined, FacebookOutlined, LinkedinOutlined,TwitterOutlined } from '@ant-design/icons';


export const Navbar = () => {
  return (
   <Wrapper span={12}>
     <p className="Logo">Shift<span className="Three">3</span> Technologies</p>
     <SocialMedia>
        <InstagramOutlined style={{fontSize:25,color:"#fdcd04",paddingBottom:5}}/>
        <FacebookOutlined style={{fontSize:25,color:"#fdcd04",paddingBottom:5}}/>
        <LinkedinOutlined style={{fontSize:25,color:"#fdcd04",paddingBottom:5}}/>
        <TwitterOutlined style={{fontSize:25,color:"#fdcd04",paddingBottom:5}}/>
     </SocialMedia>
   </Wrapper>
  )
}
const Wrapper = styled.div`
  display: flex;
  justify-content:space-between;

`;
const SocialMedia = styled.div`
  display:flex;
  flex-direction:column;
  height:40px;
  position:relative;
  right:20px;
  top:10px;
`;

