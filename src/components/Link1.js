import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Link1 = ({ text, handleClick, marginTop,isLink,to,target,download }) => {
  return (

    isLink ?
      <Link to={to} target={target} download={download || false}>
        <Link1Wrapper marginTop={marginTop}>
          {text}
        </Link1Wrapper>
      </Link>
  :
    <Link1Wrapper
    onClick={handleClick}
    marginTop={marginTop}>
      {text}
    </Link1Wrapper>
  
  );
};

export default Link1;
const Link1Wrapper = styled.button`
  color: #14800d;
  font-family: Lato, sans-serif;
  font-size: 14px;
  letter-spacing: 0.75px;
  border: none;
  cursor: pointer;

  &:hover{
    font-weight: 700;
  }
`;
