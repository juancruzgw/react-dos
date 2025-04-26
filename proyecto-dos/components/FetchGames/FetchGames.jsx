import { useEffect, useState } from "react";

const FetchGames = () => {
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

        return game;
 }
 
 export default FetchGames