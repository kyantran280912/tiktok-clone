import Tippy from '@tippyjs/react/headless';
import React, { useState } from 'react';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import HeaderMenu from './HeaderMenu';
import MenuItem from './MenuItem';
const Menu = ({ children, items = [], onChange = () => null }) => {
    const [history, sethistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
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

    return (
        <Tippy
            // visible
            placement="bottom-end"
            delay={[0, 300]}
            interactive
            render={(attrs) => (
                <div className="menu-list" {...attrs} tabIndex="-1">
                    <PopperWrapper className="menu-popper">
                        {history.length > 1 && (
                            <HeaderMenu
                                title="Language"
                                onBack={() => sethistory((prev) => prev.slice(0, prev.length - 1))}
                            />
                        )}
                        <div className="menu-body">{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => sethistory((prev) => prev.slice(0, 1))}
        >
            {children}
        </Tippy>
    );
};

export default Menu;
