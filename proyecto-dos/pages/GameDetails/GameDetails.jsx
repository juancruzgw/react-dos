//console.log("GameDetails.jsx");
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";


const GameDetails = () => {
 const [game, setGames] = useState([]);
 const [favArray, setFavArray] = useState([]);

 const games = async () => {
  const juegos = await fetch(
    "https://680c06432ea307e081d2fe6b.mockapi.io/API/v1/juegos"
  );
  const juegos2 = await fetch(
    "https://680c06432ea307e081d2fe6b.mockapi.io/API/v1/juegos2"
  );
  const resp1 = await juegos.json();
  const resp2 = await juegos2.json();
  const resp = [...resp1, ...resp2];
  setGames(resp);
 };

 useEffect(() => {
  games();
  
 }, []);

 const { id } = useParams();

 const juego = game.find((juego) => juego.id === parseInt(id));

 console.log(juego);

  const handleAddGame = () => { 
    const nuevoArray = [ ...favArray, juego]
    
    setFavArray(nuevoArray);
  }
  
  

 if (!juego) {
  return <h2 className="text-center text-2xl mt-10">Juego no encontrado 😢</h2>;
 }

 return (
  <>
   <div
    className="w-full h-screen bg-cover bg-center flex items-center justify-start text-white backdrop-blur-sm bg-black/30 px-4 sm:px-8"
    style={{ backgroundImage: `url(${juego.background_image})` }}
   >
    <div className="bg-black/50 p-8 rounded-lg shadow-2xl max-w-2xl text-left w-full ml-12">
     <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 drop-shadow-lg animate-fade-in">
      {juego.name}
     </h1>

     <p className="text-2xl sm:text-3xl mb-4 bg-black/40 p-2 rounded-md backdrop-blur-sm">
      {`Precio: $${juego.precio}`}
     </p>

     <p className="text-lg sm:text-xl mb-8 text-left max-w-2xl">
      {juego.detalles}
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
     src={juego.gift_url}
     className="m-16 rounded-lg shadow-lg w-[40%] h-auto"
    />
    <div className="space-y-4 mb-8">
     <p className="text-4xl sm:text-5xl font-bold text-gray-300">
      Género: <span className="font-normal text-white">{juego.genero}</span>
     </p>
     <p className="text-4xl sm:text-5xl font-semibold text-gray-300">
      Empresa: <span className="font-normal text-white">{juego.empresa}</span>
     </p>
     <p className="text-4xl sm:text-5xl font-semibold text-gray-300">
      Rating: <span className="font-normal text-white">{juego.rating}</span>
     </p>
     <p className="text-4xl sm:text-5xl font-semibold text-gray-300">
      Fecha de lanzamiento:{" "}
      <span className="font-normal text-white">{juego.released}</span>
     </p>
    </div>
   </div>
  </>
 );
}

export default GameDetails;
