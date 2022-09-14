import React from 'react';
import styled from 'styled-components';
import images from "~/assets/images"
const Header = () => {
    return (
        <StyledHeader>
            <div className="inner">
                <div className="logo">
                   <img src={images.logo} alt="Tiktok" />
                </div>
                <div className="search">
                    <input type="text" placeholder='Search accounts and video' spellCheck={false} />
                    <button>
                        {/* Icon */}
                    </button>
                    {/* Loading */}
                    <button>
                        {/* search  */}
                    </button>
                </div>
            </div>
        </StyledHeader>
    );
};
const StyledHeader = styled.header`
    height: 60px;
    box-shadow: 0px 1px 1px rgb(0 0 0 / 12%);
    .inner {
        height: 100%;
        max-width: var(--default-layout);
        margin-left: auto;
        margin-right: auto;
    }
`;
export default Header;
