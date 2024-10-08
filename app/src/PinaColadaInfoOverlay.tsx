import React, { useState } from 'react';
import Image from 'next/image';
import MenuBarxIcon from './component/Icons/MenuBarX';
import ArchipelagoMap from './ArchipelagoMap';

interface PinaColadaInfoOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const PinaColadaInfoOverlay: React.FC<PinaColadaInfoOverlayProps> = ({ isOpen, onClose }) => {
    const [hoveredIsland, setHoveredIsland] = useState<string | null>(null);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-sky-200 bg-opacity-80 z-50 flex items-center justify-center p-4">
            <div
                className="bg-white bg-opacity-80 rounded-lg shadow-lg relative p-8"
                style={{
                    width: '2020px',
                    height: '776px',
                    backgroundImage: 'url(/design-space-stained-paper.jpg), url(/paper.jpg)',
                    backgroundSize: 'cover, cover',
                    backgroundPosition: 'center, center',
                    backgroundRepeat: 'no-repeat, no-repeat',
                }}
            >
                <div
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 z-50"
                    style={{
                        position: 'absolute',
                        zIndex: 100,
                        top: '-140px',
                        right: '50%',
                        transform: 'translateX(50%)',
                    }}
                >
                    <MenuBarxIcon />
                </div>

                <div className="grid grid-cols-[1fr_2fr] gap-6">
                    <div>
                        <h2 className="text-3xl font-extrabold mb-4">ABOUT PIÑA COLADA</h2>
                        <p className="mb-4 text-lg">
                            Besides being the signature holiday drink of many, it&apos;s also a Caribbean-themed DEX on Archway, where the experience is as sweet as a good pineapple drink.
                        </p>

                        <div className="flex space-x-4 mb-4 relative">
                            <div
                                className="relative w-80 h-80 bg-white p-4"
                                style={{ transform: 'rotate(-5deg)', zIndex: 0, border: '20px solid white' }}
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/pinacoladaisland.png"
                                        layout="fill"
                                        objectFit="cover"
                                        alt="Piña Colada"
                                        className="rounded-sm"
                                    />
                                </div>
                            </div>

                            <div
                                className="relative w-80 h-80 bg-white p-4"
                                style={{
                                    transform: 'rotate(5deg)',
                                    marginLeft: '-20px',
                                    zIndex: 1,
                                    border: '20px solid white',
                                }}
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src="/pinacoladaisland.png"
                                        layout="fill"
                                        objectFit="cover"
                                        alt="Island"
                                        className="rounded-sm"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div style={{ maxWidth: '400px' }}>
                            <h2 className="text-3xl font-extrabold mb-4">THE ARCHIPELAGOS</h2>
                            <p className="mb-4 text-lg" style={{ maxWidth: '300px' }}>
                                Think of the Archipelagos as an island-hopping experience where you get to taste the best each island has to offer.
                            </p>
                            <p className="mb-4 text-lg">
                                You can start by swapping with a Piña Colada flavor and end the day with a Liquid Staking Daiquiri.
                            </p>
                        </div>
                        <div className="relative w-full h-64 mb-4">
                            <ArchipelagoMap
                                onIslandHover={setHoveredIsland}
                                onIslandLeave={() => setHoveredIsland(null)}
                            />
                            {hoveredIsland && (
                                <div className="absolute bottom-0 left-0 bg-black bg-opacity-75 text-white p-2 rounded">
                                    {hoveredIsland} <br /> A Liquid Staking destination coming soon!
                                </div>
                            )}
                        </div>

                        <div className="absolute bottom-24 right-24 text-left" style={{ maxWidth: '300px' }}>
                            <p className="mb-2 text-lg">
                                We&apos;re on a mission to make your DeFi journey feel as enjoyable as a Caribbean vacation.
                            </p>
                            <br/>
                            <p className="text-lg">
                                More islands and experiences will be available shortly.
                            </p>
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default PinaColadaInfoOverlay;
