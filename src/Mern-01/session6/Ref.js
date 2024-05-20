import React, { useEffect, useRef, useState } from 'react';

const Ref = () => {
    const [search, setSearch] = useState('');
    const inputref = useRef(null);
    useEffect(() => {
    inputref?.current?.focus();
    }, []);
    return(
        <div>
            <input ref={inputref} value={search} onChange={(e) => setSearch(e.target.value)}/>
        </div>
    );
};

export default Ref;