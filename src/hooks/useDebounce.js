import { useState, useEffect } from "react";

function useDebounce(value, delay) {
    const [deboundceValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay)

        return () => {
            clearTimeout(handler)
        };
    }, [value, delay]);
    
    return deboundceValue;
}

export default useDebounce;