'use client'

import { deleteFile, deleteFilePermanent } from "@/app/lib/imageHandling";
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

const binSVG = (
    <svg width="30px" height="30px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 3.75C1.08579 3.75 0.75 4.08579 0.75 4.5C0.75 4.91421 1.08579 5.25 1.5 5.25V3.75ZM22.5 5.25C22.9142 5.25 23.25 4.91421 23.25 4.5C23.25 4.08579 22.9142 3.75 22.5 3.75V5.25ZM1.5 5.25H22.5V3.75H1.5V5.25Z" fill="currentColor"/>
        <path d="M9.75 1.5V0.75V1.5ZM8.25 3H7.5H8.25ZM7.5 4.5C7.5 4.91421 7.83579 5.25 8.25 5.25C8.66421 5.25 9 4.91421 9 4.5H7.5ZM15 4.5C15 4.91421 15.3358 5.25 15.75 5.25C16.1642 5.25 16.5 4.91421 16.5 4.5H15ZM15.75 3H16.5H15.75ZM14.25 0.75H9.75V2.25H14.25V0.75ZM9.75 0.75C9.15326 0.75 8.58097 0.987053 8.15901 1.40901L9.21967 2.46967C9.36032 2.32902 9.55109 2.25 9.75 2.25V0.75ZM8.15901 1.40901C7.73705 1.83097 7.5 2.40326 7.5 3H9C9 2.80109 9.07902 2.61032 9.21967 2.46967L8.15901 1.40901ZM7.5 3V4.5H9V3H7.5ZM16.5 4.5V3H15V4.5H16.5ZM16.5 3C16.5 2.40326 16.2629 1.83097 15.841 1.40901L14.7803 2.46967C14.921 2.61032 15 2.80109 15 3H16.5ZM15.841 1.40901C15.419 0.987053 14.8467 0.75 14.25 0.75V2.25C14.4489 2.25 14.6397 2.32902 14.7803 2.46967L15.841 1.40901Z" fill="currentColor"/>
        <path d="M9 17.25C9 17.6642 9.33579 18 9.75 18C10.1642 18 10.5 17.6642 10.5 17.25H9ZM10.5 9.75C10.5 9.33579 10.1642 9 9.75 9C9.33579 9 9 9.33579 9 9.75H10.5ZM10.5 17.25V9.75H9V17.25H10.5Z" fill="currentColor"/>
        <path d="M13.5 17.25C13.5 17.6642 13.8358 18 14.25 18C14.6642 18 15 17.6642 15 17.25H13.5ZM15 9.75C15 9.33579 14.6642 9 14.25 9C13.8358 9 13.5 9.33579 13.5 9.75H15ZM15 17.25V9.75H13.5V17.25H15Z" fill="currentColor"/>
        <path d="M18.865 21.124L18.1176 21.0617L18.1176 21.062L18.865 21.124ZM17.37 22.5L17.3701 21.75H17.37V22.5ZM6.631 22.5V21.75H6.63093L6.631 22.5ZM5.136 21.124L5.88343 21.062L5.88341 21.0617L5.136 21.124ZM4.49741 4.43769C4.46299 4.0249 4.10047 3.71818 3.68769 3.75259C3.2749 3.78701 2.96818 4.14953 3.00259 4.56231L4.49741 4.43769ZM20.9974 4.56227C21.0318 4.14949 20.7251 3.78698 20.3123 3.75259C19.8995 3.7182 19.537 4.02495 19.5026 4.43773L20.9974 4.56227ZM18.1176 21.062C18.102 21.2495 18.0165 21.4244 17.878 21.5518L18.8939 22.6555C19.3093 22.2732 19.5658 21.7486 19.6124 21.186L18.1176 21.062ZM17.878 21.5518C17.7396 21.6793 17.5583 21.75 17.3701 21.75L17.3699 23.25C17.9345 23.25 18.4785 23.0379 18.8939 22.6555L17.878 21.5518ZM17.37 21.75H6.631V23.25H17.37V21.75ZM6.63093 21.75C6.44274 21.75 6.26142 21.6793 6.12295 21.5518L5.10713 22.6555C5.52253 23.0379 6.06649 23.25 6.63107 23.25L6.63093 21.75ZM6.12295 21.5518C5.98449 21.4244 5.89899 21.2495 5.88343 21.062L4.38857 21.186C4.43524 21.7486 4.69172 22.2732 5.10713 22.6555L6.12295 21.5518ZM5.88341 21.0617L4.49741 4.43769L3.00259 4.56231L4.38859 21.1863L5.88341 21.0617ZM19.5026 4.43773L18.1176 21.0617L19.6124 21.1863L20.9974 4.56227L19.5026 4.43773Z" fill="currentColor"/>
    </svg>
)

