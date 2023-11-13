

function Button({ text, type, disabled, spin }) {
    return (
        <button className="bg-[#0B0C7D] border border-[#0B0C7D] rounded-[10px] py-[12px] px-[16px] w-full text-center flex justify-center items-center" type={type} disabled={disabled}>
            { !spin && <span className="text-white">{text}</span>}
            { spin && <span className="loader"></span> }
        </button>
    );
}

export default Button;