import React, { Fragment } from "react";


const LIST_ITEMS = [
    {
        name: 'Kartik',
        value: 1,
    },
    {
        name: 'John',
        value: 2,
    }

]
const Fragments = () => {
    return (
        <>
        {
            LIST_ITEMS.map((item) => {
                return (
                    <Fragment key={item.name}>
                    <p>{item.name}</p>
                    <p>{item.value}</p>
                    </Fragment>
                );
            })
        }
        </>
        
    ) ;
};

export default Fragments;

