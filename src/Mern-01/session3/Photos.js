import React from "react";

class Photos extends React.Component{
    constructor(){
        super();
        this.state = {
            photos: [],
        }
    }
    handleFetchPhotos = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        const data = await response.json();
        this.setState({photos: data});
    }
    componentDidMount(){
        this.handleFetchPhotos();
    }
    render(){
        return(
         <div>Photos
            {
                this.state.photos.map((photo) => {
                    return <img src={photo.thumbnailUrl} alt={photo.title}/>;
                                                                                                                  
                })
            }
        </div>
        );
    }
};


export default Photos;