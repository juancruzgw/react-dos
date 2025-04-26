const Card = ({ name, price, button, img }) => {
    return (
      <div className="relative border border-dark h-80 bg-amber-50 rounded-md overflow-hidden flex flex-col justify-between hover:scale-105 transition-transform duration-300 ease-in-out">
        <img src={img} alt="" className="absolute inset-0 w-full h-full object-cover z-0" />
        
        <div className="relative z-10 text-white p-4 flex justify-end">
          ❤️
        </div>
  
        <div className="relative z-10 text-white p-4 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-lg">{price}</p>
          <button className="px-4 py-1 bg-black text-white rounded-2xl">{button}</button>
        </div>
      </div>
    );
  };
  
  export default Card;
  
