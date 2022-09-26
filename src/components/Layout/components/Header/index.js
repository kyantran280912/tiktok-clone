import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; // optional
import { Wrapper as PopperWrapper } from '../../../Popper';
import AccountItem from '~/components/AccountItem';
const Header = () => {
    const [SearchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, []);
    return (
        <StyledHeader>
            <div className="inner">
                <div className="logo">
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <Tippy
                    visible={SearchResult.length > 0}
                    interactive
                    render={(attrs) => (
                        <div className="search-result" {...attrs}>
                            <PopperWrapper>
                                <h4 className="search-title">
                                    Account
                                </h4>
                                <AccountItem/>
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className="search">
                        <input type="text" placeholder="Search accounts and video" spellCheck={false} />

                        <button className="clear">
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className="loading" icon={faSpinner} />
                        <button className="search-btn">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className="action"></div>
            </div>
        </StyledHeader>
    );
};
const StyledHeader = styled.header`
    height: 60px;
    box-shadow: 0px 1px 1px rgb(0 0 0 / 12%);
    --search-boder-radius: 92px;
    --search-height: 46px;
    --search-top-spacer: 9px;
    .inner {
        height: 100%;
        max-width: var(--default-layout);
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .search-result{
        width: 361px;
    }
    /* .logo {
    } */
    .search {
        width: 361px;
        height: var(--search-height);
        background-color: rgba(22, 24, 35, 0.06);
        border-radius: var(--search-boder-radius);
        position: relative;
        padding-left: 16px;
        display: flex;
        border: 1.5px solid transparent;

        input {
            font-size: 1.6rem;
            height: 100%;
            background-color: transparent;
            flex: 1;
            caret-color: var(--pri);
        }
        input:not(:placeholder-shown) ~ .search-btn {
            color: rgba(22, 24, 35, 0.75);
        }
        ::after {
            content: '';
            position: absolute;
            top: var(--search-top-spacer);
            right: 52px;
            height: calc(var(--search-height) - var(--search-top-spacer) * 2);
            width: 1px;
            background-color: rgba(22, 24, 35, 0.12);
        }
        &:focus-within {
            border-color: rgba(22, 24, 35, 0.2);
        }
    }
    .clear,
    .loading {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: calc(52px + 10px);
        color: rgba(22, 24, 35, 0.34);
    }
    .search-btn {
        width: 52px;
        height: 100%;
        border-top-right-radius: var(--search-boder-radius);
        border-bottom-right-radius: var(--search-boder-radius);
        cursor: pointer;
        font-size: 1.6rem;
        color: rgba(22, 24, 35, 0.34);
        &:hover {
            background-color: rgba(22, 24, 35, 0.03);
        }
        :active {
            background-color: rgba(22, 24, 35, 0.06);
        }
    }
    .action {
    }
`;
export default Header;
