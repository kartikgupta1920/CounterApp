import React from "react";
import Albums from "./Albums";
import Photos from "./Photos";

class ImageGallery extends React.Component{
    render(){
        return (<div>Image Gallery
            <div> 
                <Albums/>
                <Photos/>
            </div>
        </div>
        );
    }
}

export default ImageGallery;