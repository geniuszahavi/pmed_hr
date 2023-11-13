import { ChevronRightIcon } from "@heroicons/react/outline";


function OrganizationRow({ organizations, openOrg }) {
    return (
        <>

            { organizations.map((org, index) => <button key={index} className="mb-3 text-left rounded-[10px] px-[16px] bg-white w-full flex justify-between items-start pt-2 pb-2"
                onClick={() => openOrg(org.id)}>
                <div className="flex flex-col gap-1">
                    <span className="text-[#051438] text-[16px] font-medium">{org?.organization_name}</span>
                    <span className="text-[#677597] text-[14px] font-medium">ID: {org?.organization_id}</span>
                </div>

                <div className="flex flex-col">
                    <span className="text-[#051438] text-[16px] font-medium">{org?.organization_contact_first_name} {org?.organization_contact_last_name}</span>
                    <span className="text-[14px] font-medium text-[#677597]">{ org?.organization_contact_email}</span>
                </div>

                <div className="flex flex-col">
                    <span className="text-[#051438] text-[16px] font-medium">3,000</span>
                    <p className="flex gap-1">
                        <span className="text-[14px] font-medium text-[#677597]">Total dependants:</span>
                        <span className="text-[#051438] text-[14px] font-medium">200</span>
                    </p>
                </div>

                <div className="flex gap-8">
                    <span className="text-[#051438] text-[16px] font-medium">Bronze, Silver, Gold, Diamond Xtra, Platinum</span>
                    <ChevronRightIcon className="h4 w-4" />
                </div>
            </button>)}
        
        </>
        
    );
}

export default OrganizationRow;