"use client";

import React from 'react';
import UnionIcon from './Icons/Union';
import MenuBarIcon from './Icons/MenuBar';
import SpeakerIcon from './Icons/Speaker';

interface NavigationBarProps {
    onMenuClick: (e: React.MouseEvent) => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ onMenuClick }) => {
    return (
        <div className="absolute top-0 left-0 w-full flex justify-between items-center p-4">
            <div className="flex justify-start">
                <UnionIcon />
            </div>
            <div
                className="flex justify-center cursor-pointer z-10"
                onClick={onMenuClick}
                role="button"
                tabIndex={0}
                aria-label="Open menu"
            >
                <MenuBarIcon />
            </div>
            <div className="flex justify-end">
                <SpeakerIcon />
            </div>
        </div>
    );
};

export default NavigationBar;
