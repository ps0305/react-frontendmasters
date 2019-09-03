import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

// We're also using a ref here via the hook useRef. Refs are like instance variables for function components.
// This is different from a useState call because the variable returned from that useState call will always refer to the state of the variable when that function was called.
const Modal = ({ children }) => {
    const elRef = useRef(null);
    if(!elRef.current) {
        const div = document.createElement('div');
        elRef.current = div;
    }
    // We're using the feature of useEffect that if you need to clean up after you're done 
    // (we need to remove the div once the Modal is no longer being rendered) you can return a function inside of useEffect that cleans up.  
    useEffect(() => {
        const modalRoot = document.getElementById('modal');
        modalRoot.appendChild(elRef.current);

        return () => modalRoot.removeChild(elRef.current);
    })

    return createPortal(<div>{children}</div>, elRef.current)
};

export default Modal;