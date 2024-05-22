import React, { useEffect, useState } from "react";

const Photos = () => {
    const [photos, setPhoto] = useState([]);
    const handleFetchPhotos = async()=>{
        try{
        const reponse = await fetch('https://jsonplaceholder.typicode.com/photos');
        const photosData = await reponse.json();
        setPhoto(photosData);
        } catch(e){
            console.log('Error', e);
        }
    };
    useEffect(()=>{
        handleFetchPhotos();
    }, []);
    return (
        <div>
         <h1>
          <center>Photos</center>
          </h1>
         {
              photos.map((photo) => {
                 return (
                     <img key={photo.id} src={photo.thumbnailUrl} alt={photo.title}/>
                    );
              })
        }
    </div>
    );
};

export default Photos;