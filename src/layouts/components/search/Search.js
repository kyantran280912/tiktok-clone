import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    // faSignIn,
    // faCloudUpload,
    // faMessage,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import AccountItem from '~/components/AccountItem/AccountItem';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import { useDebounce } from '~/hooks';
import * as SearchService from '~/services/SearchService';
const Search = () => {
    const [searchValue, setsearchValue] = useState('');
    const [SearchResult, setSearchResult] = useState([]);
    const [showResult, setshowResult] = useState(true);
    const [loading, setloading] = useState(false);

    const debounceValue = useDebounce(searchValue, 700);

    const inputRef = useRef();

    useEffect(() => {
        if (!debounceValue.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setloading(true);
            const result = await SearchService.search(debounceValue);
            setSearchResult(result);
            setloading(false);
        };
        fetchApi();
    }, [debounceValue]);

    const handleClear = () => {
        setsearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    const handleHideResult = () => {
        setshowResult(false);
    };
    const handleChange = (e) => {
        const SearchValue = e.target.value;
        if (!SearchValue.startsWith(' ')) {
            setsearchValue(SearchValue);
        }
    };
    return (
          
      <div>
            <Tippy
                appendTo={() => document.body}
                visible={showResult && SearchResult.length > 0}
                placement="top-end"
                interactive
                render={(attrs) => (
                    <div className="search-result" {...attrs}>
                        <PopperWrapper>
                            <h4 className="search-title">Account</h4>
                            {SearchResult.map((item) => (
                                <AccountItem key={item.id} data={true} />
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
                        onChange={handleChange}
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
      </div>
    );
};

export default Search;
