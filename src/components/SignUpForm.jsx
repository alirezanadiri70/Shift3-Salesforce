import React from "react";
import styled from "styled-components";
import { Form, Input} from "antd";

export const SignUpForm = () => {
  return(
   <FormHolder>
     <Title>Get Your Copy</Title>
     <NameInput>
       <Form.Item 
        style={{fontSize:"1rem",fontWeight:700}}
        label="First Name"
        rules={[
          {
            required:true,
            message: "Please right your first name",
          },
        ]}
       >
          <Input 
            style={{
              width: 140,
              height:30,
              marginTop:7,
              paddingBottom: 7, 
              marginRight: 20,
              borderRadius:5,
              border: "1px solid #000 ",
              fontSize:"1rem",
            }}
          />
       </Form.Item>
       <Form.Item
        label="Last Name"
        style={{fontSize:"1rem",fontWeight:700}}
        >
          <Input  
            style={{
              width: 140,
              height:30,
              marginTop:7,
              paddingBottom: 7,
              borderRadius:5,
              border: "1px solid #000 ",
              fontSize:"1rem"
            }}
          />
       </Form.Item>
     </NameInput>
     <Form.Item 
     label="Company"
     style={{fontSize:"1rem",fontWeight:700}}
     >
       <Input 
        style={{
          width: 300,
          height:30,
          marginTop:7,
          paddingBottom:7,
          borderRadius: 5,
          border: "1px solid #000",
          fontSize:"1rem"
        }}
        />
     </Form.Item>
     <Form.Item 
     label="Email"
     style={{fontSize:"1rem",fontWeight:700}}
     >
       <Input 
        style={{
          width: 300,
          height:30,
          marginTop:7,
          paddingBottom: 7,
          borderRadius:5,
          border: "1px solid #000",
          fontSize:"1rem"
        }}
        />
     </Form.Item>
     <Button>
       Submit
     </Button>
  </FormHolder>
  );
};

const FormHolder = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 350px;
  padding:10px;
`;

const Title = styled.span`
  font-size: 1.4rem;
  font-weight: 600;
  padding-top:7px;
  letter-spacing:1px;
`;

const NameInput = styled.div`
  display:flex;
`;

const Button = styled.div`
background: linear-gradient(35deg, #64B6AC, #3C6B7C 100%);
  color:#fff;
  width:300px;
  height:30px;
  padding:7px;
  display:flex;
  justify-content:center;
  align-items:center;
  position:relative;
  top: 20px;
  fon-size:2rem;
  font-weight:700;
  :hover{
    background-color: #b08d03;
  }

`;