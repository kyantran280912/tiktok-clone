import React from 'react';
import styled from 'styled-components';

const Wrapper = ({ children }) => {
    return <StyledWrapper>{children}</StyledWrapper>;
};
const StyledWrapper = styled.div``;
export default Wrapper;
