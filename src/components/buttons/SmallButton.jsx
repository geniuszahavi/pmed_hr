

function SmallButton({ text, type, onClick, disabled }) {
    return (
        <button className="bg-[#0B0C7D] disabled:bg-[#A6AFC2] disabled:border-[#A6AFC2] border border-[#0B0C7D] rounded-[10px] py-[10px] px-[16px] text-[15px] text-white"
         type={type} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
}

export default SmallButton;