import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {AppBar, Toolbar, Typography} from '@mui/material' ;

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
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        Image Gallery
                    </Typography>
                </Toolbar>
            </AppBar>
            {albums.map((album) => {
                return(
                    <Link to={`photos/${album.id}`} key={album.id}>
                        <p>Album Id: {album.id}</p>
                        <p>Album Title: {album.title}</p>
                    </Link>
                );
            })}
            </div>
    );
};

export default Albums;