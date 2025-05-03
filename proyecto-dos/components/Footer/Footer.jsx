import { useTranslation } from 'react-i18next';

const Footer = () => {  
     const { t, i18n } = useTranslation();
    return (
        <footer className="bg-[#1f1f2b] font-mono shadow-lg text-white h-70 border-t-[1px] h-auto border-t-stone-700">
            
            <div className="container mx-auto text-center px-4 pt-5 flex flex-col items-center space-y-4">

                <p className="text-base sm:text-sm text-md">© 2025 {t("copyright")}</p>
                <p className="text-base sm:text-sm text-md">{t("authors")} Juan Cruz, Diego y Valentín </p>
                <p className="text-base sm:text-sm text-md">{t("greeting")} <a className="text-blue-500 underline"  target="_blank" href="https://github.com/agustinchiarotto"> Agustín Chiarotto </a> ☕</p>
            </div>

            <div className="flex justify-center pt-4 space-x-4 ">
                <a href="https://github.com/juancruzgw/react-dos" target='_blank'>
                    <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" className="w-10 h-10  animate-bounce drop-shadow-white" />   
                </a>

                <div>
                <p className="text-xl"></p>

            </div>
            </div>
            
        </footer>
            )    
}
export default Footer;