export default function ClearButton({images}: {images: string[]}) {
    const [currentImage, setCurrentImage] = useState<number>(0)
    const router = useRouter();
    const searchParams = useSearchParams();
    const type = searchParams.get('type');
    if (type !== "deleted" || !images || images.length === 0) {
        return <></>
    }

    return(
        <>
            <button className="btn btn-error w-[125px] h-[50px] xs:w-[180px] xs:h-[80px] bg-white shadow-sm rounded-lg flex items-center text-abi-gray hover:text-white justify-around" onClick={() => {
                const modal = document.getElementById("clear-approval-modal") as HTMLDialogElement;
                modal.showModal()
            }}>
                <span className="font-semibold text-xl xs:text-2xl">Clear</span>
                {binSVG}
            </button>
            <ApprovalModal images={images} setCurretImage={setCurrentImage} router={router}/>
            <DeleteModal currentImage={currentImage} imageCount={images.length}/>
        </>
        
    );
}

function ApprovalModal({images, setCurretImage, router}:{images: string[], setCurretImage: React.Dispatch<React.SetStateAction<number>>, router: ReturnType<typeof useRouter>}) {
    return(
        <dialog className="modal" id="clear-approval-modal" >
            <div className="modal-box flex flex-col justify-center items-center">
                <span className="font-semibold text-2xl mb-2">Bist du dir sicher?</span>
                <p className="font-semibold text-xl text-red-600 mb-4 text-balance text-center">Es werden alle Bilder aus dem Deleted Ordner permanent gelöscht!</p>

                <div className="flex gap-5 w-full">
                    <button className="btn btn-success w-[calc(50%-10px)]" onClick={() => {
                        const modal = document.getElementById(`clear-approval-modal`) as HTMLDialogElement;
                        if (modal) {
                            modal.close()
                        }
                    }}>Zurück</button>
                    <button className="btn btn-error w-[calc(50%-10px)]" onClick={() => {
                        const modal = document.getElementById(`clear-approval-modal`) as HTMLDialogElement;
                        if (modal) {
                            modal.close()
                        }
                        handleDeletion(images, setCurretImage, router)
                    }}>Clear</button>
                </div>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button onClick={() => {
                    
                }}>close</button>
            </form>
        </dialog>
    )
}

const handleDeletion = async (selectedImages: string[], setCurrentImage: React.Dispatch<React.SetStateAction<number>>, router: ReturnType<typeof useRouter>) => {
    setCurrentImage(0)
    var modal = document.getElementById(`delete-modal`) as HTMLDialogElement;
    modal.showModal();
    for (var image of selectedImages) {
        var originFolder = image.split("/")[0]
        var student = image.split("/")[1]
        var fileName = image.split("/")[2]
        await deleteFilePermanent(originFolder, student, fileName);
        setCurrentImage(prev => prev+1)
    }
    modal.close()
    router.refresh()
}

function DeleteModal({currentImage, imageCount}: {currentImage: number, imageCount: number}) {
    return(
        <dialog className="modal" id="delete-modal" >
            <div className="modal-box flex flex-col justify-center items-center">
                <span className="font-semibold text-2xl mb-4">Bilder werden gelöscht!</span>
                <progress className="progress progress-primary w-56 h-3" value={`${currentImage}`} max={`${imageCount}`}></progress>
                <span>{currentImage + "/" + imageCount}</span>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button onClick={() => {
                    
                }}>close</button>
            </form>
        </dialog>
    );
}