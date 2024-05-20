import React, { useEffect, useRef, useState } from "react";

const debounce = (fn, delay) => {
    let timerId;
    return function(args){
        if(timerId){
            clearTimeout(timerId);
        }
        timerId = setTimeout(()=>fn(...args), delay);
    };
};
const Debouncing = () => {
    const [name, setName] = useState('');
    const handleSearch = (searchText) => {
        console.log('Search Text :', searchText);
    }
    const debounceSearch = useRef(debounce(handleSearch, 500)).current;
    useEffect(()=> {
        if(name) {
            debounceSearch(name);
        }
    }, [debounceSearch, name])
    return(
        <div>
            <input
                value={name}
                onChange={(e) => {
                    setName(e.target.value);
                }}
            />
        </div>
    );
};

export default Debouncing;