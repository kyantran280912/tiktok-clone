import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react/headless';
import React, { useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import HeaderMenu from './HeaderMenu';
import MenuItem from './MenuItem';

const Menu = ({ children, items = [], onChange = () => null }) => {
    const [history, sethistory] = useState([{ data: items }]);
    const current = history[history.length - 1];

    // Render items 

    
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            sethistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };

    // On back menu children
    const handleBack = () => {
        sethistory((prev) => prev.slice(0, prev.length - 1));
    };

    // Render Tippy
    const renderResult = (attrs) => (
        <div className="menu-list" {...attrs} tabIndex="-1">
            <PopperWrapper className="menu-popper">
                {history.length > 1 && <HeaderMenu title={current.title} onBack={handleBack} />}
                <div className="menu-body">{renderItems()}</div>
            </PopperWrapper>
        </div>
    );

    // Reset to first page
    const handleResetMenu = () => {
        sethistory((prev) => prev.slice(0, 1));
    };

    return (
        <Tippy
            // visible
            placement="bottom-end"
            delay={[0, 300]}
            interactive
            render={renderResult}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    );
};

// Prop types
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
};

export default Menu;
