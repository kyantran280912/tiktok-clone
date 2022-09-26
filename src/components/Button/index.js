import React from 'react'
import styled from "styled-components";
import { Link } from 'react-router-dom';
const Button = ({to, href, children, onClick, primary, passProps}) => {
    const props = {
        onClick,
    }
    if (to) {
        props.to = to
    }else if (href){
        props.href = href

    }
  return (
    <StyledButton {...props} {...passProps}>
        <span>{children}</span>
    </StyledButton>
  )
}
const StyledButton = styled.button`
    min-width: 100px;
    padding: 9px 16px;
    font-size: 1.6rem;
    font-weight: 700;
    border-radius: 4px;
    cursor: pointer;
`

export default Button