import React from 'react';

interface IconProps {
    className?: string;
}


const SliderIcon: React.FC<IconProps> = ({ className }) => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
            <path d="M12 4L4 12" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4 4L12 12" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    );
};

export default SliderIcon;
