export const handleErrorResponse = (response) => {
    if (!response.ok) {
        throw new Error("Error al recuperar los juegos en fetchGames.jsx");
      }
}