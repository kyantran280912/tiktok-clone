import PropTypes from 'prop-types';
import Sidebar from '../components/Sidebar';
import React from 'react';
import Header from '../components/Header/Header';
import styled from 'styled-components';

const DefaultLayout = ({ children }) => {
    return (
        <StyledDefaultLayout>
            <Header />
            <div className="container">
                <Sidebar />
                <div className="content">{children}</div>
            </div>
        </StyledDefaultLayout>
    );
};
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};
const StyledDefaultLayout = styled.div`
    .container {
        max-width: var(--default-layout);
        margin: 0 auto;
        display: flex;
        margin-top: 60px;
    }
    .content {
        flex: 1;
    }
`;

export default DefaultLayout;
