import { Container } from '@mui/material';
import Header from './components/header/header';
import './App.css';
import { useEffect, useState } from 'react';
import Home from './components/home/home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
  useParams
} from "react-router-dom";
import Movie from './components/movie/movie'

function App() {




  return (
    <Container maxWidth="md">
      <Router>
      <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/movie">
            <Movie />
          </Route>
          <Route path="/">
            <Redirect to='/home'/>
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
