import React from 'react';
import './modal.css';

const Modal = ({ handleClose, show, children }) => {
    const showHideModalOuter = show ? "modal display-block" : "modal display-none";
    const showHideModalInner = show ? "modal-main modal-transform" : "modal-main display-none";

    return (
        <div className={showHideModalOuter}>
            <div className={showHideModalInner}>
                {children}
                <button className="close-btn" onClick={handleClose}>
                </button>
            </div >

        </div >
    )
}

export default Modal;