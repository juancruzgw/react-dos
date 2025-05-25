const Error = () => {
  return (
      <div className="relative flex justify-center items-center h-screen bg-[#222] text-white">
        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZW9sOWVkNW03NnpybmdkOHk1OTFuaW9tc25mYW05aTBqcDV0Ymp5eSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/kspVl6FzbdblOMKRmM/giphy.gif"
          alt="Error background"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0"
        />
    
        <div className="relative z-10 bg-black/70 px-8 py-6 rounded-xl shadow-2xl text-center w-[40%]">
          <h1 className="text-4xl font-bold mb-2">⚠️ Error</h1>
        </div>
      </div>
  );
}

export default Error