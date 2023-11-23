import { MinusCircleIcon, PlusCircleIcon, XIcon } from "@heroicons/react/outline";
import document from "@/assets/text-document.png";
import smallDocument from "@/assets/small-document.png";
import { SmallButton } from "..";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import axios from "axios";


function UploadStaffDetailModal({ visible,disabled, uploadFile, onFileChange, file, closeModal, progress }) {
    
    return (
        <div className={`${
            visible
              ? "fixed top-0 left-0 w-full h-full bg-gray-500 bg-opacity-50 z-50"
              : "hidden"
          }`}>
<div  className={`${ visible
            ? "bg-[#EDF0F8] fixed w-[80%] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-[16px] px-[32px] z-[200]"
            : "hidden"
        }`}>

            <div className="mb-6 flex justify-between items-center">
                <h4 className="text-[18px] text-[#051438] font-semibold">Upload staff details</h4>
                <button className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-[#DFE2E9]" onClick={closeModal}>
                    <XIcon className="w-5 h-5" />
                </button>
            </div>

            <form className="h-full" onSubmit={uploadFile}>
                <div className="bg-white rounded-[10px] p-[16px] border border-[#DFE2E9] mb-4 h-[400px] flex flex-col items-center justify-center ">
                    <label htmlFor="file" className="flex flex-col items-center justify-center w-full rounded-lg cursor-pointer">
                        
                            <Image src={document} width="83" height="" alt="" className="mb-5" />
                            <h5 className="text-[#051438] text-[24px] font-semibold mb-2">Upload your file here</h5>
                            <p className="text-[#0B0C7D] text-[16px] underline underline-offset-4 font-semibold mb-4">Click here to select file from your computer</p>

                            <p className="text-[#051438] text-[16px] font-medium mb-4">(File allowed: CSV)</p>
                       
                        <input id="file" name="file" onChange={onFileChange} type="file" className="hidden" />
                    </label>
                    <Link href="/staff_.csv" passHref legacyBehavior>
            <a className="text-[#0B0C7D] bg-white rounded-[10px] py-[12px] px-[16px] border border-[#0B0C7D] text-center font-semibold" download>
              Download sample CSV here
            </a>
          </Link>
                </div> 
                {/* { file !== null && <div>
                    <h5 className="text-[#051438] text-[24px] font-semibold mb-4">Upload files {progress}</h5>
                    <div className="bg-white rounded-[10px] p-[16px] border border-[#DFE2E9] mb-4 flex gap-6 items-center">
                        
                        <Image src={smallDocument} width="40" height="" alt="" className="" />

                        <div className="w-full flex flex-col gap-5">
                            <div className="flex justify-between items-center">
                                <span className="text-[#051438] text-[16px] font-medium">{ file?.name }</span>
                                <p className="flex items-center gap-2">
                                    <span className="text-[#677597] text-[14px] font-medium"> { file?.size }{ file?.size > 1000 ? "MB" : "KB" }</span>
                                    <span className="flex h-[10px] w-[1px] bg-[#677597]"></span>
                                    <span className="text-[#677597] text-[14px] font-medium">{ progress < 100 ? "Uploading": "Completed"}</span>
                                </p>
                                {progress > 0 && progress < 100 && (
        <div>
          <p>Upload Progress: {progress}%</p>
          <progress value={progress} max="100" />
        </div>
      )}
                            </div>
                            <div className="w-full bg-[#DFE2E9] rounded-[6px] relative flex h-[6px]">
                                <div className="h-full bg-[#0000CC] rounded-[6px]" style={{ width: `${progress}%`}}></div>
                            </div>
                        </div>

                        <button className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-[#DFE2E9]" onClick={() => setFile(null)}>
                            <XIcon className="w-5 h-5" />
                        </button>

                    </div>
                    <div className="flex justify-end">
                        <SmallButton text="Save" type="submit" />
                    </div>
                </div> } */}

{progress > 0 && (
              <div>
                <h5 className="text-[#051438] text-[24px] font-semibold mb-4">
                  Upload files
                </h5>
                <div className="bg-white rounded-[10px] p-[16px] border border-[#DFE2E9] mb-4 flex gap-6 items-center">
                  <Image
                    src={smallDocument}
                    width="40"
                    height=""
                    alt=""
                    className=""
                  />

                  <div className="w-full flex flex-col gap-5">
                    <div className="flex justify-between items-center">
                      <span className="text-[#051438] text-[16px] font-medium">
                        {file?.name}
                      </span>
                      <p className="flex items-center gap-2">
                        <span className="text-[#677597] text-[14px] font-medium">
                          {progress < 100
                            ? `${((file?.size || 0) / 1024).toFixed(2)}KB`
                            : `${(file?.size / 1024).toFixed(2)}KB`}
                        </span>
                        <span className="flex h-[10px] w-[1px] bg-[#677597]"></span>
                        <span className="text-[#677597] text-[14px] font-medium">
                          {progress < 100 ? "Uploading" : "Completed"}
                        </span>
                      </p>
                    </div>
                    <div className="w-full bg-[#DFE2E9] rounded-[6px] relative flex h-[6px]">
                      <div
                        className="w-[80%] h-full bg-[#0000CC] rounded-[6px]"
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="flex justify-end">

              {/* <SmallButton text="Save" onClick={} /> */}
            </div>
          
                  <button
                    className="w-[32px] h-[32px] rounded-full flex justify-center items-center bg-[#DFE2E9]"
                    onClick={closeModal}
                  >
                    <XIcon className="w-5 h-5" />
                  </button>
                </div>
               <div className="flex justify-end">

                <SmallButton
                text="Save"
                onClick={uploadFile}
                disabled={disabled}
              />
               </div>
              </div>
            )}

            </form>

</div>

        </div>
    );
}

export default UploadStaffDetailModal;