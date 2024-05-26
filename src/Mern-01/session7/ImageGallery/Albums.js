import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {AppBar, Box, Card, Toolbar, Typography} from '@mui/material' ;

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
            <AppBar position="static" sx={{backgroundColor: '#2b2b2b'}}>
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        Image Gallery
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box sx={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
            {albums.map((album) => {
                return(
                        <Card variant="outlined" sx={{ padding: '10px', width: '100px' }}>
                            <Link to={`photos/${album.id}`} key={album.id}>
                                <p>Album Id: {album.id}</p>
                                <p>Album Title: {album.title}</p>
                            </Link>
                        </Card>
                    
                );
            })}
            </Box>
            </div>
    );
};

export default Albums;