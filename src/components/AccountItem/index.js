import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';

const AccountItem = () => {
    return (
        <StyledAccountItem>
            <img
                src="https://images.unsplash.com/photo-1664176702106-4196b5cf06d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
                className="avatar"
                alt="Avatar"
            />
            <div className="info">
                <h4 className="name">
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className="check-icon" icon={faCheckCircle} />
                </h4>
                <span className="username">nguyenvana</span>
            </div>
        </StyledAccountItem>
    );
};
const StyledAccountItem = styled.div`
    display: flex;
    align-items: center;
    padding: 6px 16px;
    cursor: pointer;
    :hover{
        background-color: rgba(22, 24, 35, 0.03);

    }
    .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
    }
    .info {
        flex: 1;
        margin-left: 12px;
    }
    .name {
        font-size: 1.4rem;
        font-weight: 500;
    }
    .check-icon {
        margin-left: 6px;
        font-size: 1.2rem;
        color: rgb(32, 213, 236);
    }
    .username {
        font-size: 1.4rem;
        color: rgba(22, 24, 35, 0.5);
    }
`;
export default AccountItem;
