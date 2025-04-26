import Home from "../pages/Home/Home";
import Navbar from "../components/Nav/Nav";
import { Routes, Route } from 'react-router-dom';
import GamesFavorites from "../pages/GamesFavorites/GamesFavorites";
import GameDetails from "../pages/GameDetails/GameDetails"
const App = () => {

  return (
    <div className="bg-[#2a2a34]">
      <Navbar/>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games-favorites" element={<GamesFavorites/>} />
        <Route path="/games-details/:id" element={<GameDetails/>} />
      </Routes>
    </div>
  );

};

export default App;