"use client";

import React from 'react';
import { SpeakerIcon, MenuBarIcon, UnionIcon } from '@/component/Icons';

interface NavigationBarProps {
    onMenuClick: (e: React.MouseEvent) => void;
    isOverlayOpen: boolean
}

const NavigationBar: React.FC<NavigationBarProps> = ({ onMenuClick, isOverlayOpen }) => {
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
                {isOverlayOpen ? null : (<MenuBarIcon />)}
            </div>
            <div className="flex justify-end">
                <SpeakerIcon />
            </div>
        </div>
    );
};

export default NavigationBar;
