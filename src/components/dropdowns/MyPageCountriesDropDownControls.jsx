import React from "react";
import OutsideAlerter from "components/common/OutsideAlerter";

export default function DropDownControls({
    children,
    buttonChild,
    isDropdownOpen,
    setDropdownOpen
}) {

    return (
        <div className="relative">
            <button
                onMouseDown={() => setDropdownOpen(isOpen => !isOpen)}
                className="flex relative items-center justify-center"
            >{buttonChild}</button>
            {isDropdownOpen && (
                <OutsideAlerter setDropdownOpen={setDropdownOpen}>
                    <div style={{marginTop: '12.4375rem', left: '-0.5rem'}} className="absolute text-copy-primary fixed top-0 justify-center z-30" >
                        {children}
                    </div>
                </OutsideAlerter>
            )}
        </div>
    );
}
