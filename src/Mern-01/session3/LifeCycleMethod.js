import React from 'react';

class LifeCycleMethod extends React.Component{
    constructor(){
        super();
        this.state = {
            count: 0,
        };
    }
    componentDidMount(){
        console.log('Hey i am component did mount', this.state.count);
    }
    componentDidUpdate(){
        console.log('Component did Update::', this.state.count);
    }
    componentWillUnmount(){
        console.log('Component will unmount::', this.state.count);
    }
    render() {
        return (<div>Hello world{' '}
            <button
                onClick={() => this.setState((prev) => ({ count: prev.count + 1 }))}>
                Increment
            </button>
        </div>
        );
    }
}

export default LifeCycleMethod;