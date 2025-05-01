import { useTranslation } from "react-i18next";
import {Search} from "lucide-react"

const Busqueda = ({inputSearched, catchSearch}) => {    
    const { t } = useTranslation();
    return (
        <div className="flex items-center justify-center gap-4 mb-6 mt-8 h-20 lg:w-2/4 border rounded-2xl">
            <Search className="hidden md:block min-w-2/12"/>
            <input
                type="text"
                placeholder={t('search')}
                className="w-full p-2 text-3xl"
                onBlur={inputSearched}
                />
            <div>
                <button className="text-white flex text-center justify-center py-6 cursor-pointer border border-l-2 rounded-r-2xl text-2xl font-mono w-52 bg-gray-800 h-20" onClick={catchSearch}>{t('search')}</button>
            </div>
        </div>

    )
}

export default Busqueda;