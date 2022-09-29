import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
const Button = ({
    to,
    href,
    children,
    onClick,
    primary = false,
    outline = false,
    small = false,
    large = false,
    ...passProps
}) => {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <StyledButton className='wrapper' {...props} primary={primary} outline={outline} small={small} large={large}>
            <Comp className="comp-btn">{children}</Comp>
        </StyledButton>
    );
};
const StyledButton = styled.div`
    display: inline-block;
    + .wrapper {
        margin-left: 10px;

    }
    .comp-btn {
        min-width: 100px;
        padding: 9px 16px;
        font-size: 1.6rem;
        font-weight: 700;
        border-radius: 4px;
        cursor: pointer;
        background-color: white;
        border: 1px solid transparent;
        ${(props) =>
            props.primary &&
            css`
                background-color: var(--pri);
                color: white;
            `};
        ${(props) =>
            props.outline &&
            css`
                border-color: var(--pri);
                color: var(--pri);
                &:hover {
                    background-color: rgba(254, 44, 85, 0.06);
                }
            `};
        ${(props) =>
            props.small &&
            css`
                min-width: 88px;
                padding: 4px 16px;
            `};
        ${(props) =>
            props.large &&
            css`
                min-width: 140px;
                padding: 14px 16px;
            `};
    }
`;

export default Button;
