'use client'

const questionSVG = (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M39.4243 19.9997C39.4243 25.1514 37.3778 30.0921 33.735 33.7349C30.0922 37.3778 25.1515 39.4243 19.9997 39.4243C14.848 39.4243 9.9073 37.3778 6.26448 33.7349C2.62166 30.0921 0.575146 25.1514 0.575146 19.9997C0.575146 14.8479 2.62166 9.90722 6.26448 6.26441C9.9073 2.62159 14.848 0.575073 19.9997 0.575073C25.1515 0.575073 30.0922 2.62159 33.735 6.26441C37.3778 9.90722 39.4243 14.8479 39.4243 19.9997Z" fill="white"/>
        <path d="M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 2.5624C29.626 2.5624 37.438 10.374 37.438 20C37.438 29.626 29.626 37.438 20 37.438C10.374 37.438 2.5624 29.626 2.5624 20C2.5624 10.374 10.374 2.5624 20 2.5624ZM20.294 6.8124C19.204 6.8184 18.1634 6.9598 17.2376 7.225C16.2978 7.4942 15.4124 7.9218 14.6624 8.4688C14.0148 8.9412 13.3958 9.547 12.925 10.175C12.0932 11.2848 11.6328 12.5052 11.5124 13.9124C11.5044 14.006 11.4984 14.086 11.5 14.0876C11.5032 14.0908 15.8404 14.625 15.8624 14.625C15.873 14.625 15.885 14.5782 15.9188 14.4376C16.307 12.8206 17.016 11.7334 18.1124 11.075C18.9764 10.5562 20.074 10.3526 21.268 10.4812C21.816 10.5402 22.31 10.6732 22.744 10.8812C23.286 11.1414 23.78 11.5534 24.132 12.0438C24.44 12.475 24.624 12.9606 24.682 13.5062C24.698 13.658 24.692 14.0022 24.676 14.15C24.63 14.5152 24.536 14.8256 24.376 15.1438C24.214 15.4632 24.08 15.6466 23.824 15.9062C23.418 16.3216 22.788 16.872 21.668 17.7876C20.948 18.3764 20.46 18.8188 20.044 19.2562C19.0554 20.292 18.6058 21.07 18.3312 22.2C18.1502 22.944 18.08 23.71 18.1 24.838C18.105 25.118 18.1124 25.384 18.1124 25.432V25.518H22.432L22.438 25.038C22.444 24.384 22.48 23.964 22.55 23.556C22.664 22.902 22.836 22.556 23.338 21.994C23.658 21.634 24.078 21.242 24.724 20.7C25.678 19.9018 26.346 19.302 26.976 18.675C27.958 17.6936 28.468 17.023 28.832 16.2376C29.118 15.6192 29.276 15.0044 29.324 14.3312C29.336 14.168 29.338 13.7252 29.324 13.5376C29.234 12.129 28.704 10.887 27.694 9.7312C27.534 9.5494 27.138 9.1538 26.95 8.9876C25.958 8.1088 24.812 7.517 23.438 7.1688C22.6 6.9564 21.792 6.8488 20.768 6.8188C20.612 6.8142 20.45 6.8116 20.294 6.8124ZM18.1124 27.5324V31.9324H22.512V27.5324H18.1124Z" fill="black"/>
    </svg>
)

export default function InfoButton() {
    return(
        <>
            <button className="btn btn-circle btn-ghost flex justify-center items-center" onClick={() => {
                var modal = document.getElementById(`info-modal`) as HTMLDialogElement; 
                console.log(modal)
                if(modal) {modal.showModal()}
            }}>
                {questionSVG}
            </button>
            <InfoModal/>
        </>
    );
}

function InfoModal() {
    return(
        <dialog className="modal" id="info-modal" >
            <div className="modal-box">
                <span className="font-semibold">Info für verifizierte Bilder</span>
            </div>
            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
}