import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GamesProvider } from '../components/FetchGames/FetchGames';
import GamesFavorites from '../pages/GamesFavorites/GamesFavorites';
import GameDetails from '../pages/GameDetails/GameDetails';
import Home from '../pages/Home/Home';
import Nav from '../components/Nav/Nav';
import  ScrollToTop  from '../components/ScrollTop/ScrollTop';
import i18n from '../utils/i18n'; 

const App = () => {
    return (
        <>
        {/* Es para que suba */}
        <ScrollToTop/>
        <Nav />
        <GamesProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games-details/:id" element={<GameDetails />} />
                <Route path="/games-favorites" element={<GamesFavorites />} /> 
            </Routes>
        </GamesProvider>
        </>
    );
};

export default App;