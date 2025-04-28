import Home from "../pages/Home/Home";
import Navbar from "../components/Nav/Nav";
import { Routes, Route } from "react-router-dom";
import GamesFavorites from "../pages/GamesFavorites/GamesFavorites";
import GameDetails from "../pages/GameDetails/GameDetails";
import { useEffect } from "react";
import { useState } from "react";
import ScrollToTop from "../components/ScrollTop/ScrollTop";
const App = () => {

 const [game, setGame] = useState([]);

    const games = async () => {
        const juegos = await fetch(
            "https://680c06432ea307e081d2fe6b.mockapi.io/API/v1/juegos"
        );
        const resp = await juegos.json();
        setGame(resp);

        setGame(prev => 
            prev.map(game => ({
              ...game,    
              like: false   
            }))
          );
          
    };

    useEffect(()=>{
        games()
    },[])
    
    if(game.length == 0){
        return <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
                </div>
    }
    
    const setGames = (item) => {
        const setValues = game.map((prev) => 
            prev.id == item.id ? { ...prev, ...item } : prev
        );
        setGame(setValues);
    };
          
 return (
  <div className="bg-[#2a2a34]">

   <Navbar />
   <ScrollToTop />
   <Routes>
    <Route path="/" element={<Home games={game} />} />
    <Route path="/games-favorites" element={<GamesFavorites games={game} />}  />
    <Route path="/games-details/:id" element={<GameDetails games={game} setGames={setGames} />} />
   </Routes>

  </div>
 );
};

export default App;
