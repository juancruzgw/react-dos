import { createContext, useState, useEffect } from 'react';

export const GamesContext = createContext();

export function GamesProvider({ children }) {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("https://680c06432ea307e081d2fe6b.mockapi.io/API/v1/juegos");
        if (!response.ok) {
          throw new Error("Error al recuperar los juegos");
        }
        const data = await response.json();
        const gamesWithLikes = data.map(game => ({ ...game, liked: false }));
        setGames(gamesWithLikes);
      } catch (error) {
        console.error("Error buscando los juegos:", error);
      }
    };

    fetchGames();
  }, []);

  const toggleLike = (id) => {
    setGames(prevGames =>
      prevGames.map(game =>
        game.id === id ? { ...game, liked: !game.liked } : game
      )
    );
    console.log("Juego actualizado:", games.find(game => game.id === id));
  };

  return (
    <GamesContext.Provider value={{ games, toggleLike }}>
      {children}
    </GamesContext.Provider>
  );
}