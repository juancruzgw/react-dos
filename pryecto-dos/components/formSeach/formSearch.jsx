
const SearchForm = ({ consulta, setConsulta, handleSubmit }) => (
  <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4 mt-8">
  <input
    type="text"
    placeholder="Buscar artista"
    value={consulta}
    onChange={(e) => setConsulta(e.target.value)}
    className="w-80 p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-green-500 transition-all duration-300"
  />
  <button
    type="submit"
    className="w-24 p-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all duration-300"
  >
    Buscar
  </button>
</form>
  );
  
  export default SearchForm;