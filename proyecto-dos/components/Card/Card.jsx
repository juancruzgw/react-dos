import { Heart} from 'lucide-react';

const Card = ({ name, price, button, img }) => {
    return (
      <div className="relative group border border-dark h-[75vh] bg-amber-50 rounded-md overflow-hidden flex flex-col justify-between hover:scale-105 transition-transform duration-300 ease-in-out shadow-xl/30">
        <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover z-0" />
        
        <div className="relative z-10 text-white p-4 flex justify-end text-4xl">
          <Heart className="text-black-250 w-10 h-10 fill-red-500 hover:scale-120 cursor:pointer " />
        </div>
  
        <div className="flex flex-col h-40 relative z-10 text-white p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out backdrop-blur-sm">
          <h2 className="text-4xl font-bold">{name}</h2>

          <div className="mt-auto flex items-center justify-end gap-2">
            <p className="text-xl font-bold mr-auto">${price}</p>
            <button className="px-4 py-1 bg-black text-white rounded-2xl h-[30px]">{button}</button>
          </div>

        </div>
      </div>
    );
  };
  
  export default Card;
  
