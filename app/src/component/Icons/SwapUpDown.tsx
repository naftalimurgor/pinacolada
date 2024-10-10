import React from 'react';

interface IconProps {
    className?: string;
}


const SwapUpDownIcon: React.FC<IconProps> = ({ className }) => {
    return (
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g clip-path="url(#clip0_5647_3544)">
                <path d="M13.8281 12.2539L10.9997 15.0823M10.9997 15.0823L8.17127 12.2539M10.9997 15.0823L11 6.25391M2.17127 4.25421L4.9997 1.42578L7.82812 4.25421M4.95658 2.01157L4.95658 10.4968" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_5647_3544">
                    <rect width="16" height="16" fill="white" transform="translate(16 0.253906) rotate(90)" />
                </clipPath>
            </defs>
        </svg>


    );
};

export default SwapUpDownIcon;
