import Button from "../../components/Button/Button";
import { useState } from "react";
import { useContext } from "react";
import { GamesContext } from "../../components/FetchGames/FetchGames";
import Card from "../../components/Card/Card";
import { useEffect } from "react";


const GamesFavorites = () => {
    
    const { games, toggleLike } = useContext(GamesContext);

    const [favs, setFavs] = useState([]);

    useEffect(() => {
        const favs = games.filter((item) => item.liked === true);
        setFavs(favs);
    }
    , [games]);

    console.log(favs);

    const renderCards = () => {
        return (favs.map((item) => {
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
  <main className="h-[100vh]">
   <section>
    <div>
     <Button text={"Favs"} icon={"🪤"} />
    </div>
    <div className="text-white">
     <h1>List Favorites</h1>
     <div>
      {/* <CardRow/> */}
      <div className="flex flex-row justify-between items-end p-4 m-4 border border-dark">
       {renderCards()}
      </div>
     </div>
    </div>
   </section>
  </main>
 );
};

export default GamesFavorites;