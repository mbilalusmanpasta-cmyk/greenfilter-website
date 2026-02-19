import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button1 = ({ text, handleClick, marginTop,isLink,to,target,download }) => {
  return (

    isLink ?
      <Link to={to} target={target} download={download || false}>
        <Button1Wrapper marginTop={marginTop}>
          {text}
        </Button1Wrapper>
      </Link>
  :
    <Button1Wrapper
    onClick={handleClick}
    marginTop={marginTop}>
      {text}
    </Button1Wrapper>
  
  );
};

export default Button1;
const Button1Wrapper = styled.button`
  background-color: #00ad23;
  background-image: none;
  min-width: 64px;
  color: #fff;
  padding: 6px 16px;
  border-radius: 4px;
  font-family: Lato, sans-serif;
  font-size: 0.875rem;
  font-weight: 600;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  border: none;
  cursor: pointer;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;
  transition: background-color 0.2s ease;
  &:hover {
    background-color: #00901c;
  }
  a:hover {
    color: #fff;
  }
`;
