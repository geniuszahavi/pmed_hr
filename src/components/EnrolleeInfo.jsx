

function EnrolleeInfo({ title, text }) {
    return (
        <div className="flex flex-col gap-1 mb-3">
            <span className="text-[12px] text-[#677597] font-semibold">{ title }</span>
            <span className="text-[16px] text-[#051438] font-medium">{ text }</span>
        </div>
    );
}

export default EnrolleeInfo;