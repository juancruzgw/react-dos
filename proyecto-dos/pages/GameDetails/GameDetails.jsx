import { useParams } from "react-router-dom";
import { useContext, useState , useEffect } from "react";
import { GamesContext } from "../../components/FetchGames/FetchGames";
import { ArrowUp } from "lucide-react";


const GameDetails = () => {

  const { id } = useParams();
  const {toggleLike} = useContext(GamesContext)

  const [game, setGame] = useState([]);

  const obtengoJuegoPorid = async (id) => {
    try {

      const response = await fetch(`https://680c06432ea307e081d2fe6b.mockapi.io/API/v1/juegos/${id}`);
      if (!response.ok) {
        throw new Error("Error al recuperar el juego");
      }
      const data = await response.json();
      setGame(data);

    } catch (error) {
      console.error(error);
    }
  };

  useEffect(()=> {
    obtengoJuegoPorid(id)
  },[])

  if (!game) {
    return <p>game no encontrado</p>;
  }

  return (
  <>
   <div
    className="w-full h-screen bg-cover bg-center flex items-center justify-start text-white backdrop-blur-sm bg-black/30 px-4 sm:px-8 shadow-2xl mt-38"
    style={{ backgroundImage: `url(${game.background_image})` }}
   >
    <div className="bg-black/50 p-8 rounded-lg shadow-2xl max-w-2xl text-left w-full ml-12">
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
       className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 rounded-full text-white font-semibold shadow-lg transition duration-300 ease-in-out"
      >
       Agregar a lista de favoritos
       <ArrowUp className="animate-bounce" />
      </button>
     </div>
    </div>
   </div>
   <div className="flex items-center justify-start gap-12 ml-12">
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