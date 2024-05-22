import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Photos = () => {
    const [photos, setPhoto] = useState([]);
    const {id} = useParams();
    const handleFetchPhotos = async()=>{
        try{
        const reponse = await fetch('https://jsonplaceholder.typicode.com/photos');
        const photosData = await reponse.json();
        const filterPhotoData = photosData.filter((photo) => photo.albumId === Number(id));
        setPhoto(filterPhotoData);
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