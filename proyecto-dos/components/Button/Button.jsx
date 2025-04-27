
const button = ({ text, onClick , icon}) => {
    return (
        <button onClick={onClick} className="flex items-center justify-center bg-[#2a2a34] text-white font-bold py-2 px-4 rounded-lg hover:bg-[#1f1f24] transition duration-300 ease-in-out ">
            {icon && <div>{icon}</div>}
            {text}
        </button>
    );
}

export default button;