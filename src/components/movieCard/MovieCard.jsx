import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Button from '@mui/material/Button';
import { ShareRounded } from '@mui/icons-material';
import { useHistory } from "react-router-dom";
import './MovieCard.css'

const MovieCard = (props) => {

    let history = useHistory();

    const handleLink = () => {
        history.push({
            pathname: '/movie',
            state : {
                movie : {...props}
            }
        })
    }

    return (
        <Card sx={{ maxWidth: '30%' }} variant='outlined' className='movie-card'>
            <CardHeader
                title={props.title}
                subheader={props.date}
            />
            <CardMedia
                component="img"
                height="194"
                image={props.image}
                alt={props.title + ' cover image'}
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Rating
                    name="simple-controlled"
                    value={props.rating}
                    readOnly
                />
                <Button size='small' variant="outlined" onClick={ handleLink } startIcon={<ShareRounded />}>
                    more
                </Button>
            </CardActions>
        </Card>
    )
}

export default MovieCard