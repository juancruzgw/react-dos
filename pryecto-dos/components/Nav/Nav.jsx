import { Link } from 'react-router-dom';

const  Navbar = () =>  {
  return (
    <nav className='w-100 border border-dark flex justify-around'>
      <Link to="/">Notice Frikis</Link>
      <Link to="/games-favorites">Fav ❤️</Link>
    </nav>
  );
}

export default Navbar;
