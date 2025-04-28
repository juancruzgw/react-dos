import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";


const GameDetails = ({games , setGames}) => {
 const [game, setGame] = useState([]);
//  const games = async () => {
//   const juegos = await fetch(
//     "https://680c06432ea307e081d2fe6b.mockapi.io/API/v1/juegos"
//   );
//   const resp = await juegos.json();
//   setGames(resp);
//  };

//  useEffect(() => {
//   games();
//  }, []);

 const { id } = useParams();

  useState(()=> {
    setGame(games.find((game) => game.id === parseInt(id)))
  },[],game)


  const handleAddGame = () => { 
    const gameislike = { ...game, like: !game.like }
    setGames(gameislike)
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
      onClick={handleAddGame}
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
}

export default GameDetails;
