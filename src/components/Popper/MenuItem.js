import React from 'react';
import Button from '../Button/Button';

const MenuItem = ({ data, onClick }) => {
    const classes = `item ${data.separate ? 'separate' : ''}`;
    return (
        <Button leftIcon={data.icon} to={data.to} className={classes} onClick={onClick}>
            {data.title}
        </Button>
    );
};

export default MenuItem;
