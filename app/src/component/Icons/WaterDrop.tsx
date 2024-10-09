import React from 'react';

interface IconProps {
    className?: string;
}

const WaterDropIcon: React.FC<IconProps> = ({ className }) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M14 9C14 12.3137 11.3137 15 8 15C4.68629 15 2 12.3137 2 9C2 7.90714 2.29218 6.88252 2.80269 6C3.84012 4.2066 8 1 8 1C8 1 12.1599 4.2066 13.1973 6C13.7078 6.88252 14 7.90714 14 9Z" stroke="currentColor" stroke-opacity="0.6" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    );
};

export default WaterDropIcon;
