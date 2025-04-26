
const Home = () => {
    // const [game, setGames] = useState([]);
    
    // const games = async () => 
    // {
    //     const  juegos = await fetch("https://680c06432ea307e081d2fe6b.mockapi.io/API/v1/juegos")
    //     const  juegos2 = await fetch("https://680c06432ea307e081d2fe6b.mockapi.io/API/v1/juegos2")
    //     const resp1 = await juegos.json(); 
    //     const resp2 = await juegos2.json(); 
    //     const resp = [...resp1, ...resp2]
    //     setGames(resp)
    // } 
    
    // useEffect(() => {
    //     games()
    // },[])
        
    //   console.log(game)
    
    // if(game.length == 0){
    // return "Cargando..."
    // }

    return (
        <div>Home</div>
    )
}

export default Home




   // <div className="p-4">
    //   {game.map((juego) => (
    //     <div key={juego.id} className="border rounded-lg shadow-md p-4 mb-4 bg-white">

    //       <div className="text-lg font-bold">SOY {juego.id}</div>
    //       <div className="text-gray-700">Nombre: {juego.name}</div>
    //       <div className="text-gray-700">Género: {juego.genero}</div>
    //       <div className="text-gray-700">Empresa: {juego.empresa}</div>
    //       <div className="text-gray-700">Precio: {juego.precio}</div>
    //       <div className="text-gray-700">Lanzamiento: {juego.released}</div>

    //       <div className="text-blue-500 underline">
    //         <img src={juego.gift_url} target="_blank" rel="noopener noreferrer" />
    //       </div>

    //       <div>
    //         <img src={juego.background_image} alt={juego.name} className="w-full h-48 object-cover rounded-md mt-2"/>
    //       </div>

    //       <div className="text-yellow-500 font-semibold">Rating: {juego.rating}</div>
          
    //     </div>
    //   ))}
    // </div>
