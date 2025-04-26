import { Link } from 'react-router-dom';
import Button from '../Button/Button.jsx';

const  Navbar = () =>  {
  return (
    <nav className='w-full flex justify-between p-10 bg-[#202126] text-white'>
      <Link to="/">📰Notices Frikis</Link>
      <Link to="/games-favorites">
        <Button text={"Favs"} icon={"❤️"}/>
      </Link>
    </nav>
  );
}

export default Navbar;
