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
const StyledDefaultLayout = styled.div`
    .container {
        max-width: var(--default-layout);
        margin: 0 auto;
        display: flex;
    }
    .content {
        flex: 1;
    }
`;

export default DefaultLayout;
