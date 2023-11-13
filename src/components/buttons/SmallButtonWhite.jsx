

function SmallButtonWhite({ text, type, onClick }) {
    return (
        <button className="bg-white border border-[#0B0C7D] rounded-[10px] py-[10px] px-[16px] text-[15px] text-[#0B0C7D]" type={type} onClick={onClick}>
            {text}
        </button>
    );
}

export default SmallButtonWhite;