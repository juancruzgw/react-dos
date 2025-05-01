

const Busqueda = ({inputSearched, catchSearch}) => {    

    return (
        <div className="flex items-center justify-center gap-4 mb-6 mt-8  w-1/2">
            <input
                type="text"
                placeholder="Buscar..."
                className="w-full p-2 border border-gray-300 rounded-2xl "
                onBlur={inputSearched}
                />
                
            <button className="text-white px-4 py-2 rounded-lg cursor-pointer" onClick={catchSearch}>Buscar</button>
        </div>

    )
}

export default Busqueda;