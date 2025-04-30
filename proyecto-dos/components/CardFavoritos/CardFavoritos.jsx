import { Heart} from 'lucide-react';
import { Link } from "react-router-dom";

const CardFavoritos = ({ id,name, price, button, img, liked}) => {
    
    const isLike = () => {
      return liked ? <Heart className="text-black-250 w-10 h-10 fill-red-500 hover:scale-120 cursor-pointer " /> : <Heart className="text-black-250 w-10 h-10 hover:scale-120 cursor-pointer " />
    }
    
    return (
        <div className='flex  rounded-lg p-1 bg-neutral-800 mt-20 text-dark'>
            <div className="flex flex-row flex-wrap items-center m-12 relative group h-60 rounded-xl w-full   justify-between hover:scale-101 transition-transform duration-300 ease-in-out shadow-xl/30">
              
                  <div className=''>
                    <img src={img} alt="" className="absolute inset-0 h-full object-cover z-0 rounded-xl" />
                  </div>
            
                  <div className='flex relative z-10 text-dark duration-300 ease-in-out hover:scale-101'>
                      <div className="text-4xl font-bold ">{name}</div>
                  
                      <div className="mt-auto flex items-center justify-end gap-2">
              
                  </div>

              </div>

              <div>
                <p className="text-xl font-bold mr-auto ">${price}</p>
              </div>

              <div>
                {isLike()}
              </div>

            </div>
        </div>
      );
    };
    
    export default CardFavoritos;