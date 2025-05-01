import { useTranslation } from "react-i18next";


const Busqueda = ({inputSearched, catchSearch}) => {    
    const { t } = useTranslation();
    console.log(catchSearch);
    return (
        <div className="flex items-center justify-center gap-4 mb-6 mt-8  w-1/2">
            <input
                type="text"
                placeholder={t('search')}
                className="w-full p-2 border border-gray-300 rounded-2xl "
                onBlur={inputSearched}
                />
                
            <button className="text-white px-4 py-2 rounded-lg cursor-pointer" onClick={catchSearch}>{t('search')}</button>
        </div>

    )
}

export default Busqueda;