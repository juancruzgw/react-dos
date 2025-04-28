import Card from "../../components/Card/Card" 
import { useContext } from "react";
import { GamesContext } from "../../components/FetchGames/FetchGames";

const Home = () => {
    
     const { games, toggleLike } = useContext(GamesContext); 
    

    const renderCards = () => {
        return (games.map((item) => {
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
        <main className="w-full h-full mt-36">
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

