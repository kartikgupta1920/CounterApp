import React, { useEffect, useState } from 'react';

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    const handleFetchAlbum = async() =>{
        try{
            const reponse = await fetch('https://jsonplaceholder.typicode.com/albums');
          const albumData = await reponse.json();
          setAlbums(albumData);
        } catch(e){
         console.log('Error', e);
        }
    };
    useEffect(() => {
        handleFetchAlbum();
    }, []);
    return(
         <div>
            <center>
                <h1>Image Gallery</h1>
            </center>
            {albums.map(album) => {
                return(

                )

            }}
            </div>
    )
};

export default Albums;