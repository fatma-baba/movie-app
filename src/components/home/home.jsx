import React, {useState, useEffect} from 'react'
import MovieCard from '../movieCard/MovieCard'
import Filter from '../filter/filter';
import Header from '../header/header'
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import './home.css'

const Home = (props) => {
    const [ratingSearch, setRatingSearch] = useState(0)
    const [searchString, setSearchString] = useState('')

    const [movies, setMovies] = useState([
        {
            title: 'Detachment',
            date: 'Septembre, 2011',
            image: 'https://www.listchallenges.com/f/items2020/f655787b-76dd-493f-b516-2e8a932d3631.jpg',
            description: 'chronicle of three weeks in the lives of several high school teachers, administrators and students through the eyes of substitute teacher, Henry Barthes. Henry roams from school to school, imparting modes of knowledge, but never staying long enough to form any semblance of sentient attachment.',
            rating: 5
        },
        {
            title: 'Moon',
            date: 'Jun 12, 2009',
            image: 'https://www.listchallenges.com/f/items2020/94365277-9f02-4149-9a6b-d054834626c2.jpg',
            description: 'With only three weeks left in his three year contract, Sam Bell is getting anxious to finally return to Earth. He is the only occupant of a Moon-based manufacturing facility along with his computer and assistant, GERTY. When he has an accident however, he wakens to find that he is not alone.',
            rating: 3
        },
        {
            title: 'October Sky',
            date: 'Feb 19, 1999',
            image: 'https://www.listchallenges.com/f/items2020/c59fcc87-a6eb-4392-b506-b8d7d8f34d64.jpg',
            description: 'Based on the true story of Homer Hickam, a coal miner\'s son who was inspired by the first Sputnik launch to take up rocketry against his father\'s wishes, and eventually became a NASA scientist.',
            rating: 4
        },
        {
            title: 'Chronicle',
            date: 'Septembre, 2011',
            image: 'https://www.listchallenges.com/f/items2020/a84478a2-8de5-4e58-94de-ccd4d113ba90.jpg',
            description: 'Three high school students make an incredible discovery, leading to their developing uncanny powers beyond their understanding. As they learn to control their abilities and use them to their advantage, their lives start to spin out of control, and their darker sides begin to take over.',
            rating: 4
        }
    ])
    const [filtredMovies, setFiltredMovies] = useState(movies)

    useEffect(() => {
        // reset filter 
        if ((!ratingSearch || ratingSearch == 0) && searchString.length == 0) {
            setFiltredMovies(movies)
        }
        // filter based on rating only 
        else if (ratingSearch > 0 && searchString.length == 0) {
            setFiltredMovies(movies.filter(movie => movie.rating === ratingSearch))
            // filter based on search string only
        } else if (ratingSearch == 0 && searchString.length > 0) {
            setFiltredMovies(movies.filter(movie => movie.title.toLowerCase().includes(searchString.toLowerCase())))
        }
        // filter based onbooth
        else {
            setFiltredMovies(movies.filter(movie => movie.title.toLowerCase().includes(searchString.toLowerCase()) && movie.rating == ratingSearch))
        }

    }, [ratingSearch, searchString])

    return (
        <>
            <Header onSearch={setSearchString} />
            <div className='content'>
                <div className='filter-holder'>
                    <Filter onSelect={setRatingSearch} />
                </div>
                <Paper variant="outlined" >
                    <Typography variant="overline" display="block">
                        Total movies founded : {filtredMovies.length}
                    </Typography>
                </Paper>
                <div className='cards-holder'>
                    {filtredMovies.map((movie, index) => <MovieCard key={index} {...movie}/>)}
                </div>
            </div>
        </>
    )
}

export default Home
