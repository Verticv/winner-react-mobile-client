import React, { useState, useRef, useCallback, useEffect } from "react";
import { useOnClickOutside } from "../../helpers/functions";

export default function DropDownControls({
    children,
    onClose,
    onClick,
    buttonChild,
    isDropdownOpen,
    setDropdownOpen,
    containerStyle = {},
    buttonStyle = {},
    dropdownContainerStyle = {},
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
        <div style={{...containerStyle}} className="relative h-full">
            <button
                style={{...buttonStyle}}
                className="flex relative items-center justify-center h-full"
                onMouseDown={() => {
                    if (onClick) onClick();
                    setOpen(true);
                }}
            >{buttonChild}</button>
            {open && (
                <div style={{...dropdownContainerStyle}} className="h-full absolute text-copy-primary sm:right-0 sm:top-0 sm:mt-10 fixed top-0 right-0 mt-12 justify-center z-30" ref={ref} >
                    {children}
                </div>
            )}
        </div>
    );
}
