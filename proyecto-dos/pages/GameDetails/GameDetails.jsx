import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { GamesContext } from "../../components/FetchGames/FetchGames";
import { ArrowUp } from "lucide-react";

const GameDetails = () => {
  const { id } = useParams();
  const { toggleLike } = useContext(GamesContext);

  const [game, setGame] = useState(null);
  const [error, setError] = useState(null); // <-- estado de error

  const obtengoJuegoPorid = async (id) => {
    try {
      const response = await fetch(`https://680c06432ea307e081d2fe6b.mockapi.io/API/v1/juegos/${id}`);
      if (!response.ok) {
        throw new Error("404 This is not the web page you are looking for.");
      }
      const data = await response.json();
      setGame(data);
    } catch (error) {
      setError(error.message); // <-- guardamos el mensaje de error
    }
  };

  useEffect(() => {
    obtengoJuegoPorid(id);
  }, [id]);

  if (error || id == "") {
    // Mostrar error si lo hay
    return (
      <div className="relative flex justify-center items-center h-screen bg-[#222] text-white">
        {/* Imagen de fondo animada */}
        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW9sOWVkNW03NnpybmdkOHk1OTFuaW9tc25mYW05aTBqcDV0Ymp5eSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kspVl6FzbdblOMKRmM/giphy.gif"
          alt="Error background"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0"
        />
    
        {/* Texto de error sobre la imagen */}
        <div className="relative z-10 bg-black/70 px-8 py-6 rounded-xl shadow-2xl text-center w-[40%]">
          <h1 className="text-4xl font-bold mb-2">⚠️ Error</h1>
          <p className="text-xl">{error}</p>
        </div>
      </div>
    );
  
  }

  // Mientras carga
  if (!game) {
    return (
      <div className="flex justify-center items-center h-screen text-white text-2xl">
        Cargando...
      </div>
    );
  }

  // Render del contenido si todo está OK
  return (
    <>
     <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-start text-white backdrop-blur-sm bg-black/30 px-4 sm:px-8 shadow-2xl mt-38"
      style={{ backgroundImage: `url(${game.background_image})` }}
     >
      <div className="bg-black/50 p-8 rounded-lg shadow-2xl max-w-2xl text-left w-full ml-12 ">
       <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 drop-shadow-lg animate-fade-in">
        {game.name}
       </h1>
  
       <p className="text-2xl sm:text-3xl mb-4 bg-black/40 p-2 rounded-md backdrop-blur-sm">
        {`Precio: $${game.precio}`}
       </p>
  
       <p className="text-lg sm:text-xl mb-8 text-left max-w-2xl">
        {game.detalles}
       </p>
  
       <div className="flex justify-end">
        <button
         onClick={() => toggleLike(game.id)}
         className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 rounded-full text-white font-semibold shadow-lg transition duration-300 ease-in-out"
        >
         Agregar a lista de favoritos
         <ArrowUp className="animate-bounce" />
        </button>
       </div>
      </div>
     </div>
     <div className="flex items-center justify-start gap-12  bg-[#222]  shadow-2xl ">
      <img
       src={game.gift_url}
       className="m-16 border-gray-700 border-8 rounded-lg shadow-2xl w-[40%] h-auto"
      />
      <div className="space-y-4 mb-8">
       <p className="text-4xl sm:text-5xl font-bold text-gray-300">
        Género: <span className="font-normal text-white">{game.genero}</span>
       </p>
       <p className="text-4xl sm:text-5xl font-semibold text-gray-300">
        Empresa: <span className="font-normal text-white">{game.empresa}</span>
       </p>
       <p className="text-4xl sm:text-5xl font-semibold text-gray-300">
        Rating: <span className="font-normal text-white">{game.rating}</span>
       </p>
       <p className="text-4xl sm:text-5xl font-semibold text-gray-300">
        Fecha de lanzamiento:{" "}
        <span className="font-normal text-white">{game.released}</span>
       </p>
      </div>
     </div>
    </>
   );
};

export default GameDetails;
