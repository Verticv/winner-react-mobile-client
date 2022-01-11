import React, { useState, useRef, useCallback, useEffect } from "react";
import { useOnClickOutside } from "../../helpers/functions";

export default function DropDownControls({
    children,
    onClose,
    onClick,
    buttonChild,
    isDropdownOpen,
    setDropdownOpen,
    className,
    dropDownClasses,
    left
}) {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    const handler = useCallback(() => {
        if (open) { 
            setOpen(false)
            if (onClose) { onClose() }
        }
    }, [onClose, open]);

    useOnClickOutside(ref, handler);

    useEffect(() => {
        if (open && !isDropdownOpen && setDropdownOpen) {
            setOpen(false)
            setDropdownOpen(true)
        }
    }, [isDropdownOpen, open, setDropdownOpen])
    
    useOnClickOutside(ref, handler);

    return (
        <div className={`relative ${className}`}>
            <button
                className="flex w-full h-full relative items-center justify-center"
                onMouseDown={() => {
                    if (onClick) onClick();
                    setOpen(true);
                }}
            >{buttonChild}</button>
            {open && (
                <div style={{width: '73vw', height: '80vh', minHeight: '80vh', top: '10%', zIndex: '1000', left: left ? left : ''}} className={`text-copy-primary overflow-scroll rounded-3xl fixed justify-center ${dropDownClasses} top-0`} ref={ref} >
                    {children}
                </div>
            )}
            {open && (
                <div className="w-screen h-screen fixed top-0 left-0" style={{background: 'rgba(0,0,0,0.65)', zIndex: '999'}}>

                </div>
            )}
        </div>
    );
}
