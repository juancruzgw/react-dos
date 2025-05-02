import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { GamesContext } from "../../components/FetchGames/FetchGames";
import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";

const GameDetails = () => {
  const { id } = useParams();
  const { toggleLike } = useContext(GamesContext);
  const { t, i18n } = useTranslation();

  const [game, setGame] = useState(null);
  const [error, setError] = useState(null);

  const [mensajeLike, setMensajeLike ] = useState("")
  const [nuevoEstado, setNuevoEstado ] = useState("")



  const obtengoJuegoPorid = async (id) => {
    try {
      const response = await fetch(`https://680c06432ea307e081d2fe6b.mockapi.io/API/v1/juegos/${id}`);
      if (!response.ok) {
        throw new Error("404 This is not the web page you are looking for.");
      }
      const data = await response.json();
      setGame(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleLikeButton = () => {
    toggleLike(game.id)
  
    if(nuevoEstado){
      setNuevoEstado(false);
    }else{
      setNuevoEstado(true);
    }

    setMensajeLike(nuevoEstado ? 'Agregado a favorita ❤️' : 'Quitado de favoritos 🖤 ');
    setTimeout(() => setMensajeLike(""), 1000);
  }

  const renderMensajeLike = () => {
    return (
        <>
            {mensajeLike && (
              <div className="fixed top-10 left-1/2 transform -translate-x-1/2 px-6 py-4 w-fit max-w-[90%] bg-black/70 text-white text-3xl font-semibold rounded-xl shadow-lg text-center z-50 transition-opacity duration-300">
                {mensajeLike}
              </div>

            )}
        </>
    );
  };

  useEffect(() => {
    obtengoJuegoPorid(id);
  }, [id]);

  useEffect(() => {
    const handleLanguageChange = (lng) => {
      i18n.changeLanguage(lng);
    };
    handleLanguageChange(i18n.language);
  }
  , [i18n]);
  
  if (error || id == "") {
    console.log(id)
    return (
      <div className="relative flex justify-center items-center h-screen bg-[#222] text-white">
        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW9sOWVkNW03NnpybmdkOHk1OTFuaW9tc25mYW05aTBqcDV0Ymp5eSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kspVl6FzbdblOMKRmM/giphy.gif"
          alt="Error background"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0"
        />
    
        <div className="relative z-10 bg-black/70 px-8 py-6 rounded-xl shadow-2xl text-center w-[40%]">
          <h1 className="text-4xl font-bold mb-2">⚠️ Error</h1>
          <p className="text-xl">{error}</p>
        </div>
      </div>
    );    
  }

  if (!game) {
    return (
      <div className="flex justify-center items-center h-screen text-white text-2xl">
        {t("loading")}
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen">
      {/* Sección con imagen de fondo */}
      {renderMensajeLike()}

      <div
        className="w-full min-h-screen bg-cover bg-top mt-10 flex items-center justify-start text-white backdrop-blur-sm bg-black/30 shadow-2xl pt-24 px-4"
        style={{ backgroundImage: `url(${game.background_image})` }}
      >
  
        <div className="bg-black/50 p-6 sm:p-8 rounded-lg shadow-2xl max-w-2xl text-left w-full lg:ml-12">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 drop-shadow-lg animate-fade-in">
            {game.name}
          </h1>
  
          <p className="text-xl sm:text-2xl mb-4 bg-black/40 p-2 rounded-md backdrop-blur-sm">
            {`Precio: $${game.precio}`}
          </p>
  
          <p className="text-base sm:text-lg mb-8 text-left">
            {t(`${game.name.toLowerCase()}`)}
          </p>
  
          <div className="flex justify-end">
            <button
              onClick={handleLikeButton}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-900 to-teal-800 hover:from-teal-800 hover:to-emerald-900 text-white rounded-full font-semibold shadow-2xl transition-all duration-900"
            >
              {t('buttonAddFavorite')}
              <ArrowUp className="animate-bounce" />
            </button>
          </div>
        </div>
      </div>
  
      {/* Sección con info adicional */}
      <div className="flex flex-col lg:flex-row items-center justify-start gap-40 bg-[#1f1f2b] shadow-2xl px-16 py-12">
        <img
          src={game.gift_url}
          className="w-full max-w-md rounded-lg h-auto transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl"
          alt="Game GIF"
        />
        
        <div className="space-y-4 text-center lg:text-left">
          <p className="text-2xl sm:text-4xl font-bold text-gray-300">
            {t('genero')} <span className="font-normal text-white">{game.genero}</span>
          </p>
          <p className="text-2xl sm:text-4xl font-semibold text-gray-300">
            {t('empresa')} <span className="font-normal text-white">{game.empresa}</span>
          </p>
          <p className="text-2xl sm:text-4xl font-semibold text-gray-300">
            {t('rating')} <span className="font-normal text-white">{game.rating}</span>
          </p>
          <p className="text-2xl sm:text-4xl font-semibold text-gray-300">
            {t('released')} <span className="font-normal text-white">{game.released}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
