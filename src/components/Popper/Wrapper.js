import React from 'react';
import styled from 'styled-components';

const Wrapper = ({ children }) => {
    return <StyledWrapper>{children}</StyledWrapper>;
};
const StyledWrapper = styled.div`
    width: 100%;
    max-height: min((100vh - 96px) - 60px, 734px);
    min-height: 100px;
    border-radius: 8px;
    background-color: white;
    box-shadow: rgb(0 0 0 / 12%) 0px 2px 12px;
    padding-top: 8px;
`;
export default Wrapper;
