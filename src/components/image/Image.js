/* eslint-disable jsx-a11y/alt-text */
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { forwardRef } from 'react';
import images from '~/assets/images';
import styled from 'styled-components';

const Image = forwardRef(({ src, alt, className, fallback: currentFallback = images.imageDefault, ...props }, ref) => {
    const [fallback, setfallback] = useState('');

    const handleError = () => {
        setfallback(currentFallback);
    };

    return (
        <StyledImage src={fallback || src} alt={alt} {...props} ref={ref} className={className} onError={handleError} />
    );
});
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
};
const StyledImage = styled.img`
    overflow: hidden;
`;
export default Image;
