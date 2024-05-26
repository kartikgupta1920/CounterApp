import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Card, CardMedia } from "@mui/material";
import Header from "./Header";

const Photos = () => {
    const [photos, setPhoto] = useState([]);
    const { id } = useParams();
    const handleFetchPhotos = async () => {
        try {
            const reponse = await fetch('https://jsonplaceholder.typicode.com/photos');
            const photosData = await reponse.json();
            const filterPhotoData = photosData.filter((photo) => photo.albumId === Number(id));
            setPhoto(filterPhotoData);
        } catch (e) {
            console.log('Error', e);
        }
    };
    useEffect(() => {
        handleFetchPhotos();
    }, []);
    return (
        <div>
            <Header />
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', columnGap: '8px', rowGap: '8px' }}>

                {
                    photos.map((photo) => {
                        return (
                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    alt={photo.title}
                                    height="140"
                                    image={photo.thumbnailUrl}
                                />

                            </Card>

                        );
                    })
                }
            </Box>
        </div>
    );
};

export default Photos;