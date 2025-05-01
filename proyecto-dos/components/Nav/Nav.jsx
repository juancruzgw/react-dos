import { Link } from 'react-router-dom';
import Button from '../Button/Button.jsx';
import {	Gamepad,Languages, Heart , Star} from 'lucide-react';
import { useTranslation } from 'react-i18next';
const  Navbar = () =>  {
  const { t, i18n } = useTranslation();
  
  return (
    <nav className='w-full flex justify-between p-10 bg-[#202126]  text-white fixed top-0 z-50 mb-10'>
      <Link to="/" className='text-[50px]'>Notices Frikis</Link>
      <div className='flex space-x-4'>
      <Link to="/games-favorites">
        <Button text={"Favoritos "} className=""icon={"❤️"}/>
      </Link>
        <Button 
          onClick={() => i18n.changeLanguage(i18n.language === 'es' ? 'en' : 'es')}
          text={"Cambiar idioma"} 
          className="flex items-center space-x-2 bg-[#3b3c42] hover:bg-[#4a4b52] text-white px-4 py-2 rounded-lg transition-colors" 
          icon={<Languages />} 
        />
        {localStorage.setItem("language", i18n.language)}
      </div>
    </nav>
  );

  
}

export default Navbar;
