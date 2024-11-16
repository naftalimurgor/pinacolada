import React, { useState } from 'react';
import Image from 'next/image';
import { } from '@/component/Icons';
import { MenuBarxIcon } from '@/component/Icons';

import ArchipelagoMap from './ArchipelagoMap';

interface PinaColadaInfoOverlayProps {
    isOpen: boolean;
    onClose: () => void;
}

const PinaColadaInfoOverlay: React.FC<PinaColadaInfoOverlayProps> = ({ isOpen, onClose }) => {
    const [hoveredIsland, setHoveredIsland] = useState<string | null>(null);

    return (
        <div className={`overlay ${isOpen ? 'open' : ''} fixed inset-0 bg-sky-200 bg-opacity-80 z-50 flex items-center justify-center p-4`}>
            <div
                onClick={onClose}
                className="absolute top-8 right-8 p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 z-50 cursor-pointer"
                style={{
                    top: '10px',
                    right: '50%',
                    transform: 'translateX(50%)',
                }}
            >
                <MenuBarxIcon />
            </div>

            {/* Main Content Container */}
            <div
                className="folded-container"
                style={{
                    paddingBottom: '48px',
                    width: '100%',
                    height: '100%',
                    top: '50px',
                    backgroundImage: 'url(/paper2.png)',
                    backgroundSize: 'cover',
                    objectFit: 'contain',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',

                }}
            >

                <div className="grid grid-cols-[1fr_2fr] gap-6" style={{ paddingRight: '43px' }}>
                    <div style={{ paddingLeft: '72px', paddingTop: '110px' }}>
                        <h2 className="text-3xl font-extrabold mb-4 relative">
                            ABOUT{' '}
                            <span className="relative inline-block">
                                PIÑA
                                <span
                                    className="absolute left-0 bottom-0 w-full"
                                    style={{
                                        display: 'block',
                                        marginTop: '4px',
                                    }}
                                >
                                    <svg
                                        width="75"
                                        height="6"
                                        viewBox="0 0 75 6"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M45.4745 0.33805C47.2425 0.210152 49.0772 0.0711434 49.5515 0.0293097C50.0259 -0.0127419 54.9654 -0.00903551 60.5281 0.0371559C70.4424 0.119734 75.0753 0.389701 74.9991 0.87994C74.9194 1.39175 69.8741 1.79267 59.9009 2.08006C50.0873 2.36265 45.5612 2.66484 33.8707 3.81831C21.8739 5.00186 7.19595 5.99935 1.7641 6C0.137678 6.00022 0 5.96798 0 5.58777C0 5.36095 0.118073 5.11234 0.262337 5.03543C0.713318 4.79488 3.38001 4.49833 13.1719 3.59934C18.3897 3.12043 25.2697 2.4363 28.4608 2.07897C38.7018 0.932461 42.19 0.575543 45.4745 0.33805Z"
                                            fill="#ADFF00"
                                        />
                                    </svg>
                                </span>
                            </span>
                            COLADA
                        </h2>
                        <p className="mb-4 text-lg" style={{ maxWidth: '100%' }}>
                            Besides being the signature holiday drink of many, it&apos;s also a Caribbean-themed DEX on{' '}
                            <span className="relative inline-block">
                                Archway
                                <span
                                    className="absolute left-0 bottom-0 w-full"
                                    style={{
                                        display: 'block',
                                        marginTop: '4px', // Adjust to add space between text and underline
                                    }}
                                >
                                    <svg
                                        width="75"
                                        height="6"
                                        viewBox="0 0 75 6"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M45.4745 0.33805C47.2425 0.210152 49.0772 0.0711434 49.5515 0.0293097C50.0259 -0.0127419 54.9654 -0.00903551 60.5281 0.0371559C70.4424 0.119734 75.0753 0.389701 74.9991 0.87994C74.9194 1.39175 69.8741 1.79267 59.9009 2.08006C50.0873 2.36265 45.5612 2.66484 33.8707 3.81831C21.8739 5.00186 7.19595 5.99935 1.7641 6C0.137678 6.00022 0 5.96798 0 5.58777C0 5.36095 0.118073 5.11234 0.262337 5.03543C0.713318 4.79488 3.38001 4.49833 13.1719 3.59934C18.3897 3.12043 25.2697 2.4363 28.4608 2.07897C38.7018 0.932461 42.19 0.575543 45.4745 0.33805Z"
                                            fill="#ADFF00"
                                        />
                                    </svg>
                                </span>
                            </span>{' '}
                            where the experience is as sweet as a good pineapple drink.
                        </p>

                        <div className="flex space-x-4 mb-4 relative">

                        </div>
                    </div>

                    <div>
                        <div style={{ maxWidth: '400px', marginTop: '110px', paddingLeft: '62px', borderLeft: '1px solid rgba(0, 0, 0, 0.1)' }}>
                            <h2 className="text-3xl font-extrabold mb-4">
                                THE{' '}
                                <span className="relative inline-block">
                                    ARCH
                                    <span
                                        className="absolute left-0 bottom-0 w-full"
                                        style={{
                                            display: 'block',
                                            marginTop: '4px', // Adjust to add space between text and underline
                                        }}
                                    >
                                        <svg
                                            width="101"
                                            height="40"
                                            viewBox="0 0 101 40"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M34.9962 2.82796L34.9962 2.82796C34.1045 2.94592 32.5489 3.36123 30.6471 3.9536C28.739 4.54792 26.465 5.32612 24.1277 6.17782C19.4561 7.88006 14.516 9.88144 11.7317 11.3009C5.01167 14.7267 1.71716 18.1882 0.871755 22.8818C0.234229 26.4199 1.3741 29.7241 4.11025 32.3116C6.95575 35.0028 11.4564 36.5968 19.1154 37.698C35.5064 40.0545 56.325 38.7298 71.5389 34.3602C77.1536 32.7476 82.6537 30.5961 87.2394 28.3047C91.8179 26.017 95.5093 23.5778 97.4842 21.3811C99.9819 18.6032 100.918 15.4992 99.7566 13.2529C98.7894 11.3826 96.4541 9.7658 92.9096 8.39355C89.3529 7.01658 84.5274 5.86654 78.5041 4.9643C69.9463 3.68258 53.8216 2.13162 43.6957 1.61619C37.4141 1.29643 34.2095 1.13471 32.5762 1.0928C31.7669 1.07203 31.3213 1.07967 31.0766 1.11789C30.9612 1.13592 30.8361 1.16741 30.746 1.25179C30.6339 1.35688 30.6324 1.48701 30.6324 1.53751C30.6324 1.77037 30.8173 1.91195 30.9554 1.98031C31.1098 2.0568 31.3058 2.09734 31.5083 2.09751C32.9009 2.09861 48.9612 3.24708 54.931 3.77341C69.7647 5.08163 80.094 6.44328 87 8.11465C90.4531 8.95037 93.0373 9.86055 94.8966 10.8728C96.7554 11.8847 97.8703 12.988 98.4175 14.2015C98.6421 14.6995 98.7438 14.9925 98.7658 15.2851C98.7878 15.5789 98.7312 15.8947 98.5845 16.4423L98.5845 16.4423C98.2551 17.6742 97.4296 18.984 96.144 20.33C94.8601 21.6742 93.129 23.0422 91.0099 24.3916C86.7719 27.0902 81.0036 29.7004 74.2162 31.891C63.0112 35.507 53.6896 36.9093 39.3101 37.1377C28.2623 37.3131 19.9295 36.7231 13.9726 35.2979C8.00944 33.8713 4.4836 31.6216 2.95912 28.5258L2.73484 28.6363L2.95911 28.5258C2.69285 27.9852 2.53943 27.5694 2.44953 27.0232C2.35817 26.4682 2.33117 25.7716 2.33117 24.6653C2.33117 23.5215 2.35688 22.827 2.45848 22.2501C2.55879 21.6806 2.73483 21.2162 3.05331 20.5367C3.99568 18.526 5.75711 16.6362 8.57248 14.7365C11.3882 12.8366 15.2433 10.9368 20.3514 8.90076C25.0313 7.03561 32.3646 4.53537 34.6369 4.02714C35.1755 3.90666 35.6055 3.78366 35.9167 3.6694C36.0718 3.61245 36.2027 3.55573 36.3047 3.50006C36.3946 3.45094 36.5022 3.38199 36.5631 3.2856C36.5982 3.23009 36.6334 3.13939 36.6039 3.03337C36.5756 2.93151 36.5031 2.87283 36.452 2.84276C36.3573 2.7871 36.2322 2.76765 36.119 2.75894C35.8745 2.74012 35.4993 2.76148 34.9962 2.82796Z"
                                                fill="#ADFF00"
                                                stroke="#ADFF00"
                                                strokeWidth="0.5"
                                            />
                                        </svg>
                                    </span>
                                </span>
                                IPELAGOS
                            </h2>                            <p className="mb-4 text-lg" style={{ maxWidth: '300px' }}>
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
                                <div className="fade-up absolute bottom-0 left-0 bg-black bg-opacity-75 text-white p-2 rounded">
                                    {hoveredIsland} <br /> A Liquid Staking destination coming soon!
                                </div>
                            )}
                        </div>

                        <div className="absolute bottom-24 right-24 text-left" style={{ maxWidth: '300px', paddingTop: '45px', paddingRight: '96px' }}>
                            <p className="mb-2 text-lg">
                                We&apos;re on a mission to make your DeFi journey feel as enjoyable as a Caribbean vacation.
                            </p>
                            <br />
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
