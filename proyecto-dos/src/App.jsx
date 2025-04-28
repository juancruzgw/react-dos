import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GamesProvider } from '../components/FetchGames/FetchGames';
import Home from '../pages/Home/Home';

const App = () => {
    return (
        <GamesProvider>
            <Routes>
                {/* Aquí puedes agregar tus rutas */}
                <Route path="/" element={<Home />} />
                {/* <Route path="/games-details/:id" element={<GameDetails />} /> */}
            </Routes>
        </GamesProvider>
    );
};

export default App;