import React from 'react';
import Header from './Header';
import Button from './Button';
import Display from './Display';

class Counter extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0,
            name: '',
        };
    }
    handleIncrement = () => {
        this.setState((prevState)=>{
            return {count:prevState.count + 1};
        });
    };
    handleDncrement = () => {
        this.setState((prevState)=>{
            return {count:prevState.count - 1};                
        });
    };
    handleUpdateName=(e) => {
        this.setState({name: e.target.value});
    };
    render(){
        return(
        <div>
            <Header/>
            <Button onClick={this.handleIncrement}btnText="+"/>
            <Display displayValue={this.state.count}/>
            <Button onClick={this.handleDncrement}btnText="-"/>
            <input 
            value={this.state.name} 
            onChange={(e) => this.handleUpdateName(e)} 
            />
        </div>
        );
    }
}

export default Counter;