import { useTranslation } from "react-i18next";
import { Search } from "lucide-react";

const Busqueda = ({ inputSearched, catchSearch }) => {    
    const { t } = useTranslation();
    return (
        <div className="flex items-center justify-between gap-4 mb-6 mt-8 px-4 py-2 max-w-3xl w-full border border-gray-700 rounded-2xl shadow-lg bg-gradient-to-r from-gray-800 to-black">
            <Search className="hidden md:block text-white w-8 h-8"/>
            <input
                type="text"
                placeholder={t('search')}
                className="w-full p-3 text-xl hover:border-none"
                onBlur={inputSearched}
            />
            <div>
                <button
                    className="flex items-center justify-center py-3 px-8 cursor-pointer border border-gray-600 rounded-2xl text-xl font-semibold text-white bg-blue-800 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                    onClick={catchSearch}
                >
                    {t('search')}
                </button>
            </div>
        </div>
    );
}

export default Busqueda;
