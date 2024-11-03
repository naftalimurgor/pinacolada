import React from 'react';
interface IconProps {
    className?: string;
}


const InfoIcon: React.FC<IconProps> = ({ className }) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <g clipPath="url(#clip0_5713_6161)">
                <path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15Z" stroke="#777777" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 8V11" stroke="#777777" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8 5H8.00667" stroke="#777777" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </g>
            <defs>
                <clipPath id="clip0_5713_6161">
                    <rect width="16" height="16" fill="white" />
                </clipPath>
            </defs>
        </svg>


    );
};

export default InfoIcon;
