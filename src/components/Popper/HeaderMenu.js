import PropTypes from 'prop-types';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const HeaderMenu = ({ title, onBack }) => {
    return (
        <header className="header-menu">
            <button className="back-btn" onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <h4 className="header-title-menu">{title}</h4>
        </header>
    );
};
HeaderMenu.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
};

export default HeaderMenu;
