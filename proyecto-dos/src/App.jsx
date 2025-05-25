import { Routes, Route } from 'react-router-dom';
import { GamesProvider } from './components/FetchGames/FetchGames';
import GamesFavorites from './pages/GamesFavorites/GamesFavorites';
import GameDetails from './pages/GameDetails/GameDetails';
import Home from './pages/Home/Home';
import Nav from './components/Nav/Nav';
import  ScrollToTop  from './components/ScrollTop/ScrollTop';
import Footer from './components/Footer/Footer';
import i18n from './utils/i18n';
import Error from './components/Error/Error';

const App = () => {
    return (
        <>
        <ScrollToTop/>
        <Nav />
        <GamesProvider>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/games-details/:id" element={<GameDetails />} />
                <Route path="/games-details/" element={<GameDetails />} />
                <Route path="/games-favorites" element={<GamesFavorites />} /> 
                <Route path="/games-details/" element={<GamesFavorites />} /> 
                <Route path="*" element={<Error />} /> // Catch-all route for 404
            </Routes>
        </GamesProvider>
        <Footer/>
        </>
    );
};

export default App;