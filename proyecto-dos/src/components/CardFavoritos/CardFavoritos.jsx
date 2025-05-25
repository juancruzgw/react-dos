import { Heart } from 'lucide-react';
import { useContext } from 'react';
import { GamesContext } from "../../components/FetchGames/FetchGames";

const CardFavoritos = ({ name, price, img, liked, id }) => {
  const { toggleLike } = useContext(GamesContext);

  const isLike = () => {
    return liked ? (
      <Heart
        className="text-black-250 w-8 h-8 sm:w-10 sm:h-10 fill-red-500 hover:scale-110 cursor-pointer"
        onClick={() => toggleLike(id)}
      />
    ) : (
      <Heart
        className="text-black-250 w-8 h-8 sm:w-10 sm:h-10 hover:scale-110 cursor-pointer"
        onClick={() => toggleLike(id)}
      />
    );
  };

  return (
    <div className="rounded-lg p-4 bg-neutral-800 mt-6 text-white">
      <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
        
        {/* Imagen */}
        <img
          src={img}
          alt={name}
          className="w-full sm:w-40 h-48 object-cover rounded-xl"
        />

        {/* Info */}
        <div className="flex-1 w-full flex flex-col gap-2">
          <h2 className="text-xl sm:text-3xl font-bold">{name}</h2>
          <p className="text-lg sm:text-xl font-semibold">${price}</p>
        </div>

        {/* Like */}
        <div className="self-start sm:self-center">
          {isLike()}
        </div>
      </div>
    </div>
  );
};

export default CardFavoritos;
