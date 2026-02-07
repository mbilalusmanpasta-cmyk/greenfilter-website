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
  background-color: rgba(0, 173, 35, 0.86);
  background-image: none;
  min-width: 90px;
  color: #fff;
  padding: 15px 35px;
  border-radius: 5px;
  box-shadow: 0 0 11px 1px rgb(0 0 0 / 11%);
  font-family: Lato, sans-serif;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.75px;
  border: none;
  cursor: pointer;
  margin-top: ${(props) => (props.marginTop ? props.marginTop : 0)}px;

  a:hover{
    color:#fff;
  }
`;
