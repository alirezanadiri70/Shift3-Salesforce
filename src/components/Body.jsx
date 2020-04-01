import React from "react";
import styled from "styled-components";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { SignUpForm } from "./SignUpForm";
import einstein from "./einstein.png";

export const Body = () => {
  return (
    <Wrapper>
      <ContentHolder>
        <FormHolder>
          <SignUpForm />
        </FormHolder>
        <Title>
          <span className="quotation">"</span> How to Get Users and Admins to Love Salesforce Again. <span className="quotation">"</span></Title>
        <Image />
      </ContentHolder>
      <Message2>
        In this three-part blog series, we discuss a few simple tricks to help
        you increase the adoption and satisfaction for admins and users alike.
        This series will walk you through simplifying, optimizing and then
        maximizing your Lightning Apps experience. Our goal is to help admins
        and users love Salesforce once again!
      </Message2>
      <div className="card">
        <h1 className=" title">Shift3 Technologies helps<br/> companies of all sizes manage<br/> Salesforce.</h1>
        <p></p>
        
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100wh;
  height: 70vh;
`;

const ContentHolder = styled.div`
  display: flex;
`;
const FormHolder = styled.div`
  display: flex;
  flex-direction: column;
  width: 450px;
  height: 420px;
  background-color: #fff;
  padding:10px;
  border-radius: 8px;
  position:relative;
  left:130px;
  top:20px;
`;

const Title = styled.p`
  font-size: 2.5rem;
  color: #fff;
  // text-align: center;
  position:relative;
  left:250px;
  top:10px;
  z-index:20;
  font-family: 'Francois One', sans-serif;
`;

const Image = styled.div`
  background-image: url(${einstein});
  background-repeat: no-repeat;
  height: 400px;
  width: 850px;
  opacity: 1;
  position: relative;
  top:119px;
  left:-100px;
`;

const Message2 = styled.p`
  text-align: center;
  font-size: 1.4rem;
  letter-spacing: 1px;
  width: 83%;
  line-height: 1.4;
  font-weight: 400;
  font-family: "Lato", serif;
  position:relative;
  top: 110px;  
  font-family: 'Francois One', sans-serif;
`;
