import { useTranslation } from 'react-i18next';

const Footer = () => {  
     const { t, i18n } = useTranslation();
    return (
        <footer className="bg-[#1f1f2b] font-mono shadow-lg text-white py-4 h-70 border-t-[1px] border-t-stone-700">
            
            <div className="container mx-auto text-center p-4 pt-20">

                <p className="text-xl">© 2025 {t("copyright")}</p>
                <p className="text-xl">{t("authors")} Juan Cruz, Diego y Valentín </p>
            </div>

            <div className="flex justify-center mt-4 space-x-4 ">
                <a href="https://github.com/juancruzgw/react-dos" target='_blanck'>
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