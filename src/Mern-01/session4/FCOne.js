import React, {useState} from 'react';

function FCOne(){
    const [counter, setCounter] = useState(0);
    const handleIncrement = () => {
        setCounter((prevState) => prevState + 1);
    };
    const handleDncrement = () => {
        setCounter((prevState) => prevState - 1);
    };

    return (
     <div>  
        <button onClick={handleIncrement}>Increment</button>
        <span style={{margin : '0 10px' }}>{counter}</span>
        <button onClick={handleDncrement}>Decrement</button>
    </div> 
    ); 
}

export default FCOne;