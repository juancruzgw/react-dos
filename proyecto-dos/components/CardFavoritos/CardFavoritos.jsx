import { Heart} from 'lucide-react';
import { use, useContext, useEffect } from 'react';
import { GamesContext } from "../../components/FetchGames/FetchGames";


const CardFavoritos = ({ name, price, img, liked, id}) => {
    const { toggleLike } = useContext(GamesContext);
    
    const isLike = () => {
      console.log("Liked status:", liked);
      return liked ? (
      <Heart 
      className="text-black-250 w-10 h-10 fill-red-500 hover:scale-120 cursor-pointer" 
      onClick={() => {
        console.log("Heart clicked - toggling like for:", name);
        toggleLike(id);
      }} 
      />
      ):(
      <Heart 
      className="text-black-250 w-10 h-10 hover:scale-120 cursor-pointer" 
      onClick={() => {
        console.log("Heart clicked - toggling like for:", name);
        toggleLike(id);
      }} 
      />
      );
    }
    
    return (
        <div className='flex  rounded-lg p-1 bg-neutral-800 mt-10 text-dark'>
            <div className="flex flex-row flex-wrap items-center m-2 relative group h-60 rounded-xl w-full   justify-between hover:scale-101 transition-transform duration-300 ease-in-out shadow-xl/30">
              
                  <div className=''>
                    <img src={img} alt="" className=" h-75 w-40 absolute inset-0 h-full object-cover z-0 rounded-xl mr-12" />
                  </div>
            
                  <div className='flex relative z-10 text-dark duration-300 ease-in-out hover:scale-101 ml-12'>
                      <div className="text-4xl font-bold h-auto w-100 ">{name}</div>
                  
                      <div className="mt-auto flex items-center justify-end gap-2">
              
                  </div>

              </div>

              <div>
                <p className="text-xl font-bold mr-auto ">${price}</p>
              </div>

              <div className='mr-12'>
                {isLike()}
              </div>

            </div>
        </div>
      );
    };
    
    export default CardFavoritos;