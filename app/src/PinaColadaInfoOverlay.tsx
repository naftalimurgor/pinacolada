import React, { useState } from 'react';
import Image from 'next/image';
import MenuBarxIcon from './component/Icons/MenuBarX';
import UnionIcon from './component/Icons/Union';

interface ArchipelagoMapProps {
    onIslandHover: (islandName: string) => void;
    onIslandLeave: () => void;
}

const ArchipelagoMap: React.FC<ArchipelagoMapProps> = ({ onIslandHover, onIslandLeave }) => (
    <svg viewBox="0 0 800 600" className="w-full h-full">
        <path
            d="M100,100 L200,50 L300,100 L250,200 Z"
            fill="#e0e0e0"
            stroke="#000"
            onMouseEnter={() => onIslandHover("Daiquiri Island")}
            onMouseLeave={onIslandLeave}
        />
        <path
            d="M400,200 L500,150 L600,200 L550,300 Z"
            fill="#e0e0e0"
            stroke="#000"
            onMouseEnter={() => onIslandHover("Mojito Bay")}
            onMouseLeave={onIslandLeave}
        />
        <path
            d="M200,300 L300,250 L400,300 L350,400 Z"
            fill="#e0e0e0"
            stroke="#000"
            onMouseEnter={() => onIslandHover("Margarita Cove")}
            onMouseLeave={onIslandLeave}
        />
    </svg>
);

interface PinaColadaInfoOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const PinaColadaInfoOverlay: React.FC<PinaColadaInfoOverlayProps> = ({ isOpen, onClose }) => {
    const [hoveredIsland, setHoveredIsland] = useState<string | null>(null);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-sky-200 bg-opacity-80 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 z-10"
                >
                    <MenuBarxIcon />
                </button>
                <div className="flex justify-start">
                    <UnionIcon />
                </div>
                <div className="p-6 grid grid-cols-2 gap-6">
                    <div>
                        <h2 className="text-2xl font-bold mb-4">ABOUT PIÑA COLADA</h2>
                        <p className="mb-4">
                            Besides being the signature holiday drink of many, it&apos;s also a Caribbean themed DEX on Archway, where the experience is as sweet as a good pineapple drink.
                        </p>
                        <div className="relative w-full h-48 mb-4">
                            <Image
                                src="/pina-colada-image.jpg"
                                layout="fill"
                                objectFit="cover"
                                alt="Piña Colada"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4">THE ARCHIPELAGOS</h2>
                        <p className="mb-4">
                            Think of the Archipelagos as an island hopping experience where you get to taste the best each island has to offer.
                        </p>
                        <p className="mb-4">
                            You can start by swapping with a Piña Colada flavor and then dip with a Liquid Staking Daiquiri.
                        </p>
                        <div className="relative w-full h-48 mb-4">
                            <ArchipelagoMap
                                onIslandHover={setHoveredIsland}
                                onIslandLeave={() => setHoveredIsland(null)}
                            />
                            {hoveredIsland && (
                                <div className="absolute bottom-0 left-0 bg-black bg-opacity-75 text-white p-2 rounded">
                                    {hoveredIsland}
                                </div>
                            )}
                        </div>
                        <p className="mb-2">
                            We&apos;re on a mission to make your DeFi journey feel as enjoyable as a Caribbean vacation.
                        </p>
                        <p>
                            More islands and experiences will be available shortly.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PinaColadaInfoOverlay;
