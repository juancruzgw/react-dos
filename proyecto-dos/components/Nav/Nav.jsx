import { Link } from 'react-router-dom';
import Button from '../Button/Button.jsx';
import { Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const Navbar = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    localStorage.setItem("i18nLanguage", lang);
  };
  
  useEffect(() => {
    const storedLanguage = localStorage.getItem("i18nLanguage");
  
    if (storedLanguage) {
      i18n.changeLanguage(storedLanguage);
    } else {
      const defaultLang = 'es';
      i18n.changeLanguage(defaultLang);
      localStorage.setItem("i18nLanguage", defaultLang);
    }

  }, []);



  return (
    <nav className="w-full h-40 flex items-center justify-between px-8 py-4 bg-[#1f1f2b] text-white fixed top-0 z-50 shadow-md">
      <Link to="/" className="ml-4">
        <img
          className="w-16 h-16 transition-transform duration-300 ease-in-out hover:scale-110"
          src="https://pngimg.com/d/joystick_PNG83299.png"
          alt="logo"
        />
      </Link>

      <div className="flex gap-4 items-center">
        <Link to="/games-favorites">
          <Button text={t('buttonFavorites')} icon="❤️" />
        </Link>

        <Button
          onClick={() => handleLanguageChange(i18n.language === 'es' ? 'en' : 'es')}
          text={t('buttonTranslate')}
          className="flex items-center gap-2 bg-[#2e2f3d] hover:bg-[#3c3d4a] text-white px-4 py-2 rounded-lg transition-colors"
          icon={<Languages />}
        />

        
      </div>
    </nav>
  );
};

export default Navbar;