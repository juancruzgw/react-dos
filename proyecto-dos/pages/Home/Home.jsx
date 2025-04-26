import Card from "../../components/Card/Card" 
import { useEffect, useState } from "react";

/*
 <pagina main>
    <componente useState>
    <componente useState>
 </pagina main>
*/

const Home = () => {
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
        
        const gamesUser = game
    },[])
    
    if(game.length == 0){
        return <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="w-16 h-16 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
               </div>
    }

    const renderCards = () => {
        return (game.map((item) => {
            return <Card 
                key={item.id}
                id={item.id}
                name={item.name} 
                price={item.precio} 
                button={"View More"}
                img={item.logo}
            />
        }))
    }

    return (
        <main className="w-full h-full border border-dark ">
            <section>
                <h1 className="p-4 m-4 font-bold text-5xl ml-16  text-amber-500">¡New Games 2025!</h1>
                <div className="h-auto w-[90%] grid grid-cols-3 gap-10 p-6 mx-auto">
                    {renderCards()}
                </div>
            </section>
        </main>

    )
}

export default Home

