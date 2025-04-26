//console.log("GameDetails.jsx");
import { useParams } from "react-router-dom";
import {  useEffect,useState } from "react";
const GameDetails = () => {

    const [game, setGames] = useState([]);
    const games = async () => 
        {
            const  juegos = await fetch("https://680c06432ea307e081d2fe6b.mockapi.io/API/v1/juegos")
            const  juegos2 = await fetch("https://680c06432ea307e081d2fe6b.mockapi.io/API/v1/juegos2")
            const resp1 = await juegos.json(); 
            const resp2 = await juegos2.json(); 
            const resp = [...resp1, ...resp2]
            setGames(resp)
        } 
        
        useEffect(() => {
            games()
        },[])
            
    const { id } = useParams();
    
    console.log(id);
  

    const juegos = game.find((juego) => juego.id === parseInt(id));

    console.log(game);
    
    if (!juegos) {
      return <h2 className="text-center text-2xl mt-10">Juego no encontrado 😢</h2>;
    }
  
     return(
      <div
        className="w-full h-screen bg-cover bg-center flex flex-col items-center justify-center text-white"
        style={{ backgroundImage: `url(${juegos.gift_url})` }}
      >
        <h1 className="text-5xl font-bold mb-4">{juegos.name}</h1>
        <p className="text-2xl mb-2">Precio: ${juegos.precio}</p>
        <p className="text-xl mb-4">{juegos.detalles}</p>
        <button className="px-6 py-2 bg-black bg-opacity-70 rounded-md">Comprar</button>
      </div>
    );
  };
  export default GameDetails;