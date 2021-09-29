import React from 'react';
import { IconButton } from '@mui/material';
import { SearchRounded } from '@mui/icons-material';

import './header.css';
import { useState } from 'react';

const Header = (props) => {
    const [searchString, setSearchString] =  useState('')

    return (
        <div className="header">
            <div className="title">
                <span>
                    MyMovies
                </span>
            </div>
            <div className="search">
                <input type="search" placeholder="give movie name" value={searchString} onChange={(e) => setSearchString(e.currentTarget.value)}/>
                <IconButton color="secondary" aria-label="add an alarm" onClick={props.onSearch(searchString)}>
                    <SearchRounded />
                </IconButton>
            </div>
        </div>
    )
}

export default Header