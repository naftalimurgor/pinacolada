import React, { useState } from 'react';
import { IslandOne, IslandTwo, IslandThree, IslandFour, IslandFive, IslandSix, IslandSeven, IslandEight } from '@/component/Icons/Archipelago';


interface ArchipelagoMapProps {
    onIslandHover: (islandName: string) => void;
    onIslandLeave: () => void;
}

const ArchipelagoMap: React.FC<ArchipelagoMapProps> = ({ onIslandHover, onIslandLeave }) => {
    const [islandOneHover, setIslandOneHover] = useState(false)
    const [islandTwoHover, setIslandTwoHover] = useState(false)
    const [islandThreeHover, setIslandThreeHover] = useState(false)
    const [islandFourHover, setIslandFourHover] = useState(false)
    const [islandFiveHover, setIslandFiveHover] = useState(false)
    const [islandSixHover, setIslandSixHover] = useState(false)
    const [islandSevenHover, setIslandSevenHover] = useState(false)
    const [islandEightHover, setIslandEightHover] = useState(false)

    return (
        <div className="relative w-full h-full">
            {/* Each island positioned precisely as per design */}
            <div
                className="absolute cursor-pointer"
                style={{
                    top: '90px',
                    left: '150px'
                }}
                onMouseEnter={() => onIslandHover('Daiquiri Island, A Liquid Staking destination coming soon.')}
                onMouseLeave={onIslandLeave}
            >
                <IslandOne
                    hoverd={islandOneHover}
                    onHover={() => setIslandOneHover(_hoverd => !_hoverd)}
                    onLeave={() => setIslandOneHover(false)}
                />
            </div>

            <div
                className="absolute cursor-pointer"
                style={{
                    width: '227.28px',
                    height: '234.62px',
                    top: '310px',
                    left: '260px'
                }}
                onMouseEnter={() => onIslandHover('Mojito Bay')}
                onMouseLeave={onIslandLeave}
            >
                <IslandTwo
                    hoverd={islandTwoHover}
                    onHover={() => setIslandTwoHover(_hoverd => !_hoverd)}
                    onLeave={() => setIslandTwoHover(false)}
                />
            </div>

            <div
                className="absolute cursor-pointer"
                style={{
                    width: '150px',
                    height: '190px',
                    top: '280px',
                    left: '45px'
                }}
                onMouseEnter={() => onIslandHover('Pina Colada Island')}
                onMouseLeave={onIslandLeave}
            >
                <IslandThree
                    hoverd={islandThreeHover}
                    onHover={() => setIslandThreeHover(_hoverd => !_hoverd)}
                    onLeave={() => setIslandThreeHover(false)}
                />
            </div>
            <div
                className="absolute cursor-pointer"
                style={{
                    width: '180px',
                    height: '180px',
                    top: '30px',
                    left: '720px'
                }}
                onMouseEnter={() => onIslandHover('Rum Island')}
                onMouseLeave={onIslandLeave}
            >
                <IslandFour
                    hoverd={islandFourHover}
                    onHover={() => setIslandFourHover(_hoverd => !_hoverd)}
                    onLeave={() => setIslandFourHover(false)}
                />
            </div>

            <div
                className="absolute cursor-pointer"
                style={{
                    width: '140px',
                    height: '140px',
                    top: '-30px',
                    left: '510px'
                }}
                onMouseEnter={() => onIslandHover('Tequila Shores')}
                onMouseLeave={onIslandLeave}
            >
                <IslandFive
                    hoverd={islandFiveHover}
                    onHover={() => setIslandFiveHover(_hoverd => !_hoverd)}
                    onLeave={() => setIslandFiveHover(false)}
                />
            </div>

            <div
                className="absolute cursor-pointer"
                style={{
                    width: '160px',
                    height: '160px',
                    top: '120px',
                    left: '550px'
                }}
                onMouseEnter={() => onIslandHover('Whiskey Isle')}
                onMouseLeave={onIslandLeave}
            >
                <IslandSix
                    hoverd={islandSixHover}
                    onHover={() => setIslandSixHover(_hoverd => !_hoverd)}
                    onLeave={() => setIslandSixHover(false)}
                />
            </div>

            <div
                className="absolute cursor-pointer"
                style={{
                    width: '140px',
                    height: '140px',
                    top: '-25px',
                    left: '400px'
                }}
                onMouseEnter={() => onIslandHover('Vodka Valley')}
                onMouseLeave={onIslandLeave}
            >
                <IslandSeven
                    hoverd={islandSevenHover}
                    onHover={() => setIslandSevenHover(_hoverd => !_hoverd)}
                    onLeave={() => setIslandSevenHover(false)}
                />
            </div>

            <div
                className="absolute cursor-pointer"
                style={{
                    width: '130px',
                    height: '130px',
                    top: '100px',
                    left: '360px'
                }}
                onMouseEnter={() => onIslandHover('Gin Grove')}
                onMouseLeave={onIslandLeave}
            >
                <IslandEight
                    hoverd={islandEightHover}
                    onHover={() => setIslandEightHover(_hoverd => !_hoverd)}
                    onLeave={() => setIslandEightHover(false)}
                />
            </div>
        </div>
    );
}

export default ArchipelagoMap;
