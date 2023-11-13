

function Button({ text, type, disabled, spin, onClick }) {
    return (
        <button className="bg-[#0B0C7D] border border-[#0B0C7D] rounded-[10px] py-[12px] px-[16px] w-full text-center flex justify-center items-center" onClick={onClick} type={type} disabled={disabled}>
            { !spin && <span className="text-white">{text}</span>}
            { spin && <span className="loader"></span> }
        </button>
    );
}

export default Button;