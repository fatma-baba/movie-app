import React from 'react'
import { useHistory } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
import Rating from '@mui/material/Rating';



const Movie = () => {
    let history = useHistory();

    return (
        <Card sx={{ maxWidth: '100%' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="500"
                    image={history.location.state.movie.image}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {history.location.state.movie.title}
                    </Typography>
                    <Rating
                    name="simple-controlled"
                    value={history.location.state.movie.rating}
                    readOnly
                />
                    <Typography variant="body2" color="text.secondary">
                        {history.location.state.movie.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => history.push('/')}>
                    back
                </Button>
            </CardActions>
        </Card>
    )
}

export default Movie
