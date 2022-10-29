import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';
const Button = ({
    to,
    href,
    children,
    leftIcon,
    rightIcon,
    primary = false,
    rounded = false,
    outline = false,
    small = false,
    large = false,
    text = false,
    disabled = false,
    className,
    onClick,
    ...passProps
}) => {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps,
    };
    // Remove EventListener when btn is disabled
    if (disabled) {
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }
    if (to) {
        props.to = to;
        Comp = Link;
    } else if (href) {
        props.href = href;
        Comp = 'a';
    }
    return (
        <StyledButton
            className={`wrapper ${className ? className : ''}`}
            {...props}
            primary={primary}
            outline={outline}
            small={small}
            large={large}
            text={text}
            disabled={disabled}
            rounded={rounded}
        >
            <Comp className="comp-btn" to={to} href={href}>
                {leftIcon && <span className="icon">{leftIcon}</span>}
                <span className="title">{children}</span>
                {rightIcon && <span className="icon">{rightIcon}</span>}
            </Comp>
        </StyledButton>
    );
};
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    primary: PropTypes.bool,
    disabled: PropTypes.bool,
    text: PropTypes.bool,
    rounded: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
};

const StyledButton = styled.div`
    display: inline-flex;
    cursor: pointer;
    + .wrapper {
        margin-left: 10px;
        display: inline-flex;
        align-items: center;
    }
    .title + .icon,
    .icon + .title {
        margin-left: 8px;
    }
    .comp-btn {
        min-width: 100px;
        padding: 9px 16px;
        font-size: 1.6rem;
        font-weight: 700;
        border-radius: 4px;
        border: 1px solid transparent;
        background-color: transparent;
        cursor: pointer;
        text-align: center;
        user-select: none;
        ${(props) =>
            props.rounded &&
            css`
                border-radius: 999px;
                border-color: rgba(22, 24, 35, 0.12);
                &:hover {
                    border-color: rgba(22, 24, 35, 0.2);
                    background-color: rgba(22, 24, 35, 0.03);
                }
            `};
        ${(props) =>
            props.primary &&
            css`
                background-color: var(--pri);
                color: white;
                border-color: var(--pri);
                &:hover {
                    border-color: var(--pri);
                    background-color: var(--pri);
                }
            `};
        ${(props) =>
            props.outline &&
            css`
                border-color: currentColor;
                color: var(--pri);
                &:hover {
                    border-color: currentColor;
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
        ${(props) =>
            props.text &&
            css`
                &:hover {
                    text-decoration: underline;
                }
            `};
        ${(props) =>
            props.disabled &&
            css`
                pointer-events: none;
                opacity: 0.5;
            `};
    }
    .icon {
        display: inline-block;
        width: 20px;
        text-align: center;
    }
`;

export default Button;
