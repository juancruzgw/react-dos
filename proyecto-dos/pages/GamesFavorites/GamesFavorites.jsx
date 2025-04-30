import Button from "../../components/Button/Button";
import { useState } from "react";
import { useContext } from "react";
import { GamesContext } from "../../components/FetchGames/FetchGames";

import { useEffect } from "react";
import CardFavoritos from "../../components/CardFavoritos/CardFavoritos";

const GamesFavorites = () => {
    
    const { games, toggleLike } = useContext(GamesContext);

    const [favs, setFavs] = useState([]);

    useEffect(() => {
        const favs = games.filter((item) => item.liked === true);
        setFavs(favs);
    }
    , [games]);

    console.log(favs);

    const renderCards = () => {
        return (favs.map((item) => {
            return <CardFavoritos
                id={item.id}
                name={item.name}
                price={item.precio} 
                button={"View More"}
                img={item.logo}
                liked={item.liked}
                />
                
        }))
    }

 return (
    <main className="min-h-screen bg-neutral-900 text-white p-6">
    <section className="max-w-6xl mx-auto">
      <div className="flex justify-end mb-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition">
          ❤ Favs
        </button>
      </div>
  
      <div>
        <h1 className="text-3xl font-bold mb-4 mt-27">Lista de Favoritos</h1>
  
        <div className=" gap-6 border border-gray-700 rounded-lg p-6 bg-neutral-800">
          {/* Acá van tus tarjetas */}
          {renderCards()}
        </div>
      </div>
    </section>
  </main>
  
 );
};

export default GamesFavorites;