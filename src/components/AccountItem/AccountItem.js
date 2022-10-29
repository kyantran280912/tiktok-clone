import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import Image from '../image/Image';
import routesConfig from '~/config/routes';

const AccountItem = ({ data }) => {
    return (
        <StyledAccountItem to={`${routesConfig.profile}${data.nickname}`}>
            <Image src={data.avatar} className="avatar" alt={data.full_name} />
            <div className="info">
                <h4 className="name">
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className="check-icon" icon={faCheckCircle} />}
                </h4>
                <span className="username">{data.nickname}</span>
            </div>
        </StyledAccountItem>
    );
};
AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
};

const StyledAccountItem = styled(Link)`
    display: flex;
    align-items: center;
    padding: 6px 16px;
    cursor: pointer;
    :hover {
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
