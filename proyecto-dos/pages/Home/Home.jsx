import Card from "../../components/Card/Card" 
import { useContext , useState} from "react";
import { GamesContext } from "../../components/FetchGames/FetchGames";
import BusquedaInput from "../../components/Busqueda/Busqueda"
import { useTranslation } from "react-i18next";

const Home = () => {
    
    const { games} = useContext(GamesContext);
    const [gamesFilter, setGamesFilter] = useState([]);
    const [input, setInput] = useState();
    const { t } = useTranslation();
    
    const inputSearched = (e) => {
        setInput(e.target.value)
    }

    const catchSearch = () => {
        const g = games.filter((obj) => obj.name.toLowerCase().includes(input.toLowerCase()));
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
                    button={t("view more")}
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
        
        if (!existFilterGame && input) {
            // mejorar logica a la hora de buscar ...
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
        <main
          className="w-full min-h-screen mt-36 bg-neutral-900 text-white bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: `url('https://www.solofondos.com/wp-content/uploads/2021/03/Redmi-Note-5-Styled-Wallpapers-22.jpg')`,
          }}
        >
          <section>
            <div className="p-4 m-4 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl flex items-center justify-center">
              <BusquedaInput catchSearch={catchSearch} inputSearched={inputSearched} />
            </div>
      
            <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mx-auto">
              {renderFilterCard()}
            </div>
      
            <div className="w-[90%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 mx-auto">
              {renderCards()}
            </div>
          </section>
        </main>
      );
}

export default Home

