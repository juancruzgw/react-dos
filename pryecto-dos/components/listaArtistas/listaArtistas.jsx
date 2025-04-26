const ArtistList = ({ results }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {results.length > 0 ? (
        results.map((artist, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h2 className="text-xl font-semibold text-center mb-4">{artist.name}</h2>
            <div className="flex justify-center">
              <img
                src={artist.images[0]?.url}
                alt={artist.name}
                className="rounded-full border-4 border-gray-200"
                width="100"
              />
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-lg text-gray-500">No se encontraron resultados.</p>
      )}
    </div>
  );
  
  export default ArtistList;