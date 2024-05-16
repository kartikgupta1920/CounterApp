import React from "react";

class Albums extends React.Component{
    constructor(){
        super();
        this.state = {
            albums: [],
        };
    }
    handleFetchData = async()=>{
        const response = await fetch('https://jsonplaceholder.typicode.com/albums');
        const data = await response.json();
        this.setState({albums: data});
        // console.log('Data::', data);
    };
    componentDidMount(){
        this.handleFetchData();
    }
    render(){
        return (
        <div>
            Albums{' '}
            {this.state.albums.map((album) =>{
            return <p>{album.title}</p>;
        })}
        </div>
        );
    }
}

export default Albums;