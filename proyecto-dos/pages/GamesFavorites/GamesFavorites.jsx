import Button from "../../components/Button/Button";
import { useState } from "react";
import { useContext } from "react";
import { GamesContext } from "../../components/FetchGames/FetchGames";

import { useEffect } from "react";
import CardFavoritos from "../../components/CardFavoritos/CardFavoritos";

import { useTranslation } from "react-i18next";
const GamesFavorites = () => {
    
    const { games, toggleLike } = useContext(GamesContext);
    const { t, i18n } = useTranslation();
    const [favs, setFavs] = useState([]);

    useEffect(() => {
        const favs = games.filter((item) => item.liked === true);
        setFavs(favs);
    }
    , [games]);


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
    <main className="min-h-screen bg-cover bg-center bg-no-repeat text-white p-6" style={{ backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-FhYb-xWceV26kWv4eKN0faRp8FSzVCXrKA&s')` }} >
    <section className="max-w-6xl mx-auto w-[90%]">
      <div className="flex justify-end mb-6">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition">
          ❤ Favs
        </button>
      </div>
  
      <div>
        <h1 className="text-3xl font-bold mb-4 mt-27">{t('listFavorites') }</h1>
  
        <div className=" gap-6 border border-gray-700 rounded-lg p-6 bg-neutral-800 ">
          {renderCards()}
        </div>
      </div>
    </section>
  </main>
  
 );
};

export default GamesFavorites;