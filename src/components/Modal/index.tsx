import React from 'react'; // Add missing import statement for React

import classes from './Modal.module.css';

type ModalProps = {
    children: React.ReactNode;
};

function Modal({ children }: ModalProps) { // Specify the type for the children prop

    const closeHandler = () => {
        // Define the closeHandler function
    };

    return (
        <React.Fragment>
            <div className={classes.backdrop} onClick={closeHandler}></div> {/* Add closing tag for div */}
            <dialog open className={classes.modal}>
                {children}
            </dialog>
        </React.Fragment>
    );
}

export default Modal;