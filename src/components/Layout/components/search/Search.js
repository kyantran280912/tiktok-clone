import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faSignIn,
    faCloudUpload,
    faMessage,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import React, { useEffect, useState } from 'react';
import AccountItem from '~/components/AccountItem/AccountItem';
import { Wrapper as PopperWrapper } from '../../../Popper';

const Search = () => {
    const [SearchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2]);
        }, 0);
    }, []);

    return (
        <Tippy
            visible={SearchResult.length > 0}
            placement="top-end"
            interactive
            render={(attrs) => (
                <div className="search-result" {...attrs}>
                    <PopperWrapper>
                        <h4 className="search-title">Account</h4>
                        <AccountItem />
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
    );
};

export default Search;
