import { createContext, useState, useEffect } from 'react';
import {handleErrorResponse} from "../../Contant/Constants"

export const GamesContext = createContext();

export function GamesProvider({ children }) {

  const [games, setGames] = useState(() => {
    const stored = localStorage.getItem("games");
    return stored ? JSON.parse(stored) : null; 
  });

  
  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("https://680c06432ea307e081d2fe6b.mockapi.io/API/v1/juegos");
        handleErrorResponse(response);
        const data = await response.json();
        const gamesWithLikes = data.map(game => ({ ...game, liked: false }));
        setGames(gamesWithLikes);
      } catch (error) {
        console.error("Error buscando los juegos: fetchGames.jsx", error);
      }
    };
    
    if (!games) {
      fetchGames();
    }
  }, [games]);

  useEffect(() => {
    if (games) {
      localStorage.setItem("games", JSON.stringify(games));
    }
  }, [games]);

  const toggleLike = (id) => {
    setGames(prevGames => {
      const updatedGames = prevGames.map(game =>
        game.id === id ? { ...game, liked: !game.liked } : game
      );
      return updatedGames;
    });
  };

  return (
    <GamesContext.Provider value={{ games, toggleLike }}>
      {children}
    </GamesContext.Provider>
  );
}
