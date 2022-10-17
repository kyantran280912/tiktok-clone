import React, { useState, useEffect } from 'react';

function useDebounce(value, delay) {
    const [debouncedValue, setdebouncedValue] = useState(value);
    useEffect(() => {
        const handler = setTimeout(() => {
            setdebouncedValue(value);
        }, delay);
        return () => clearTimeout(handler);
    }, [value, delay]);
    return debouncedValue;
}

export default useDebounce;