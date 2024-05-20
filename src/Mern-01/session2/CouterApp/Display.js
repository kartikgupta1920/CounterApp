import React from 'react';

class Display extends React.Component{
    render(){
        return <p>{this.props.displayValue}</p>;
    }
}

export default Display;