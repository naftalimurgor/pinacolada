import React from 'react';

interface IconProps {
    className?: string;
}


const SwapLeftRightIcon: React.FC<IconProps> = ({ className }) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M11 1L14 4L11 7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2 7V6.66667C2 5.95942 2.28095 5.28115 2.78105 4.78105C3.28115 4.28095 3.95942 4 4.66667 4H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M5 15L2 12L5 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14 9V9.33333C14 10.0406 13.719 10.7189 13.219 11.219C12.7189 11.719 12.0406 12 11.3333 12H2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    );
};

export default SwapLeftRightIcon;
