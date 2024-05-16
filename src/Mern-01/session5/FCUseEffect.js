import React, {useEffect, useState} from "react";

function FCUseEffect(){
    const [count, setCount] =useState(0);
    useEffect(() =>{
        console.log('hello, i am useEffect');
    }, [count]);
    return(
     <div>Hello useEffect{' '}
        <button onClick={() => setCount((prev) => prev + 1) }>Increase Count{count}</button>
    </div>
    );
}

export default FCUseEffect;