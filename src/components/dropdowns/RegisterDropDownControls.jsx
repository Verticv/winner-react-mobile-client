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
                <div className={`absolute text-copy-primary fixed mt-24 justify-center z-30 ${dropDownClasses} top-0`} ref={ref} >
                    {children}
                </div>
            )}
        </div>
    );
}
