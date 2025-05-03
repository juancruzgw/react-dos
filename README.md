# 🎮 DOMINIO: Jueguitos 2025

Una aplicación web desarrollada en **React** que muestra una colección de videojuegos populares, permite ver detalles, agregar a favoritos, buscar y alternar entre idiomas. Usa una API simulada con [MockAPI](https://680c06432ea307e081d2fe6b.mockapi.io/juegos) <-- ENDPOINT y está diseñada con **Tailwind CSS**.

## DEPLOY https://react-dos.vercel.app/

---

## 👤 Integrantes

- Juan Cruz Geslowski FAI [4881]
- Diego Avila Rios FAI [4877]
- Valentín Bustos Villar FAI [4019]

## 🚀 Features

- ✅ Listado de juegos populares
- ❤️ Agregar y quitar favoritos
- 🌍 Soporte multilenguaje (ES / EN)
- 🔎 Buscador en tiempo real
- 📄 Vista de detalles por juego
- 📱 Responsive y diseño moderno
- 🧠 Estado global simple con `useState`
- ☁️ API simulada vía MockAPI

---

## 🛠️ Tecnologías

- React
- React Router
- Tailwind CSS
- MockAPI
- i18next
- Lucide React

---

## 🗂️ Estructura del proyecto

proyecto-dos/
│
├── components/
│ ├── Busqueda/ # Input de búsqueda
│ ├── Button/ # Botón reutilizable
│ ├── Card/ # Card de juego
│ ├── CardFavoritos/ # Card para juegos favoritos
│ ├── FetchGames/ # Lógica para fetch
│ ├── Footer/ # Footer de la app
│ ├── Nav/ # Navbar con idioma y favoritos (HEADER)
│ └── ScrollTop/ # Scroll to top al navegar
│
├── locales/
│ ├── en/translation.json
│ └── es/translation.json
│
├── pages/
│ ├── GameDetails/
│ ├── GamesFavorites/
│ └── Home/
│
├── src/
│ ├── App.jsx
│ ├── main.jsx
│ └── utils/i18n.js
│
├── public/
│ └── index.html
│
├── package.json
│
├── README.md

## 📦 Instalación

```bash
git clone https://github.com/juancruzgw/react-dos
cd react-dos
npm install
npm run dev


```
