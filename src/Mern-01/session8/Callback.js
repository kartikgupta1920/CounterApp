import React, { Fragment, useCallback, useState } from "react";

const ListOfCounters = React.memo(({ counter, handleIncrementCounter }) => {
    return (
        <>
            {
                counter.map((count, index) => {
                    return (
                        <Fragment key={index}>
                            <button type="button" onClick={() => handleIncrementCounter(index)}>
                                Counter {index + 1}
                            </button>
                            <p>
                                Counter {index + 1} - {count}
                            </p>
                        </Fragment>
                    );
                })
            }
        </>
    );
});


const CallBack = () => {
    const [counter, setCounter] =useState([0, 0, 0]);

    const handleIncrementCounter = useCallback((index) => {
        setCounter((prevValue) =>{
            const newCounter = [...prevValue];
            newCounter[index]++;
            return newCounter;
        });
    }, []);
    return (
        <ListOfCounters counter={counter}
        handleIncrementCounter = {handleIncrementCounter}/>
    );
};

export default CallBack;
