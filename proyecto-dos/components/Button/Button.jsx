
const button = ({ text, onClick , icon}) => {
    return (
            <button
            onClick={onClick}
            className="flex items-center justify-center gap-2 bg-[#2a2a34] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#1f1f24] transition duration-300 ease-in-out text-xs sm:text-2xl"
            >
            {icon && <div>{icon}</div>}
            <span>{text}</span>
            </button>

    );
}

export default button;