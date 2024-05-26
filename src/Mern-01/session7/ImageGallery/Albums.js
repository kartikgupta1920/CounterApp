import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {  Box, Card,  } from '@mui/material';
import Header from './Header';

const Albums = () => {
    const [albums, setAlbums] = useState([]);
    const handleFetchAlbum = async () => {
        try {
            const reponse = await fetch('https://jsonplaceholder.typicode.com/albums');
            const albumData = await reponse.json();
            setAlbums(albumData);
        } catch (e) {
            console.log('Error', e);
        }
    };
    useEffect(() => {
        handleFetchAlbum();
    }, []);
    return (
        <div>
            <Header/>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', columnGap: '8px', rowGap: '8px' }}>
                {albums.map((album) => {
                    return (
                        <Card variant="outlined" sx={{ padding: '10px', width: '100px', minHeight: '200px', maxHeight: '300px' }}>
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