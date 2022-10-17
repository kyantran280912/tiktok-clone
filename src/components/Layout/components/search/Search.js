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
import { useRef } from 'react';
import AccountItem from '~/components/AccountItem/AccountItem';
import { Wrapper as PopperWrapper } from '../../../Popper';

const Search = () => {
    const [searchValue, setsearchValue] = useState('');
    const [SearchResult, setSearchResult] = useState([]);
    const [showResult, setshowResult] = useState(true);
    const [loading, setloading] = useState(false);

    const inputRef = useRef();

    useEffect(() => {
        if (!searchValue.trim()) return;
        setloading(true);
        fetch(`https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(searchValue)}&type=less`)
            .then((res) => res.json())
            .then((res) => {
                setSearchResult(res.data);
                setloading(false);
            })
            .catch(() => {
                setloading(false);
            });
    }, [searchValue]);

    const handleClear = () => {
        setsearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setshowResult(false);
    };
    return (
        <Tippy
            visible={showResult && SearchResult.length > 0}
            placement="top-end"
            interactive
            render={(attrs) => (
                <div className="search-result" {...attrs}>
                    <PopperWrapper>
                        <h4 className="search-title">Account</h4>
                        {SearchResult.map((item) => (
                            <AccountItem key={item.id} data={item} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className="search">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search accounts and video"
                    spellCheck={false}
                    value={searchValue}
                    onChange={(e) => setsearchValue(e.target.value)}
                    onFocus={() => setshowResult(true)}
                />
                {!!searchValue && !loading && (
                    <button className="clear" onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && <FontAwesomeIcon className="loading" icon={faSpinner} />}
                <button className="search-btn">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </Tippy>
    );
};

export default Search;
