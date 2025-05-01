import Card from "../../components/Card/Card" 
import { useContext , useState} from "react";
import { GamesContext } from "../../components/FetchGames/FetchGames";
import BusquedaInput from "../../components/Busqueda/Busqueda"

const Home = () => {
    
    const { games} = useContext(GamesContext);
    const [gamesFilter, setGamesFilter] = useState([]);
    const [input, setInput] = useState();

    const inputSearched = (e) => {
        setInput(e.target.value)
    }

    const catchSearch = () => {
       const g = games.filter((obj) => obj.name === input)
       setGamesFilter(g);
    }

    const renderCards = () => {
        try{
            return (games.map((item) => {
                return <Card 
                    key={item.id}
                    id={item.id}
                    name={item.name} 
                    price={item.precio} 
                    button={"View More"}
                    img={item.logo}
                    liked={item.liked}
                />
            }))   
        }catch (error) {
            console.error("Error renderizando las tarjetas:", error);
            return <p>Ocurrió un error al mostrar las tarjetas.</p>;
        }
    }

    const renderFilterCard = () => {
        const existFilterGame = gamesFilter.length > 0;
        
        if (!existFilterGame && input !== "") {
            return <div className="bg-red-600 rounded-lg p-2 text-white">No encontrado...</div>;
        } else {
            return gamesFilter.map((item) => (
                <Card 
                    key={item.id}
                    id={item.id}
                    name={item.name} 
                    price={item.precio} 
                    button={"View More"}
                    img={item.logo}
                    liked={item.liked}
                />
            ));
        }
    };
    

    return (
        <main className="w-full h-full mt-36 bg-neutral-900 text-white ">
            <section>
                
                <div className="p-4 m-4 font-bold text-5xl ml-16  flex items-center justify-center">
                    <BusquedaInput  catchSearch={catchSearch} inputSearched={inputSearched}/>
                    
                </div>

                <div className="h-auto w-[90%] grid grid-cols-3 gap-10 p-6 mx-auto">
                    {renderFilterCard()}
                </div>

                <div className="h-auto w-[90%] grid grid-cols-3 gap-10 p-6 mx-auto">
                    {renderCards()}
                </div>
            </section>
        </main>
    )
}

export default Home

