'use client'

import { createZip } from "@/app/lib/imageHandling";
import { useState } from "react";

const zipSVG = (
    <svg className="stroke-current h-[25px] w-[25px] xs:h-[40px] xs:w-[40px]" width="40px" height="40px" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.6136 15.3473L17.8651 10.9766L21 13.9844M6.96484 19L11.9688 13.9766L17.9727 19M9.96875 9.97656C9.96875 11.0811 9.07332 11.9766 7.96875 11.9766C6.86418 11.9766 5.96875 11.0811 5.96875 9.97656C5.96875 8.87199 6.86418 7.97656 7.96875 7.97656C9.07332 7.97656 9.96875 8.87199 9.96875 9.97656ZM12.0627 6.06274L11.9373 5.93726C11.5914 5.59135 11.4184 5.4184 11.2166 5.29472C11.0376 5.18506 10.8425 5.10425 10.6385 5.05526C10.4083 5 10.1637 5 9.67452 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V10.2C21 9.0799 21 8.51984 20.782 8.09202C20.5903 7.71569 20.2843 7.40973 19.908 7.21799C19.4802 7 18.9201 7 17.8 7H14.3255C13.8363 7 13.5917 7 13.3615 6.94474C13.1575 6.89575 12.9624 6.81494 12.7834 6.70528C12.5816 6.5816 12.4086 6.40865 12.0627 6.06274Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
)

export default function ZipButton() {
    const [loading, setLoading] = useState<boolean>(true);

    return(
        <>
            <button className="btn w-[125px] h-[50px] xs:w-[180px] xs:h-[80px] bg-white shadow-sm rounded-lg flex items-center text-abi-gray hover:text-white justify-around" onClick={async () => {
                var modal = document.getElementById(`zip-modal`) as HTMLDialogElement;
                modal.showModal();
                await createZip();
                setLoading(false)
            }}>
                <span className="font-semibold text-2xl">Zip</span>
                {zipSVG}
            </button>
            <ZipModal loading={loading} setLoading={setLoading}/>
        </>
    );
}

function ZipModal({loading, setLoading}: {loading: boolean, setLoading: React.Dispatch<React.SetStateAction<boolean>>}) {
    return(
        <dialog className="modal" id="zip-modal" >
            <div className="modal-box flex flex-col justify-center items-center">
                { loading ? 
                    <>
                        <span className="font-semibold text-2xl">Zip Datei wird erstellt!</span>
                        <div className="loading loading-dots loading-lg"></div>
                        <span className="font-semibold text-sm text-gray-400">Bitte haben sie etwas geduld</span>
                    </> : 
                    <>
                        <span className="font-semibold text-2xl">Zip Datei wurde erstellt!</span>
                        <span className="font-semibold text-sm text-gray-400">Sie können das Feld jetzt schliesen</span>
                    </>
                }
                
            </div>
            <form method="dialog" className="modal-backdrop">
                <button onClick={(e) => {
                    e.preventDefault();
                    if (loading) return;
                    var modal = document.getElementById(`zip-modal`) as HTMLDialogElement;
                    modal.close();
                    setLoading(true)
                }}>close</button>
            </form>
        </dialog>
    );
}