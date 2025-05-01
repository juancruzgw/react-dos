import { Heart} from 'lucide-react';
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GamesContext } from "../../components/FetchGames/FetchGames";

const Card = ({ id,name, price, button, img, liked}) => {
  
  const { toggleLike } = useContext(GamesContext);
    
  const isLike = () => {
    return liked ? (
      <Heart 
      className="text-black-250 w-10 h-10 fill-red-500 hover:scale-120 cursor-pointer" 
      onClick={() => {
        toggleLike(id);
      }} 
    />
    ):(
    <Heart 
      className="text-black-250 w-10 h-10 hover:scale-120 cursor-pointer" 
      onClick={() => {
        toggleLike(id);
      }} 
    />
    );  
  }
  
  return (
      <button className="relative group h-[75vh] bg-amber-50 rounded-xl overflow-hidden flex flex-col justify-between hover:scale-101 transition-transform duration-300 ease-in-out shadow-xl/30">
      <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover z-0" />
      
      <div className="relative z-10 text-white p-4 flex justify-end text-4xl">
        {isLike()}
      </div>
    
      <div className="fleax flex-col h-40 relative z-10 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out backdrop-blur-sm hover:scale-101">
        <h2 className="text-4xl font-bold">{name}</h2>

        <div className="mt-auto flex items-center justify-end gap-2">
        <p className="text-xl font-bold mr-auto">${price}</p>
        <Link
          to={`/games-details/${id}`}
          className="px-4 py-1 bg-black text-white rounded-2xl h-[30px] flex items-center justify-center">
          {button}
        </Link>
        </div>

      </div>
      </button>
    );
  };
  
  export default Card;
  
