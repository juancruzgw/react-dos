import { Heart} from 'lucide-react';
import { Link } from "react-router-dom";

const CardFavoritos = ({ id,name, price, button, img, liked}) => {
    
    const isLike = () => {
      return liked ? <Heart className="text-black-250 w-10 h-10 fill-red-500 hover:scale-120 cursor-pointer " /> : <Heart className="text-black-250 w-10 h-10 hover:scale-120 cursor-pointer " />
    }
    
    return (
        <div className='flex justify-between border-2 border-gray-700 rounded-lg p-1 bg-neutral-800 mt-20'>
            <div className="flex flex-row m-12 relative group h-60 w-38 bg-amber-50 rounded-xl  flex flex-col justify-between hover:scale-101 transition-transform duration-300 ease-in-out shadow-xl/30">
              <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover z-0 rounded-xl" />
            
              <div className="relative z-10 text-white p-4 flex justify-end text-4xl w-100">
                  </div>

                  <div className='flex flex-col  ml-20 h-40 relative z-10 text-white p-4 duration-300 ease-in-out backdrop-blur-sm hover:scale-101'>
                      <h2 className="text-4xl font-bold ">{name}</h2>
                  
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