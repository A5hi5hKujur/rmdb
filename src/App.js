import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { GlobalStyle } from './GlobalStyle';
// Components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';


function App()
{
    return (
        <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/movie/:id' element={<Movie/>} />
                <Route path='/*' element={<NotFound/>} />
            </Routes>
            <GlobalStyle />
        </Router>
    )
}

export default App;