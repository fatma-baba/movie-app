import React, {useState} from 'react';
import Rating from '@mui/material/Rating';
import Paper from '@mui/material/Paper';
import { Typography
 } from '@mui/material';
import './filter.css'
import { useEffect } from 'react';

const Filter = ( props ) => {
    const [value, setValue] = useState(0)

    useEffect(()=> {
        props.onSelect(value)
    }, [value])

    return (
        <Paper elevation={3} variant="outlined" className='filter'>
            <Typography  variant="h6" component="legend">Search with rating</Typography>
                <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                />
        </Paper>
    )
}

export default Filter